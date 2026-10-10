import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  badge: string;
  icon: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  accentClass: string;
  badgeClass: string;
  sections: LegalSection[];
}

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms", icon: "📋" },
  { label: "Cancellation Policy", href: "/cancellation", icon: "🔄" },
  { label: "Privacy Policy", href: "/privacy", icon: "🔒" },
  { label: "Refund Policy", href: "/refund", icon: "💰" },
];

export default function LegalPageLayout({
  badge, icon, title, subtitle, lastUpdated, accentClass, badgeClass, sections,
}: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
          <div className="max-w-3xl mx-auto">
            <span className={`badge ${badgeClass} mb-4`}>{badge}</span>
            <div className="text-6xl my-4">{icon}</div>
            <h1 className={`section-title mb-4 ${accentClass}`}>{title}</h1>
            <p className="text-slate-500 text-lg mb-3">{subtitle}</p>
            <p className="text-xs text-slate-400 font-medium">Last Updated: {lastUpdated}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 flex flex-col lg:flex-row gap-10">

          {/* Sidebar — Quick Nav */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="card bg-white p-6 sticky top-24">
              <h3 className="font-bold text-slate-800 text-sm uppercase tracking-widest mb-4">Legal Pages</h3>
              <ul className="space-y-2">
                {legalLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        l.label === title
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                      }`}
                    >
                      <span>{l.icon}</span> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 mb-3">Need help?</p>
                <Link href="/#booking" className="btn-primary text-sm text-center block">
                  Contact Us
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 min-w-0">
            {/* Table of Contents */}
            <div className="card bg-slate-50 border-slate-200 p-6 mb-8">
              <h3 className="font-bold text-slate-700 mb-3 text-sm uppercase tracking-widest">Table of Contents</h3>
              <ol className="space-y-1.5">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((s, i) => (
                <div key={s.id} id={s.id} className="card bg-white p-7 sm:p-8 scroll-mt-28">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-800 leading-snug">{s.title}</h2>
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pl-13">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-10 card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 p-8 text-center">
              <p className="text-slate-600 mb-4 font-medium">Have questions about our policies?</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/#booking" className="btn-primary text-sm">Contact Our Team</Link>
                <Link href="/" className="btn-outline-blue text-sm">← Back to Home</Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
