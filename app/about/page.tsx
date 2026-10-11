import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { n: "500+", l: "Happy Travellers" },
  { n: "50+", l: "Destinations" },
  { n: "5★", l: "Avg. Rating" },
  { n: "8+", l: "Years Experience" },
];

const values = [
  { icon: "🗺️", title: "Expert Planning", desc: "Curated itineraries by local travel experts who know every hidden gem in West Bengal and beyond." },
  { icon: "🚗", title: "Premium Fleet", desc: "Sedans, SUVs & luxury vehicles — all well-maintained, verified, and driven by experienced chauffeurs." },
  { icon: "🏨", title: "Top Hotels", desc: "2★ to 5★ partner properties — safe, clean, and quality-checked for every budget." },
  { icon: "🤝", title: "24/7 Support", desc: "A real person answers your call — any time, any day of the trip. No bots, no waiting." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. What you see is what you pay — always." },
  { icon: "🌿", title: "Responsible Travel", desc: "We support local communities, eco-friendly stays, and sustainable tourism practices." },
];

const team = [
  { name: "Rahul Sharma", role: "Founder & CEO", emoji: "👨‍💼" },
  { name: "Priya Das", role: "Head of Operations", emoji: "👩‍💼" },
  { name: "Amit Roy", role: "Lead Travel Planner", emoji: "🧭" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="pt-24 pb-16 px-6 text-center" style={{ background: "linear-gradient(135deg, #E1F5EE 0%, #FAF9F5 100%)" }}>
        <span className="badge badge-blue mb-4">Our Story</span>
        <h1 className="section-title mb-4">
          Born in Kolkata,<br />
          <span style={{ color: "#0F6E56" }}>Built for Travellers</span>
        </h1>
        <p className="section-subtitle mx-auto">
          We started with a simple belief — travel should be effortless, memorable, and stress-free.
        </p>
      </div>

      {/* Story */}
      <section className="section-pad" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-6 text-base leading-relaxed" style={{ color: "#5F5E5A" }}>
            <p>
              MakeMyWay was founded with a single mission — to make exploring West Bengal and India as seamless and joyful as possible. Based in the heart of Kolkata, we've helped hundreds of families, couples, and solo travellers discover the magic of this incredible region without the stress of logistics.
            </p>
            <p>
              It all started when our founder, a passionate traveller himself, realized how difficult it was to find a reliable, honest, and affordable travel partner in Kolkata. Most agencies either overcharged, provided poor vehicles, or simply disappeared after taking the booking. He decided to build something different.
            </p>
            <p>
              Today, MakeMyWay is a trusted name for car rentals, car + hotel packages, and complete tour packages across West Bengal. From the misty hills of Darjeeling to the mangrove forests of Sundarbans, from the terracotta temples of Bishnupur to the cultural heart of Santiniketan — we plan it all, so you can focus entirely on the experience.
            </p>
            <p>
              We believe every journey tells a story. And we're here to make yours unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad-sm" style={{ background: "#E1F5EE" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(s => (
              <div key={s.l} className="text-center p-6 rounded-2xl" style={{ background: "#fff", border: "1px solid #9FE1CB" }}>
                <div className="text-3xl font-black mb-1" style={{ color: "#0F6E56" }}>{s.n}</div>
                <div className="text-sm font-medium" style={{ color: "#5F5E5A" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "#FAF9F5" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="badge badge-blue mb-3">What We Stand For</span>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(v => (
              <div key={v.title} className="card p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <div className="font-semibold text-sm mb-2" style={{ color: "#085041" }}>{v.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "#5F5E5A" }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="badge badge-blue mb-3">The People Behind</span>
            <h2 className="section-title">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map(t => (
              <div key={t.name} className="card text-center p-8">
                <div className="text-5xl mb-4">{t.emoji}</div>
                <div className="font-semibold text-base mb-1" style={{ color: "#1F2A28" }}>{t.name}</div>
                <div className="text-sm" style={{ color: "#0F6E56" }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad text-center" style={{ background: "linear-gradient(135deg, #0F6E56, #1D9E75)" }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-white mb-3">Ready to Travel with Us?</h2>
          <p className="text-white/80 text-sm mb-6">Let us plan your perfect West Bengal getaway — car, hotel, and everything in between.</p>
          <a href="/#booking" className="inline-block bg-white font-semibold text-sm rounded-full px-8 py-3 transition-all hover:shadow-lg"
            style={{ color: "#0F6E56" }}>
            Plan My Trip →
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
