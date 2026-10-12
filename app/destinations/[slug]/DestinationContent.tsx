"use client";
import { useState } from "react";
import { Destination } from "../../data/destinations";

const TABS = ["Explore", "About", "How to Reach"] as const;
type Tab = typeof TABS[number];

export default function DestinationContent({ dest }: { dest: Destination }) {
  const [activeTab, setActiveTab] = useState<Tab>("Explore");

  return (
    <>
      {/* Tabs */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-2 flex">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-3.5 text-xs sm:text-sm transition-all border-b-2 whitespace-nowrap"
              style={{
                borderBottomColor: activeTab === tab ? "#0F6E56" : "transparent",
                color: activeTab === tab ? "#0F6E56" : "#5F5E5A",
                fontWeight: activeTab === tab ? 600 : 400,
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10 flex flex-col lg:flex-row gap-6 sm:gap-8">

        {/* Left — 70% */}
        <div className="flex-1 min-w-0">

          {activeTab === "About" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4" style={{ color: "#1F2A28" }}>About {dest.name}</h2>
              <p className="text-base leading-relaxed" style={{ color: "#5F5E5A" }}>{dest.about}</p>
            </div>
          )}

          {activeTab === "How to Reach" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1F2A28" }}>How to Reach {dest.name}</h2>
              <div className="flex flex-col gap-4">
                {dest.howToReach.air && (
                  <div className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: "#D3D1C7", background: "#FAF9F5" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#E1F5EE" }}>
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#0F6E56"/></svg>
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: "#0F6E56", fontWeight: 600 }}>By Air</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{dest.howToReach.air}</p>
                    </div>
                  </div>
                )}
                {dest.howToReach.train && (
                  <div className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: "#D3D1C7", background: "#FAF9F5" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#E1F5EE" }}>
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="13" rx="2" stroke="#0F6E56" strokeWidth="2"/><path d="M4 11h16M8 16l-2 4M16 16l2 4M8 20h8" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: "#0F6E56", fontWeight: 600 }}>By Train</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{dest.howToReach.train}</p>
                    </div>
                  </div>
                )}
                {dest.howToReach.road && (
                  <div className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: "#D3D1C7", background: "#FAF9F5" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#E1F5EE" }}>
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M3 17l2-7h14l2 7H3z" stroke="#0F6E56" strokeWidth="2"/><circle cx="7.5" cy="17.5" r="1.5" fill="#0F6E56"/><circle cx="16.5" cy="17.5" r="1.5" fill="#0F6E56"/><path d="M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" stroke="#0F6E56" strokeWidth="2"/></svg>
                    </div>
                    <div>
                      <p className="text-sm mb-1" style={{ color: "#0F6E56", fontWeight: 600 }}>By Road</p>
                      <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{dest.howToReach.road}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === "Explore" && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6" style={{ color: "#1F2A28" }}>Must-Visit Spots in {dest.name}</h2>
              <div className="flex flex-col gap-4">
                {dest.attractions.map((a, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-3 p-3 sm:p-4 rounded-2xl border" style={{ borderColor: "#D3D1C7", background: "#fff" }}>
                    {a.image && (
                      <img src={a.image} alt={a.name} className="w-full sm:w-40 h-44 sm:h-28 object-cover rounded-xl flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-base mb-1.5" style={{ color: "#1F2A28" }}>{a.name}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{a.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right — 30% */}
        <div className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6">

          {/* Service Cards */}
          <div className="rounded-2xl border p-4 sm:p-5" style={{ borderColor: "#9FE1CB", background: "#F0FBF7" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "#0F6E56" }}>Plan Your Trip</p>
            <h3 className="text-base font-semibold mb-3" style={{ color: "#1F2A28" }}>How would you like to travel?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {[
                { href: "/services/car-rental", emoji: "🚗", title: "Car Rental Only", desc: "Dedicated car & driver for the day" },
                { href: "/services/car-hotel", emoji: "🏨", title: "Car + Hotel Package", desc: "Stay + sightseeing car combo" },
                { href: "/services/ultimate-package", emoji: "✈️", title: "The Ultimate Package", desc: "Tickets + hotel + car + itinerary" },
              ].map(s => (
                <a key={s.href} href={s.href}
                  className="flex items-start gap-3 p-3 rounded-xl border transition-all"
                  style={{ background: "#fff", borderColor: "#D3D1C7" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#0F6E56"; (e.currentTarget as HTMLElement).style.background = "#E1F5EE"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D3D1C7"; (e.currentTarget as HTMLElement).style.background = "#fff"; }}>
                  <span className="text-2xl">{s.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#1F2A28" }}>{s.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#5F5E5A" }}>{s.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
