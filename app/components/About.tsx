"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-content", { opacity: 0, x: -40 }, {
        opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".about-content", start: "top 80%" },
      });
      gsap.fromTo(".about-visual", { opacity: 0, x: 40 }, {
        opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".about-visual", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const cards = [
    { icon: "🗺️", title: "Expert Planning", desc: "Curated itineraries by local travel experts who know every hidden gem." },
    { icon: "🚗", title: "Premium Fleet", desc: "Sedans, SUVs & luxury vehicles — all well-maintained and verified." },
    { icon: "🏨", title: "Top Hotels", desc: "Handpicked 3★ to 5★ partner properties — safe, clean, and quality-checked." },
    { icon: "🤝", title: "24/7 Support", desc: "A real person answers your call — any time, any day of the trip." },
  ];

  const stats = [
    { n: "500+", l: "Happy Travellers" },
    { n: "50+", l: "Destinations" },
    { n: "5★", l: "Avg. Rating" },
  ];

  return (
    <section id="about" ref={ref} className="section-pad" style={{ background: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

        <div className="about-content">
          <span className="badge badge-emerald mb-5">Our Story</span>
          <h2 className="section-title mt-3 mb-6">
            Born in Kolkata,<br />
            <span style={{ color: "#1B3A6B" }}>Crafted for </span>
            <span style={{ color: "#F28C28" }}>Travellers</span>
          </h2>
          <p className="leading-relaxed mb-5 text-base" style={{ color: "#4B5563" }}>
            We started with a simple belief — travel should be effortless, memorable, and stress-free.
            Based in the heart of Kolkata, we've helped hundreds of families and solo travellers
            explore India's most beautiful destinations without the hassle of logistics.
          </p>
          <p className="leading-relaxed mb-8 text-base" style={{ color: "#4B5563" }}>
            From the ghats of Varanasi to the beaches of Goa, from the mountains of Darjeeling to
            the temples of Puri — we plan it all, so you can focus entirely on the experience.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.l} className="text-center px-5 py-3 rounded-2xl border shadow-sm"
                style={{ background: "#F0F4FA", borderColor: "#CBD8EC" }}>
                <div className="text-xl font-black" style={{ color: "#1B3A6B" }}>{s.n}</div>
                <div className="text-xs font-semibold mt-0.5" style={{ color: "#4B5563" }}>{s.l}</div>
              </div>
            ))}
          </div>

          <a href="/about" className="btn-primary">Read Full Story →</a>
        </div>

        <div className="about-visual grid grid-cols-2 gap-4">
          {cards.map((v) => (
            <div key={v.title} className="card-flat card-hover p-6 shadow-sm"
              style={{ background: "#FAFBFD", borderColor: "#E2E8F0" }}>
              <div className="text-3xl mb-3">{v.icon}</div>
              <div className="font-bold text-sm mb-1.5" style={{ color: "#1B3A6B" }}>{v.title}</div>
              <div className="text-xs leading-relaxed" style={{ color: "#4B5563" }}>{v.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
