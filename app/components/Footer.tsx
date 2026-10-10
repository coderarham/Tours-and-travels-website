"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => { setYear(String(new Date().getFullYear())); }, []);

  return (
    <footer style={{ background: "#0D1F1B" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #0F6E56, #1D9E75)" }}>
                <span className="text-white text-xs font-black">TK</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-black text-white">
                  Travel<span style={{ color: "#5DCAA5" }}>Kolkata</span>
                </span>
                <span className="text-[9px] font-medium tracking-widest uppercase" style={{ color: "#4B6B63" }}>
                  Premium Travel
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B8C84" }}>
              Premium travel experiences from the City of Joy. Your journey, our passion.
            </p>
            <div className="flex gap-2.5">
              {["f", "in", "tw", "yt"].map((icon) => (
                <a key={icon} href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold transition-all"
                  style={{ background: "#1A3530", color: "#6B8C84" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0F6E56"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1A3530"; (e.currentTarget as HTMLElement).style.color = "#6B8C84"; }}
                >
                  {icon}
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
                { label: "About Us", href: "/#about" },
                { label: "Our Services", href: "/#services" },
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
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#4B6B63" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 mb-7">
              {[
                { icon: "📍", text: "Kolkata, West Bengal, India", href: undefined },
                { icon: "📞", text: "+91 99999 99999", href: "tel:+919999999999" },
                { icon: "📞", text: "+91 88888 88888", href: "tel:+918888888888" },
                { icon: "✉️", text: "hello@travelkolkata.in", href: "mailto:hello@travelkolkata.in" },
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
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-xl px-3 py-2.5 text-sm outline-none transition-colors"
                style={{ background: "#1A3530", border: "1px solid #2A4A44", color: "#fff" }}
                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = "#0F6E56"}
                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = "#2A4A44"}
              />
              <button type="submit" className="btn-primary text-xs px-4 py-2.5 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid #1A3530" }}>
          <p className="text-xs" style={{ color: "#3A5A54" }}>© {year} TravelKolkata. All rights reserved.</p>
          <p className="text-xs" style={{ color: "#3A5A54" }}>Made with ❤️ for the City of Joy</p>
        </div>

      </div>
    </footer>
  );
}
