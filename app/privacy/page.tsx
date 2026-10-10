import LegalPageLayout from "../components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – TravelKolkata",
  description: "How TravelKolkata collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      badge="Privacy"
      icon="🔒"
      title="Privacy Policy"
      subtitle="Your privacy is important to us. Here's how we handle your data."
      lastUpdated="January 2025"
      accentClass="text-slate-900"
      badgeClass="badge-blue"
      sections={[
        {
          id: "data-collection",
          title: "Data Collection and Storage",
          content: (
            <div className="space-y-3">
              <p>
                To successfully fulfill travel arrangements, we systematically collect Personally Identifiable
                Information (PII). This includes, but is not limited to:
              </p>
              <ul className="space-y-2 mt-2">
                {[
                  "Full legal names",
                  "Active contact numbers",
                  "Verified email addresses",
                  "Physical billing addresses",
                  "Copies of government-issued identification (Aadhaar, PAN, or Passport) — strictly required for hotel check-ins and legal compliance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          id: "data-usage",
          title: "Strict Data Utilization and Sharing",
          content: (
            <div className="space-y-3">
              <p>
                The data collected is utilized exclusively for processing your specific travel reservations, issuing
                tickets, and ensuring seamless communication regarding your itinerary.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <p className="text-sm font-bold text-emerald-700 mb-1">✅ We DO:</p>
                <p className="text-sm text-slate-600">Share your information only with verified service vendors (hotel managers, airline operators, designated transport drivers) who are directly involved in executing your booked itinerary.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <p className="text-sm font-bold text-red-700 mb-1">❌ We DO NOT:</p>
                <p className="text-sm text-slate-600">Sell, lease, or distribute your personal data to external marketing agencies or third-party advertisers.</p>
              </div>
            </div>
          ),
        },
        {
          id: "security",
          title: "Digital Security and Payment Encryption",
          content: (
            <p>
              All digital transactions, credit card processing, and financial data transmissions are executed through
              highly secure, industry-standard <strong>SSL (Secure Socket Layer) encrypted payment gateways</strong>.
              Our internal servers do not store, log, or retain your complete credit card numbers, CVV codes, or UPI
              PINs at any point during or after the transaction.
            </p>
          ),
        },
      ]}
    />
  );
}
