import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function formatFields(data: Record<string, string | string[]>) {
  return Object.entries(data)
    .filter(([, v]) => v && (Array.isArray(v) ? v.length > 0 : v !== ""))
    .map(([k, v]) => {
      const label = k.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase());
      const value = Array.isArray(v) ? v.join(", ") : v;
      return `<tr>
        <td style="padding:8px 12px;font-weight:600;color:#1F2A28;background:#F0FBF7;border:1px solid #D3D1C7;white-space:nowrap">${label}</td>
        <td style="padding:8px 12px;color:#3D3D3A;border:1px solid #D3D1C7">${value}</td>
      </tr>`;
    })
    .join("");
}

const FORM_LABELS: Record<string, string> = {
  "general-inquiry": "General Inquiry",
  "car-rental": "Car Rental",
  "car-hotel": "Car + Hotel Package",
  "ultimate-package": "Ultimate Package",
};

// Headers for each form type sheet tab
const SHEET_HEADERS: Record<string, string[]> = {
  "general-inquiry": ["Timestamp", "Name", "Email", "WhatsApp", "Destination", "Travel Date", "No. of Travelers", "Message"],
  "car-rental":      ["Timestamp", "Name", "Email", "WhatsApp", "Pickup Location", "Pickup Date", "Pickup Time", "Drop Location", "Drop Date", "Drop Time", "Car Type", "Trip Type", "No. of Passengers", "Special Requests"],
  "car-hotel":       ["Timestamp", "Name", "Email", "WhatsApp", "Pickup Location", "Pickup Date", "Pickup Time", "Drop Location", "Drop Date", "Drop Time", "Destination", "Check-in Date", "Check-out Date", "Hotel Preference", "No. of Rooms", "No. of Guests", "Car Type", "Special Requests"],
  "ultimate-package":["Timestamp", "Name", "Email", "WhatsApp", "Destination", "Travel Date", "Return Date", "No. of Travelers", "Hotel Preference", "Car Type", "Special Requests"],
};

const SHEET_TAB_NAMES: Record<string, string> = {
  "general-inquiry": "General Inquiry",
  "car-rental":      "Car Rental",
  "car-hotel":       "Car + Hotel",
  "ultimate-package":"Ultimate Package",
};

async function appendToSheet(formType: string, data: Record<string, string | string[]>) {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || "{}");
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;
    const tabName = SHEET_TAB_NAMES[formType] ?? formType;
    const headers = SHEET_HEADERS[formType] ?? ["Timestamp", ...Object.keys(data)];

    // Get all sheet tabs
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const existingSheets = meta.data.sheets?.map(s => s.properties?.title) ?? [];

    // Create tab if it doesn't exist
    if (!existingSheets.includes(tabName)) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: { requests: [{ addSheet: { properties: { title: tabName } } }] },
      });
      // Add headers to new tab
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${tabName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [headers] },
      });
    }

    // Append data row
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const values = Object.values(data).map(v => (Array.isArray(v) ? v.join(", ") : v ?? ""));

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[timestamp, ...values]] },
    });
  } catch (err) {
    console.error("Sheets error:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { formType, name, email, whatsapp, ...rest } = body;

    const formLabel = FORM_LABELS[formType] ?? formType;
    const userEmail = email || "";
    const allFields = { name, ...(email ? { email } : {}), whatsapp, ...rest };

    // Email to Owner
    const ownerHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:linear-gradient(135deg,#0F6E56,#1D9E75);padding:24px 28px;border-radius:12px 12px 0 0">
          <h2 style="color:#fff;margin:0;font-size:20px">New Inquiry — ${formLabel}</h2>
          <p style="color:#A8E6CF;margin:6px 0 0;font-size:13px">MakeMyWay Website Form Submission</p>
        </div>
        <div style="background:#fff;padding:24px 28px;border:1px solid #D3D1C7;border-top:none;border-radius:0 0 12px 12px">
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            ${formatFields(allFields)}
          </table>
          <div style="margin-top:20px;padding:12px 16px;background:#FFF8E1;border-left:4px solid #F59E0B;border-radius:6px;font-size:13px;color:#92400E">
            Reply within 2 hours on WhatsApp: <strong>${whatsapp || "—"}</strong>
          </div>
        </div>
      </div>`;

    // Auto-reply to User
    const userHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:linear-gradient(135deg,#0F6E56,#1D9E75);padding:24px 28px;border-radius:12px 12px 0 0">
          <h2 style="color:#fff;margin:0;font-size:20px">We have received your request!</h2>
          <p style="color:#A8E6CF;margin:6px 0 0;font-size:13px">MakeMyWay — Premium Travel from Kolkata</p>
        </div>
        <div style="background:#fff;padding:24px 28px;border:1px solid #D3D1C7;border-top:none;border-radius:0 0 12px 12px">
          <p style="color:#1F2A28;font-size:15px">Hi <strong>${name}</strong>,</p>
          <p style="color:#5F5E5A;font-size:14px;line-height:1.7">
            Thank you for reaching out to <strong>MakeMyWay</strong>! We have received your <strong>${formLabel}</strong> inquiry and our team will get back to you within <strong>2 hours</strong> on WhatsApp.
          </p>
          <div style="background:#F0FBF7;border:1px solid #9FE1CB;border-radius:10px;padding:16px 20px;margin:20px 0">
            <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#0F6E56;text-transform:uppercase;letter-spacing:1px">Your Submission Summary</p>
            <table style="width:100%;border-collapse:collapse;font-size:13px">
              ${formatFields(allFields)}
            </table>
          </div>
          <p style="color:#5F5E5A;font-size:13px">If you need immediate assistance, call or WhatsApp us at:</p>
          <a href="tel:+918910794830" style="display:inline-block;background:#0F6E56;color:#fff;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px">+91 89107 94830</a>
          <p style="color:#9CA3AF;font-size:12px;margin-top:24px">MakeMyWay · Kolkata, West Bengal · makemyway.official@gmail.com</p>
        </div>
      </div>`;

    // Append to Google Sheet (non-blocking)
    await appendToSheet(formLabel, allFields);

    await transporter.sendMail({
      from: `"MakeMyWay Website" <${process.env.GMAIL_USER}>`,
      to: process.env.OWNER_EMAIL,
      subject: `[${formLabel}] New Inquiry from ${name}`,
      html: ownerHtml,
    });

    if (userEmail.includes("@")) {
      await transporter.sendMail({
        from: `"MakeMyWay Travel" <${process.env.GMAIL_USER}>`,
        to: userEmail,
        subject: `We have received your ${formLabel} request — MakeMyWay`,
        html: userHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
