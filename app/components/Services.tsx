"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    href: "/services/car-rental",
    icon: "🚗",
    title: "Car Rental Only",
    badge: "Most Flexible",
    desc: "One car, one verified chauffeur — exclusively yours for the entire day. Explore at your pace with zero surge pricing and zero stress.",
    features: ["Full-day dedicated vehicle", "Professional courteous driver", "100% customizable itinerary", "All fuel & tolls transparent"],
    cta: "Explore Car Rental",
    topColor: "#1B3A6B",
  },
  {
    href: "/services/car-hotel",
    icon: "🏨",
    title: "Car + Hotel Package",
    badge: "Most Popular",
    desc: "The premier combination — handpicked hotel stays coupled with a dedicated sightseeing car ready at your doorstep every morning.",
    features: ["Handpicked 3★ to 5★ verified hotels", "Standard / Deluxe / Suite rooms", "Complimentary daily breakfast", "Dedicated cab for all local travel"],
    cta: "Explore Stay & Ride",
    topColor: "#F28C28",
  },
  {
    href: "/services/ultimate-package",
    icon: "✈️",
    title: "The Ultimate Package",
    badge: "VIP All-Inclusive",
    desc: "Tickets, luxury accommodations, premium chauffeur, curated activities & personal concierge — you just show up and make memories.",
    features: ["Train & flight bookings managed", "Luxury resort & heritage stays", "Exclusive private vehicle throughout", "Day-by-day tailored itinerary"],
    cta: "Explore Ultimate Package",
    topColor: "#122850",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="section-pad px-6" style={{ background: "#FAFBFD" }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="badge badge-emerald mb-4">What We Offer</span>
          <h2 className="section-title mb-4">
            Curated Packages,<br className="hidden sm:block" />
            <span style={{ color: "#1B3A6B" }}> Designed for </span>
            <span style={{ color: "#F28C28" }}>Unforgettable Trips</span>
          </h2>
          <p className="section-subtitle">
            Choose the package crafted for your travel style. Every option comes with 24/7 dedicated support and fixed transparent pricing.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-3 gap-7">
          {services.map((s) => (
            <div
              key={s.href}
              className="service-card card card-hover flex flex-col p-8 transition-all duration-300"
              style={{
                borderTop: `4px solid ${s.topColor}`,
                boxShadow: "0 4px 20px rgba(27,58,107,0.06)",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                  style={{ background: "#F0F4FA" }}>
                  {s.icon}
                </div>
                <span className="badge badge-blue">{s.badge}</span>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: "#1B3A6B" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#4B5563" }}>{s.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#374151" }}>
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={2.5} style={{ color: "#F28C28" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={s.href} className="btn-primary text-sm text-center">
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm flex items-center justify-center gap-3 flex-wrap" style={{ color: "#64748B" }}>
            <span>🔒 100% Safe & Verified</span>
            <span style={{ color: "#CBD5E1" }}>|</span>
            <span>📞 Direct Human Confirmation in 2 Hrs</span>
            <span style={{ color: "#CBD5E1" }}>|</span>
            <span>💰 Zero Hidden Costs Guarantee</span>
          </p>
        </div>

      </div>
    </section>
  );
}
