"use client";
import Link from "next/link";
import { destinations } from "../data/destinations";

export default function DestinationsGrid() {
  return (
    <section
      className="relative section-pad overflow-hidden"
      style={{ minHeight: "auto" }}
    >
      {/* Full background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(15,27,45,0.85) 0%, rgba(27,58,107,0.72) 50%, rgba(15,27,45,0.92) 100%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto" style={{ zIndex: 10 }}>
        <div className="text-center mb-10">
          <span
            className="inline-block mb-3 text-xs font-bold tracking-widest uppercase rounded-full px-4 py-1.5"
            style={{
              background: "rgba(242,140,40,0.18)",
              color: "#F28C28",
              border: "1px solid rgba(242,140,40,0.4)",
              fontSize: "0.8rem",
              padding: "0.4rem 1.1rem",
            }}
          >
            Explore West Bengal
          </span>
          <h2
            className="section-title"
            style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            Top Destinations
          </h2>
          <p
            className="mt-3"
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.95rem",
              lineHeight: 1.7,
              maxWidth: 560,
              margin: "0.75rem auto 0",
            }}
          >
            From the misty hills of Darjeeling to the cultural heart of Santiniketan — discover West Bengal with a dedicated car and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(dest => (
            <Link key={dest.slug} href={`/destinations/${dest.slug}`} className="group block">
              <div
                className="relative overflow-hidden rounded-2xl h-64 transition-all duration-300"
                style={{
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-2xl font-bold" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>{dest.name}</h3>
                  <p className="text-white/70 text-base mt-1">{dest.tagline}</p>
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                  style={{ background: "#F28C28", color: "#fff" }}
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
