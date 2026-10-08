"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-content", { opacity: 0, x: -50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-content", start: "top 80%" },
      });
      gsap.fromTo(".about-visual", { opacity: 0, x: 50 }, {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".about-visual", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="about-content">
          <span className="badge badge-emerald mb-6">Our Story</span>
          <h2 className="section-title mt-4 mb-6">
            Born in <span className="accent-blue">Kolkata,</span><br />Built for Travellers
          </h2>
          <p className="text-slate-500 leading-relaxed mb-5">
            We started with a simple belief: travel should be effortless, memorable, and affordable.
            Based in the heart of Kolkata, we've helped hundreds of families and solo travellers
            explore India's most beautiful destinations without the stress of logistics.
          </p>
          <p className="text-slate-500 leading-relaxed mb-8">
            From the ghats of Varanasi to the beaches of Goa, from the mountains of Darjeeling to
            the temples of Puri — we plan it all, so you can focus on the experience.
          </p>
          <a href="/#booking" className="btn-primary inline-block">Start Your Journey</a>
        </div>

        <div className="about-visual grid grid-cols-2 gap-4">
          {[
            { icon: "🗺️", title: "Expert Planning", desc: "Curated itineraries by local experts", bg: "bg-blue-50", text: "text-blue-700" },
            { icon: "🚗", title: "Premium Fleet", desc: "Sedans, SUVs & luxury vehicles", bg: "bg-emerald-50", text: "text-emerald-700" },
            { icon: "🏨", title: "Top Hotels", desc: "2★ to 5★ partner properties", bg: "bg-indigo-50", text: "text-indigo-700" },
            { icon: "🤝", title: "24/7 Support", desc: "Always here when you need us", bg: "bg-sky-50", text: "text-sky-700" },
          ].map((v) => (
            <div key={v.title} className={`card ${v.bg} border-0 p-6`}>
              <div className="text-3xl mb-3">{v.icon}</div>
              <div className={`font-bold text-sm mb-1 ${v.text}`}>{v.title}</div>
              <div className="text-xs text-slate-500">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
