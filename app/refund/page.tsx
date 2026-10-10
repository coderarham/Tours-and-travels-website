import LegalPageLayout from "../components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy – TravelKolkata",
  description: "TravelKolkata refund timelines, disbursement methods, and non-refundable components.",
};

export default function RefundPage() {
  return (
    <LegalPageLayout
      badge="Refunds"
      icon="💰"
      title="Refund Policy"
      subtitle="Transparent refund timelines and processes for all TravelKolkata bookings."
      lastUpdated="January 2025"
      accentClass="text-slate-900"
      badgeClass="badge-blue"
      sections={[
        {
          id: "processing-timeline",
          title: "Financial Processing Timelines",
          content: (
            <div className="space-y-3">
              <p>
                Once a cancellation request is officially approved and the exact refund amount is calculated, our
                finance department initiates the bank transfer within <strong>48 working hours</strong>.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                <span className="text-2xl">⏱️</span>
                <div>
                  <p className="font-bold text-blue-700 text-sm mb-1">Expected Refund Timeline</p>
                  <p className="text-sm text-slate-600">
                    Depending on your banking institution and original payment method, the credited amount will take
                    approximately <strong>7 to 10 business days</strong> to reflect in your account statement.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: "disbursement",
          title: "Regulated Method of Disbursement",
          content: (
            <div className="space-y-3">
              <p>
                To prevent financial fraud and comply with anti-money laundering (AML) banking regulations, all
                approved refunds are exclusively routed back to the <strong>exact original payment source</strong> used
                during the initial transaction.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                {[
                  { icon: "💳", label: "Credit Card", ok: true },
                  { icon: "🏦", label: "Debit Card", ok: true },
                  { icon: "🌐", label: "Net Banking", ok: true },
                  { icon: "📱", label: "UPI ID", ok: true },
                  { icon: "💵", label: "Cash Refunds", ok: false },
                  { icon: "🔀", label: "Alternate Bank Account", ok: false },
                ].map((m) => (
                  <div key={m.label} className={`flex items-center gap-3 p-3 rounded-xl border text-sm font-medium ${m.ok ? "bg-emerald-50 border-emerald-200 text-emerald-700" : "bg-red-50 border-red-200 text-red-600"}`}>
                    <span>{m.icon}</span>
                    <span>{m.label}</span>
                    <span className="ml-auto">{m.ok ? "✅" : "❌"}</span>
                  </div>
                ))}
              </div>
            </div>
          ),
        },
        {
          id: "non-refundable",
          title: "Non-Refundable Components",
          content: (
            <div className="space-y-3">
              <p>Certain elements of the transaction are permanently non-refundable under all circumstances:</p>
              <ul className="space-y-2">
                {[
                  "Initial platform convenience fees",
                  "Payment gateway processing surcharges (typically 2–3%)",
                  "All applicable government taxes (GST) already remitted to regulatory authorities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-4 h-4 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
        {
          id: "partial-utilization",
          title: "Partial Utilization Clause",
          content: (
            <div className="space-y-3">
              <p>
                No partial refunds, credits, or adjustments will be issued for any unutilized portions of a booked
                itinerary. This strictly includes:
              </p>
              <ul className="space-y-2">
                {[
                  "Early hotel check-outs",
                  "Skipped complimentary meals",
                  "Shortened sightseeing hours",
                  "Unused days of the dedicated vehicle rental caused by the customer's personal scheduling changes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">!</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ),
        },
      ]}
    />
  );
}
