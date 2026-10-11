"use client";
import Link from "next/link";
import { destinations } from "../data/destinations";

export default function DestinationsGrid() {
  return (
    <section className="section-pad" style={{ background: "#FAF9F5" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="badge badge-blue mb-3" style={{ fontSize: "0.8rem", padding: "0.4rem 1.1rem" }}>Explore West Bengal</span>
          <h2 className="section-title">Top Destinations</h2>
          <p className="section-subtitle mt-3">
            From the misty hills of Darjeeling to the cultural heart of Santiniketan — discover West Bengal with a dedicated car and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(dest => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl h-64 card card-hover">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
                  <p className="text-white/70 text-base mt-1">{dest.tagline}</p>
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "#0F6E56", color: "#fff" }}
                >
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
