"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-tag",   { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.3 });
      gsap.fromTo(".hero-h1",    { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.9, delay: 0.5 });
      gsap.fromTo(".hero-sub",   { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, delay: 0.8 });
      gsap.fromTo(".hero-btns",  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.1 });
      gsap.fromTo(".hero-trust", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 1.4 });
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Layer 1: Video */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="https://res.cloudinary.com/di2nqcugo/video/upload/v1791502329/gemini_generated_video_9d0ecd81_aqvs7w.mp4" type="video/mp4" />
      </video>

      {/* Layer 2: Dark overlay for mobile readability */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 10, background: "rgba(0,0,0,0.35)" }}
      />

      {/* Layer 3: Left gradient (desktop) / full gradient (mobile) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 20,
          background: "linear-gradient(to right, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.1) 100%)",
        }}
      />

      {/* Layer 4: Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ zIndex: 20, background: "linear-gradient(to top, #f8fafc, transparent)" }}
      />

      {/* Layer 5: Text Content */}
      <div ref={textRef} className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20" style={{ zIndex: 30 }}>
        <div className="max-w-2xl">
          <span className="hero-tag inline-block text-xs font-bold tracking-widest uppercase bg-white/20 text-white border border-white/40 rounded-full px-4 py-1.5 mb-5">
            🏙️ Starting from the City of Joy
          </span>
          <h1
            className="hero-h1 mb-5 font-black leading-tight text-white"
            style={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            Explore the Unseen.<br />
            <span style={{ color: "#60a5fa" }}>We Drive,</span> You Experience.
          </h1>
          <p
            className="hero-sub text-base sm:text-lg text-slate-200 mb-8 leading-relaxed"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
          >
            From local sightseeing to complete end-to-end luxury travel packages.
            Your ultimate travel partner starting from the City of Joy.
          </p>
          <div className="hero-btns flex flex-wrap gap-3 mb-8">
            <a href="/#booking" className="btn-primary text-sm sm:text-base">Book Your Ride</a>
            <a
              href="/#services"
              className="font-bold rounded-full px-6 py-3 text-sm sm:text-base border-2 border-white text-white transition-all hover:bg-white hover:text-slate-900"
            >
              Explore Services
            </a>
          </div>
          <div className="hero-trust flex flex-wrap gap-4 sm:gap-6">
            {[
              { icon: "✅", text: "500+ Happy Travellers" },
              { icon: "🏆", text: "Fixed Transparent Pricing" },
              { icon: "🚗", text: "Premium Fleet" },
            ].map((t) => (
              <div
                key={t.text}
                className="flex items-center gap-2 text-xs sm:text-sm text-white font-semibold"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                <span>{t.icon}</span> {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ zIndex: 30 }}
      >
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
}
