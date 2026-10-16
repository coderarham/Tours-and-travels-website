"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CarRentalForm } from "../../components/ServiceForms";

gsap.registerPlugin(ScrollTrigger);

const olaUberPoints = [
  "Drops you at one spot, then drives away",
  "You must rebook a new cab at every stop",
  "Driver may cancel — especially during peak hours",
  "Surge pricing doubles rates in rain or rush hour",
  "Cannot leave luggage or shopping bags in the car",
  "Driver has no knowledge of tourist spots",
];

const ourPoints = [
  "Car stays with you the entire day — all stops included",
  "Zero rebooking — driver waits while you explore",
  "Guaranteed driver, no cancellations ever",
  "Fixed transparent price — no surge, no surprises",
  "Lock your bags safely in the car at every stop",
  "Tourist-friendly drivers with local expertise",
];

const packages = [
  {
    icon: "🏙️", name: "Standard City Tour", duration: "8 Hours / 80 Kms",
    badge: "Best for First-Timers", badgeBg: "bg-blue-100 text-blue-700",
    border: "border-blue-200", bg: "bg-blue-50",
    best: "Perfect for covering Kolkata's main highlights in one day — Victoria Memorial, Howrah Bridge, Science City, Park Street.",
    includes: ["Dedicated car for 8 hours", "Up to 80 km coverage", "Professional local driver", "All fuel included", "Flexible stops"],
  },
  {
    icon: "🌆", name: "Extended City Tour", duration: "12 Hours / 120 Kms",
    badge: "Most Popular", badgeBg: "bg-emerald-100 text-emerald-700",
    border: "border-emerald-200", bg: "bg-emerald-50",
    best: "For travellers who want to cover everything — Dakshineswar Temple, Eco Park, Belur Math, and a relaxed dinner at night.",
    includes: ["Dedicated car for 12 hours", "Up to 120 km coverage", "Professional local driver", "All fuel included", "Unlimited stops"],
  },
  {
    icon: "🛣️", name: "Outstation / Multi-Day Trip", duration: "2–3 Days | Custom Kms",
    badge: "Best Value", badgeBg: "bg-indigo-100 text-indigo-700",
    border: "border-indigo-200", bg: "bg-indigo-50",
    best: "Ideal for trips outside Kolkata — Sundarbans, Digha, Mandarmani, Shantiniketan. Car stays with you for multiple days.",
    includes: ["Car for 2–3 days (or more)", "Custom km as per route", "Driver stay & allowance included", "All fuel included", "Full itinerary flexibility"],
  },
];

export default function CarRentalPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-up", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ".fade-up", start: "top 85%" },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <main ref={pageRef}>

        {/* Hero */}
        <section className="pt-32 pb-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-3xl mx-auto">
            <span className="badge badge-blue mb-4">Most Flexible</span>
            <div className="text-6xl my-4">🚗</div>
            <h1 className="section-title text-slate-900 mb-4">Car Rental Only</h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              One car. One driver. Yours for the entire day. Explore Kolkata and beyond at your own pace —
              no waiting, no surge pricing, no limits.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="#booking-form" className="btn-primary">Book This Ride</a>
              <Link href="/" className="btn-outline-blue">← Back to Home</Link>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge badge-blue mb-4">Why Choose Us</span>
              <h2 className="section-title mb-3">Us vs. Ola / Uber</h2>
              <p className="text-slate-500 text-lg">Here's exactly why smart travellers choose a dedicated car over app-based cabs.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 fade-up">
              <div className="card bg-red-50 border-red-100 p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-red-100 flex items-center justify-center text-2xl">😤</div>
                  <h3 className="text-xl font-bold text-red-700">Ola / Uber / App Cabs</h3>
                </div>
                <ul className="space-y-4">
                  {olaUberPoints.map(p => (
                    <li key={p} className="flex items-start gap-3 text-slate-600 text-sm">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">✕</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card bg-emerald-50 border-emerald-100 p-8">
                <div className="flex items-center gap-3 mb-7">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">🌟</div>
                  <h3 className="text-xl font-bold text-emerald-700">MakeMyWay Car Rental</h3>
                </div>
                <ul className="space-y-4">
                  {ourPoints.map(p => (
                    <li key={p} className="flex items-start gap-3 text-slate-700 text-sm">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%)" }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge badge-blue mb-4">Our Packages</span>
              <h2 className="section-title mb-3">Choose Your <span className="accent-blue">Package</span></h2>
              <p className="text-slate-500 text-lg">Three options designed for every type of traveller.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 fade-up">
              {packages.map(pkg => (
                <div key={pkg.name} className={`card bg-white ${pkg.border} p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${pkg.bg} flex items-center justify-center text-3xl`}>{pkg.icon}</div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeBg}`}>{pkg.badge}</span>
                  </div>
                  <h3 className="font-black text-slate-800 text-lg mb-1">{pkg.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">⏱ {pkg.duration}</p>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{pkg.best}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {pkg.includes.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className={`w-4 h-4 rounded-full ${pkg.bg} text-xs flex items-center justify-center font-bold flex-shrink-0`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="#booking-form" className="btn-primary text-sm text-center">Select This Package</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking-form" className="py-20 px-6 scroll-mt-20" style={{ background: "#F7FAF9" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="badge badge-blue mb-3">Book Now</span>
              <h2 className="section-title mb-2">Book Your <span className="accent-blue">Dedicated Car</span></h2>
              <p className="text-slate-500">Fill in the details below. We'll WhatsApp you a confirmed quote within 2 hours.</p>
            </div>
            <div className="rounded-2xl border p-5 sm:p-8" style={{ background: "#fff", borderColor: "#D3D1C7" }}>
              <CarRentalForm />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ background: "linear-gradient(180deg, #f8fafc, #eff6ff)" }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="badge badge-blue mb-4">FAQ</span>
              <h2 className="section-title">Common <span className="accent-blue">Questions</span></h2>
            </div>
            <div className="space-y-4 fade-up">
              {[
                { q: "Can I change my itinerary on the day of travel?", a: "Absolutely! Your itinerary is completely flexible. Add or remove stops anytime during the day — no extra charges." },
                { q: "What cars are available?", a: "Sedans (Swift Dzire, Honda Amaze — max 4 people), SUVs (Innova, Ertiga — max 6 people), and Luxury vehicles (Toyota Fortuner, Mercedes) for VIP travel." },
                { q: "Is there a limit on stops?", a: "No limit at all. The car is yours for the full day. Make as many stops as you like within the agreed coverage area." },
                { q: "What if I need the car for more than one day?", a: "We offer multi-day packages at discounted rates. Select '2 Days', '3 Days', or '4+ Days' in the booking form above." },
                { q: "Do you cover outstation trips like Digha or Sundarbans?", a: "Yes! Our Outstation / Multi-Day package covers all destinations within and outside Kolkata — Digha, Mandarmani, Sundarbans, Shantiniketan, and more." },
              ].map(f => (
                <div key={f.q} className="card bg-white p-6">
                  <h4 className="font-bold text-slate-800 mb-2">❓ {f.q}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
