"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const them = [
  "Drops you off — then drives away",
  "Rebook a new cab at every stop",
  "Driver cancellations at peak hours",
  "Surge pricing in rain or rush hour",
  "Can't leave luggage in the car",
  "No knowledge of tourist spots",
];

const us = [
  "Car stays with you all day, every stop",
  "Zero rebooking — driver waits for you",
  "Guaranteed driver, no cancellations",
  "Fixed flat rate — no surge ever",
  "Lock your bags safely in the car",
  "Tourist-friendly drivers, local experts",
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".stat-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
      });
      gsap.fromTo(".compare-col", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".compare-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="relative section-pad px-6 overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark Navy / Slate Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(15,27,45,0.92) 0%, rgba(27,58,107,0.80) 45%, rgba(15,27,45,0.95) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto" style={{ zIndex: 10 }}>

        <div className="text-center mb-14">
          <span
            className="inline-block mb-4 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5"
            style={{
              background: "rgba(242,140,40,0.18)",
              color: "#F28C28",
              border: "1px solid rgba(242,140,40,0.4)",
            }}
          >
            Why MakeMyWay
          </span>
          <h2 className="section-title mb-4" style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            The Smarter Way<br />
            <span>to Travel </span>
            <span style={{ color: "#F28C28" }}>Everywhere</span>
          </h2>
          <p className="section-subtitle" style={{ color: "rgba(255,255,255,0.75)" }}>
            See exactly why thousands of travellers choose MakeMyWay over standard app-based cabs.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { n: "500+", l: "Happy Travellers", icon: "😊" },
            { n: "50+",  l: "Destinations Covered", icon: "🗺️" },
            { n: "3",    l: "Custom Packages", icon: "📦" },
            { n: "24/7", l: "Dedicated Support", icon: "🤝" },
          ].map((s) => (
            <div key={s.l} className="stat-item card-flat p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.16)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.25)"
              }}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-black mb-1" style={{ color: "#F28C28" }}>{s.n}</div>
              <div className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="compare-grid grid md:grid-cols-2 gap-6">

          {/* Them */}
          <div className="compare-col card p-8"
            style={{
              background: "rgba(255, 245, 245, 0.96)",
              backdropFilter: "blur(8px)",
              borderColor: "#FECACA",
              boxShadow: "0 8px 30px rgba(0,0,0,0.25)"
            }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "#FEE2DC" }}>😤</div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: "#DC2626" }}>Ola / Uber / App Cabs</h3>
                <p className="text-xs font-medium" style={{ color: "#EF4444" }}>What you deal with</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {them.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm" style={{ color: "#4B5563" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FEE2DC" }}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div className="compare-col card p-8"
            style={{
              background: "rgba(255, 255, 255, 0.97)",
              backdropFilter: "blur(8px)",
              borderColor: "rgba(255,255,255,0.3)",
              borderTop: "4px solid #F28C28",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
            }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "#FEF3E2", color: "#F28C28" }}>✨</div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: "#1B3A6B" }}>
                  Make<span style={{ color: "#F28C28" }}>MyWay</span>
                </h3>
                <p className="text-xs font-semibold" style={{ color: "#F28C28" }}>What you experience</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {us.map((u) => (
                <li key={u} className="flex items-center gap-3 text-sm font-medium" style={{ color: "#0F1B2D" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FEF3E2" }}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#F28C28" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {u}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 text-center">
          <a href="/#booking" className="btn-primary" style={{ boxShadow: "0 8px 25px rgba(242,140,40,0.35)" }}>
            Book Your Dedicated Car →
          </a>
        </div>

      </div>
    </section>
  );
}
