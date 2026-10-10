"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => { setYear(String(new Date().getFullYear())); }, []);

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-xs font-black">TK</span>
              </div>
              <span className="text-xl font-black text-white">
                Travel<span className="text-blue-400">Kolkata</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium travel experiences from the City of Joy. Your journey, our passion.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "in", label: "Instagram" },
                { icon: "tw", label: "Twitter" },
                { icon: "yt", label: "YouTube" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-xs text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/#about" },
                { label: "Our Services", href: "/#services" },
                { label: "Why Choose Us", href: "/#why" },
                { label: "Book Now", href: "/#booking" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Cancellation Policy", href: "/cancellation" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Refund Policy", href: "/refund" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-6">Contact Us</h4>
            <ul className="space-y-3 mb-8">
              <li className="text-sm text-slate-400">📍 Kolkata, West Bengal, India</li>
              <li>
                <a href="tel:+919999999999" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  📞 +91 99999 99999
                </a>
              </li>
              <li>
                <a href="tel:+918888888888" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  📞 +91 88888 88888
                </a>
              </li>
              <li>
                <a href="mailto:hello@travelkolkata.in" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  ✉️ hello@travelkolkata.in
                </a>
              </li>
            </ul>

            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-4">Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input type="email" placeholder="Your email"
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-blue-500 transition-colors" />
              <button type="submit" className="btn-primary text-sm px-4 py-2 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {year} TravelKolkata. All rights reserved.</p>
          <p className="text-xs text-slate-500">Built with ❤️ for the City of Joy</p>
        </div>
      </div>
    </footer>
  );
}
