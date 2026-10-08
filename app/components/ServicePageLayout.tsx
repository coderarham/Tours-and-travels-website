"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface ServicePageConfig {
  badge: string;
  badgeClass: string;
  icon: string;
  title: string;
  tagline: string;
  heroGradient: string;
  videoBg?: string;
  accentColor: string;
  ctaLabel: string;
  ctaService: string;
  ctaClass: string;
  whatWeOffer: {
    heading: string;
    points: { icon: string; title: string; desc: string }[];
  };
  benefits: { icon: string; title: string; desc: string }[];
  howItWorks: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export default function ServicePageLayout({ config }: { config: ServicePageConfig }) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".sp-badge",  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
      gsap.fromTo(".sp-title",  { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.35 });
      gsap.fromTo(".sp-sub",    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.55 });
      gsap.fromTo(".sp-cta",    { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.75 });
      gsap.fromTo(".offer-card",{ opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.12, delay: 0.2, ease: "power3.out",
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={heroRef}>
        {/* ── Hero Banner ── */}
        <section
          className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 text-center overflow-hidden min-h-[60vh] flex items-center justify-center"
          style={!config.videoBg ? { background: config.heroGradient } : {}}
        >
          {/* Video background */}
          {config.videoBg && (
            <>
              <video
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ zIndex: 0 }}
              >
                <source src={config.videoBg} type="video/mp4" />
              </video>
              <div className="absolute inset-0" style={{ zIndex: 1, background: "rgba(0,0,0,0.52)" }} />
            </>
          )}

          <div className="relative w-full max-w-3xl mx-auto" style={{ zIndex: 2 }}>
            <span
              className={`sp-badge badge mb-5 ${
                config.videoBg
                  ? "bg-white/20 text-white border border-white/40"
                  : config.badgeClass
              }`}
            >
              {config.badge}
            </span>
            <div className="sp-title text-5xl sm:text-7xl mb-4">{config.icon}</div>
            <h1
              className="sp-title font-black mb-5 leading-tight"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
                color: config.videoBg ? "#ffffff" : "#0f172a",
                textShadow: config.videoBg ? "0 2px 12px rgba(0,0,0,0.6)" : "none",
              }}
            >
              {config.title}
            </h1>
            <p
              className="sp-sub text-base sm:text-xl leading-relaxed mb-8"
              style={{ color: config.videoBg ? "#e2e8f0" : "#475569" }}
            >
              {config.tagline}
            </p>
            <div className="sp-cta flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Link href={`/#booking?service=${config.ctaService}`} className={config.ctaClass}>
                {config.ctaLabel}
              </Link>
              <Link
                href="/#booking"
                className="font-bold rounded-full px-6 py-3 text-sm border-2 transition-all"
                style={config.videoBg
                  ? { borderColor: "#fff", color: "#fff" }
                  : { borderColor: "#1d4ed8", color: "#1d4ed8" }
                }
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* ── What We Offer ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className={`badge ${config.badgeClass} mb-4`}>What's Included</span>
              <h2 className="section-title">{config.whatWeOffer.heading}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.whatWeOffer.points.map((p) => (
                <div key={p.title} className="offer-card card p-7 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-bold text-slate-800 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Customer Benefits ── */}
        <section
          className="py-24 px-6"
          style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className={`badge ${config.badgeClass} mb-4`}>Why You'll Love It</span>
              <h2 className="section-title">Customer <span className={config.accentColor}>Benefits</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {config.benefits.map((b, i) => (
                <div key={b.title} className="card bg-white p-7 flex gap-5 items-start">
                  <div className="text-4xl flex-shrink-0">{b.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className={`badge ${config.badgeClass} mb-4`}>Simple Process</span>
              <h2 className="section-title">How It <span className={config.accentColor}>Works</span></h2>
            </div>
            <div className="space-y-6">
              {config.howItWorks.map((h, i) => (
                <div key={h.title} className="card p-7 flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">
                    {h.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{h.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section
          className="py-24 px-6"
          style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ecfdf5 100%)" }}
        >
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className={`badge ${config.badgeClass} mb-4`}>FAQ</span>
              <h2 className="section-title">Common <span className={config.accentColor}>Questions</span></h2>
            </div>
            <div className="space-y-4">
              {config.faq.map((f) => (
                <div key={f.q} className="card bg-white p-6">
                  <h4 className="font-bold text-slate-800 mb-2">❓ {f.q}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA Banner ── */}
        <section
          className="py-20 px-6 text-center"
          style={{ background: config.heroGradient }}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title mb-5 text-slate-900">Ready to Book?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Our team is ready to craft the perfect trip for you. Get in touch now.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={`/#booking?service=${config.ctaService}`} className={config.ctaClass}>
                {config.ctaLabel}
              </Link>
              <Link href="/" className="btn-outline-blue">← Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
