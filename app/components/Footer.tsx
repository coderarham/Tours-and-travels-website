"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/makemyway.co",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Makemyway/61595481832526/",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/makemyway-co",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@makemyway-co",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:makemyway.official@gmail.com",
    svg: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => { setYear(String(new Date().getFullYear())); }, []);

  return (
    <footer style={{ background: "#0D1F1B" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #0F6E56, #1D9E75)" }}>
                <span className="text-white text-xs font-black">MM</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-black text-white">
                  Make<span style={{ color: "#5DCAA5" }}>MyWay</span>
                </span>
                <span className="text-[9px] font-medium tracking-widest uppercase" style={{ color: "#4B6B63" }}>
                  Premium Travel
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B8C84" }}>
              Premium travel experiences from the City of Joy. Your journey, our passion.
            </p>
            <div className="flex gap-2.5 flex-wrap">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: "#1A3530", color: "#6B8C84" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0F6E56"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1A3530"; (e.currentTarget as HTMLElement).style.color = "#6B8C84"; }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#4B6B63" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Destinations", href: "/#destinations" },
                { label: "Why Choose Us", href: "/#why" },
                { label: "Book Now", href: "/#booking" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm transition-colors" style={{ color: "#6B8C84" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#5DCAA5"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6B8C84"}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#4B6B63" }}>
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Cancellation Policy", href: "/cancellation" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm transition-colors" style={{ color: "#6B8C84" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#5DCAA5"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6B8C84"}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#4B6B63" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 mb-7">
              {[
                { icon: "📍", text: "Kolkata, West Bengal, India", href: undefined },
                { icon: "📞", text: "+91 89107 94830", href: "tel:+918910794830" },
                { icon: "✉️", text: "makemyway.official@gmail.com", href: "mailto:makemyway.official@gmail.com" },
              ].map((c) => (
                <li key={c.text}>
                  {c.href ? (
                    <a href={c.href} className="text-sm flex items-center gap-2 transition-colors" style={{ color: "#6B8C84" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#5DCAA5"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#6B8C84"}>
                      <span>{c.icon}</span>{c.text}
                    </a>
                  ) : (
                    <span className="text-sm flex items-center gap-2" style={{ color: "#6B8C84" }}>
                      <span>{c.icon}</span>{c.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#4B6B63" }}>
              Newsletter
            </h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl px-3 py-2.5 text-sm outline-none transition-colors"
                style={{ background: "#1A3530", border: "1px solid #2A4A44", color: "#fff" }}
                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#0F6E56"}
                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "#2A4A44"}
              />
              <button type="submit" className="btn-primary text-sm px-4 py-2.5 w-full">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #1A3530" }}>
          <p className="text-xs" style={{ color: "#3A5A54" }}>© {year} MakeMyWay. All rights reserved.</p>
          <p className="text-xs" style={{ color: "#3A5A54" }}>Made with ❤️ for the City of Joy</p>
        </div>

      </div>
    </footer>
  );
}
