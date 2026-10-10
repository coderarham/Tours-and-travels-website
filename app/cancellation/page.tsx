import LegalPageLayout from "../components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy – TravelKolkata",
  description: "Understand our cancellation timelines and penalties for TravelKolkata bookings.",
};

export default function CancellationPage() {
  return (
    <LegalPageLayout
      badge="Policy"
      icon="🔄"
      title="Cancellation Policy"
      subtitle="Our structured cancellation policy to protect both travellers and service providers."
      lastUpdated="January 2025"
      accentClass="text-slate-900"
      badgeClass="badge-emerald"
      sections={[
        {
          id: "tiered-cancellation",
          title: "Standard Tiered Cancellation Timelines",
          content: (
            <div className="space-y-4">
              <p>
                Our primary business model involves blocking dedicated resources (vehicles and premium hotel rooms)
                well in advance. Therefore, the following structured cancellation penalties apply to all direct bookings:
              </p>
              <div className="space-y-3 mt-4">
                {[
                  {
                    time: "15+ Days Before Travel",
                    penalty: "₹1,000 flat admin fee",
                    refund: "Remaining balance fully refunded",
                    color: "bg-emerald-50 border-emerald-200",
                    badge: "bg-emerald-100 text-emerald-700",
                  },
                  {
                    time: "7 – 14 Days Before Travel",
                    penalty: "25% deduction of total invoice",
                    refund: "75% refunded",
                    color: "bg-yellow-50 border-yellow-200",
                    badge: "bg-yellow-100 text-yellow-700",
                  },
                  {
                    time: "48 Hours – 7 Days Before Travel",
                    penalty: "50% penalty of total package cost",
                    refund: "50% refunded",
                    color: "bg-orange-50 border-orange-200",
                    badge: "bg-orange-100 text-orange-700",
                  },
                  {
                    time: "Within 48 Hours / No-Show",
                    penalty: "100% forfeiture",
                    refund: "No refund",
                    color: "bg-red-50 border-red-200",
                    badge: "bg-red-100 text-red-700",
                  },
                ].map((row) => (
                  <div key={row.time} className={`rounded-xl border p-4 ${row.color}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className="font-bold text-slate-800 text-sm">{row.time}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.badge}`}>{row.refund}</span>
                    </div>
                    <p className="text-sm text-slate-600">Penalty: {row.penalty}</p>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          id: "third-party",
          title: "Third-Party Vendor Cancellations",
          content: (
            <p>
              For comprehensive packages that include airline tickets, railway reservations, or highly specialized
              boutique hotels, the cancellation policy of that specific vendor will completely override our standard
              platform policy. Customers will bear the exact cancellation fees charged by the airline or hotel, plus
              a standard <strong>₹500 platform convenience fee</strong>.
            </p>
          ),
        },
      ]}
    />
  );
}
