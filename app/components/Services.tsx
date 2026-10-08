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
    badgeClass: "badge-blue",
    desc: "Full-day dedicated car for city tours. The car stays with you — no point-to-point drops, no surge pricing.",
    features: ["Full-day dedicated vehicle", "Experienced local driver", "Flexible custom itinerary", "All fuel included"],
    cta: "Explore Car Rental",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    accentText: "text-blue-700",
    accentIcon: "bg-blue-100",
    ctaClass: "btn-primary",
  },
  {
    href: "/services/car-hotel",
    icon: "🏨",
    title: "Car + Hotel Package",
    badge: "Most Popular",
    badgeClass: "badge-emerald",
    desc: "Seamless combo of sightseeing cars and hotel stays (2★–5★) with complimentary breakfast every morning.",
    features: ["2★ to 5★ hotel options", "Standard / Deluxe / Luxury rooms", "Complimentary breakfast", "Car ready outside hotel daily"],
    cta: "Explore Stay & Ride",
    accentBg: "bg-emerald-50",
    accentBorder: "border-emerald-100",
    accentText: "text-emerald-700",
    accentIcon: "bg-emerald-100",
    ctaClass: "btn-emerald",
  },
  {
    href: "/services/ultimate-package",
    icon: "✈️",
    title: "The Ultimate Package",
    badge: "Zero Stress",
    badgeClass: "badge-blue",
    desc: "Train/flight tickets + luxury hotels + full-day cars + complete itinerary. We handle everything.",
    features: ["Train & flight tickets", "Luxury hotel stays", "Full-day sightseeing car", "Complete itinerary planning"],
    cta: "Explore Ultimate Package",
    accentBg: "bg-indigo-50",
    accentBorder: "border-indigo-100",
    accentText: "text-indigo-700",
    accentIcon: "bg-indigo-100",
    ctaClass: "btn-primary",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".service-card", { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".services-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="badge badge-blue mb-4">What We Offer</span>
          <h2 className="section-title mb-4">
            Our <span className="accent-blue">Services</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg">
            Three thoughtfully designed packages for every kind of traveller.
          </p>
        </div>

        <div className="services-grid grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.href}
              className={`service-card card ${s.accentBg} ${s.accentBorder} p-8 flex flex-col transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${s.accentIcon} flex items-center justify-center text-3xl`}>
                  {s.icon}
                </div>
                <span className={`badge ${s.badgeClass}`}>{s.badge}</span>
              </div>

              <h3 className={`text-xl font-bold mb-3 ${s.accentText}`}>{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className={`w-4 h-4 rounded-full ${s.accentIcon} ${s.accentText} flex items-center justify-center text-xs flex-shrink-0 font-bold`}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={s.href} className={`${s.ctaClass} text-sm text-center`}>
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
