"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const them = [
  "High cost for multiple stops",
  "Driver cancellations mid-trip",
  "Point-to-point drops only",
  "Surge pricing at peak hours",
  "No itinerary guidance",
  "No hospitality guarantee",
];

const us = [
  "Fixed transparent pricing",
  "Dedicated vehicle for entire trip",
  "Full-day sightseeing included",
  "No surge — flat rates always",
  "Complete itinerary planning",
  "Premium hospitality guaranteed",
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".compare-col", { opacity: 0, x: (i) => (i === 0 ? -50 : 50) }, {
        opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: ".compare-grid", start: "top 75%" },
      });
      gsap.fromTo(".stat-item", { opacity: 0, scale: 0.85 }, {
        opacity: 1, scale: 1, duration: 0.5, stagger: 0.1,
        scrollTrigger: { trigger: ".stats-row", start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eff6ff 50%, #f8fafc 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge badge-blue mb-4">The Difference</span>
          <h2 className="section-title mb-4">
            Why <span className="accent-blue">Choose Us?</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            See why smart travellers choose us over regular cab apps.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { n: "500+", l: "Happy Travellers", icon: "😊" },
            { n: "50+", l: "Destinations Covered", icon: "🗺️" },
            { n: "3", l: "Service Packages", icon: "📦" },
            { n: "24/7", l: "Customer Support", icon: "🤝" },
          ].map((s) => (
            <div key={s.l} className="stat-item card bg-white p-6 text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-3xl font-black accent-blue mb-1">{s.n}</div>
              <div className="text-sm text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="compare-grid grid md:grid-cols-2 gap-6">
          {/* Them */}
          <div className="compare-col card bg-red-50 border-red-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-xl">😤</div>
              <h3 className="text-xl font-bold text-red-700">Regular Cabs / Apps</h3>
            </div>
            <ul className="space-y-4">
              {them.map((t) => (
                <li key={t} className="flex items-center gap-3 text-slate-600">
                  <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs flex-shrink-0 font-bold">✕</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Us */}
          <div className="compare-col card bg-emerald-50 border-emerald-100 p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-xl">🌟</div>
              <h3 className="text-xl font-bold text-emerald-700">TravelKolkata</h3>
            </div>
            <ul className="space-y-4">
              {us.map((u) => (
                <li key={u} className="flex items-center gap-3 text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs flex-shrink-0 font-bold">✓</span>
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
