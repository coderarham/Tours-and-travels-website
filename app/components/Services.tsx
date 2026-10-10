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
    desc: "One car, one driver — yours for the entire day. Explore at your own pace with zero surge pricing and no rebooking stress.",
    features: ["Full-day dedicated vehicle", "Experienced local driver", "Flexible custom itinerary", "All fuel included"],
    cta: "Explore Car Rental",
    topColor: "#0F6E56",
  },
  {
    href: "/services/car-hotel",
    icon: "🏨",
    title: "Car + Hotel Package",
    badge: "Most Popular",
    desc: "The perfect combo — a comfortable hotel stay with a dedicated sightseeing car every morning. Breakfast included.",
    features: ["2★ to 5★ hotel options", "Standard / Deluxe / Luxury rooms", "Complimentary breakfast daily", "Car ready outside hotel every morning"],
    cta: "Explore Stay & Ride",
    topColor: "#1D9E75",
  },
  {
    href: "/services/ultimate-package",
    icon: "✈️",
    title: "The Ultimate Package",
    badge: "Zero Stress",
    desc: "Tickets + hotels + cars + full itinerary — everything managed by our team. You just show up and enjoy.",
    features: ["Train & flight tickets booked", "Luxury hotel stays", "Full-day sightseeing car", "Complete day-by-day itinerary"],
    cta: "Explore Ultimate Package",
    topColor: "#085041",
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
    <section id="services" ref={sectionRef} className="section-pad px-6" style={{ background: "#FAF9F5" }}>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <span className="badge badge-blue mb-4">What We Offer</span>
          <h2 className="section-title mb-4">
            Three Packages,<br className="hidden sm:block" />
            <span style={{ color: "#0F6E56" }}> One Goal — Your Best Trip</span>
          </h2>
          <p className="section-subtitle">
            Choose the package that fits your journey. Every option comes with dedicated support and transparent pricing.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-3 gap-7">
          {services.map((s) => (
            <div
              key={s.href}
              className="service-card card card-hover flex flex-col p-8"
              style={{ borderTop: `4px solid ${s.topColor}` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: "#E1F5EE" }}>
                  {s.icon}
                </div>
                <span className="badge badge-blue">{s.badge}</span>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: "#085041" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "#5F5E5A" }}>{s.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "#5F5E5A" }}>
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor" strokeWidth={2.5} style={{ color: "#0F6E56" }}>
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
          <p className="text-sm flex items-center justify-center gap-3 flex-wrap" style={{ color: "#888780" }}>
            <span>🔒 Secure booking</span>
            <span style={{ color: "#D3D1C7" }}>|</span>
            <span>📞 Confirmed within 2 hours</span>
            <span style={{ color: "#D3D1C7" }}>|</span>
            <span>💰 Fixed transparent pricing</span>
          </p>
        </div>

      </div>
    </section>
  );
}
