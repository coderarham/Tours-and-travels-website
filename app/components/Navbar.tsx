"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Why Choose Us", href: "/#why" },
  { label: "Contact", href: "/#booking" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" });
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #D3D1C7" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 12px rgba(15,110,86,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
            style={{ background: "linear-gradient(135deg, #0F6E56, #1D9E75)" }}>
            <span className="text-white text-xs font-black">TK</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-base font-black tracking-tight" style={{ color: "#1F2A28" }}>
              Travel<span style={{ color: "#0F6E56" }}>Kolkata</span>
            </span>
            <span className="text-[9px] font-medium tracking-widest uppercase" style={{ color: "#888780" }}>
              Premium Travel
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm font-medium px-3 py-2 rounded-lg transition-all"
                style={{ color: "#5F5E5A" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0F6E56"; (e.currentTarget as HTMLElement).style.background = "#E1F5EE"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#5F5E5A"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919999999999"
            className="text-sm font-semibold flex items-center gap-1.5 transition-colors"
            style={{ color: "#5F5E5A" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#0F6E56"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#5F5E5A"}>
            <span>📞</span> +91 99999 99999
          </a>
          <Link href="/#booking" className="btn-primary text-sm py-2.5 px-5">
            Plan My Trip
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "#1F2A28" }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-1 shadow-lg"
          style={{ background: "#FFFFFF", borderTop: "1px solid #D3D1C7" }}>
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-2.5 px-3 rounded-lg transition-colors"
              style={{ color: "#5F5E5A" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 flex flex-col gap-2" style={{ borderTop: "1px solid #D3D1C7" }}>
            <a href="tel:+919999999999" className="text-sm font-semibold py-2 px-3" style={{ color: "#5F5E5A" }}>
              📞 +91 99999 99999
            </a>
            <Link href="/#booking" onClick={() => setOpen(false)} className="btn-primary text-sm text-center">
              Plan My Trip
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
