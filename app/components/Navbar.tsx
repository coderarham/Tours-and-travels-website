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
    gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
            <span className="text-white text-xs font-black">TK</span>
          </div>
          <span className="text-xl font-black tracking-tight text-slate-900">
            Travel<span className="accent-blue">Kolkata</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/#booking" className="hidden md:block btn-primary text-sm">
          Plan My Trip
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-700 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 pb-6 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors py-1"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/#booking" onClick={() => setOpen(false)} className="btn-primary text-sm text-center">
            Plan My Trip
          </Link>
        </div>
      )}
    </nav>
  );
}
