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
    <section id="why" ref={sectionRef} className="section-pad px-6" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="badge badge-blue mb-4">Why TravelKolkata</span>
          <h2 className="section-title mb-4">
            The Smarter Way<br />
            <span style={{ color: "#0F6E56" }}>to Travel Kolkata</span>
          </h2>
          <p className="section-subtitle">
            See exactly why thousands of travellers choose us over app-based cabs.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {[
            { n: "500+", l: "Happy Travellers", icon: "😊" },
            { n: "50+",  l: "Destinations Covered", icon: "🗺️" },
            { n: "3",    l: "Service Packages", icon: "📦" },
            { n: "24/7", l: "Customer Support", icon: "🤝" },
          ].map((s) => (
            <div key={s.l} className="stat-item card-flat p-6 text-center"
              style={{ background: "#E1F5EE", borderColor: "#9FE1CB" }}>
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-2xl font-black mb-1" style={{ color: "#0F6E56" }}>{s.n}</div>
              <div className="text-xs font-medium" style={{ color: "#5F5E5A" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="compare-grid grid md:grid-cols-2 gap-6">

          {/* Them */}
          <div className="compare-col card p-8" style={{ background: "#FFF5F5", borderColor: "#FECACA" }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "#FEE2E2" }}>😤</div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: "#B91C1C" }}>Ola / Uber / App Cabs</h3>
                <p className="text-xs font-medium" style={{ color: "#EF4444" }}>What you deal with</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {them.map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm" style={{ color: "#5F5E5A" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#FEE2E2" }}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#EF4444" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div className="compare-col card p-8" style={{ background: "#E1F5EE", borderColor: "#9FE1CB" }}>
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: "#9FE1CB" }}>✨</div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: "#085041" }}>TravelKolkata</h3>
                <p className="text-xs font-medium" style={{ color: "#0F6E56" }}>What you get</p>
              </div>
            </div>
            <ul className="space-y-3.5">
              {us.map((u) => (
                <li key={u} className="flex items-center gap-3 text-sm" style={{ color: "#1F2A28" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#9FE1CB" }}>
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="#085041" strokeWidth={3}>
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
          <a href="/#booking" className="btn-primary">Book Your Dedicated Car →</a>
        </div>

      </div>
    </section>
  );
}
