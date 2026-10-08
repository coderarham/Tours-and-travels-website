"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

/* ── 3D Ticket Stamp ── */
function TicketStamp() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const stampRef = useRef<THREE.Mesh>(null!);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta;
    meshRef.current.rotation.y = Math.sin(t.current) * 0.3;
    stampRef.current.position.y = Math.max(-0.5, 1.5 - t.current * 3);
  });

  return (
    <>
      <ambientLight intensity={2} color="#ffffff" />
      <directionalLight position={[3, 5, 3]} color="#bfdbfe" intensity={2} />
      <pointLight position={[0, 3, 2]} color="#1d4ed8" intensity={3} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[3, 1.5, 0.06]} />
        <meshStandardMaterial color="#eff6ff" metalness={0.1} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.04]}>
        <boxGeometry args={[2.8, 1.3, 0.01]} />
        <meshStandardMaterial color="#1d4ed8" metalness={0.5} roughness={0.2} wireframe />
      </mesh>
      <mesh ref={stampRef} position={[0, 1.5, 0.1]}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 32]} />
        <meshStandardMaterial color="#059669" metalness={0.6} roughness={0.2} />
      </mesh>
    </>
  );
}

type FormData = {
  name: string; phone: string; email: string; destination: string;
  adults: string; kids: string; service: string; car: string;
  hotelStar: string; hotelRoom: string; dateFrom: string; dateTo: string; message: string;
};

const INIT: FormData = {
  name: "", phone: "", email: "", destination: "", adults: "1", kids: "0",
  service: "", car: "", hotelStar: "", hotelRoom: "", dateFrom: "", dateTo: "", message: "",
};

interface BookingFormProps {
  preselect?: string;
}

export default function BookingForm({ preselect }: BookingFormProps) {
  const [form, setForm] = useState<FormData>({ ...INIT, service: preselect ?? "" });
  const [today, setToday] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".form-card", { opacity: 0, y: 60 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".form-card", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Listen for service pre-selection from service cards (homepage)
  useEffect(() => {
    const select = document.getElementById("service-select") as HTMLSelectElement;
    if (!select) return;
    const handler = () => setForm((f) => ({ ...f, service: select.value }));
    select.addEventListener("change", handler);
    return () => select.removeEventListener("change", handler);
  }, []);

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    gsap.fromTo(".success-box", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" });
  };

  const showHotel = form.service === "car-hotel" || form.service === "full-package";

  return (
    <section id="booking" ref={sectionRef} className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-4">Start Your Journey</span>
          <h2 className="section-title mt-4 mb-4">
            Book Your <span className="accent-blue">Dream Trip</span>
          </h2>
          <p className="text-slate-500 text-lg">Fill in the details and we'll craft the perfect itinerary for you.</p>
        </div>

        {submitted ? (
          <div className="success-box card bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-100 p-12 text-center">
            <div className="h-48 mb-6">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <TicketStamp />
              </Canvas>
            </div>
            <h3 className="text-2xl font-bold accent-blue mb-3">Booking Request Sent! 🎉</h3>
            <p className="text-slate-500 mb-8">
              Thank you! Our team will contact you within 2 hours to confirm your trip details.
            </p>
            <button onClick={() => { setSubmitted(false); setForm(INIT); }} className="btn-primary">
              Plan Another Trip
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-card card bg-white p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                <input required className="input-field" placeholder="Your full name" value={form.name} onChange={set("name")} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Contact Number *</label>
                <input required type="tel" className="input-field" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={set("phone")} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                <input required type="email" className="input-field" placeholder="you@example.com" value={form.email} onChange={set("email")} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Destination *</label>
                <input required className="input-field" placeholder="Where do you want to explore?" value={form.destination} onChange={set("destination")} />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Adults *</label>
                <input required type="number" min="1" className="input-field" value={form.adults} onChange={set("adults")} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Kids</label>
                <input type="number" min="0" className="input-field" value={form.kids} onChange={set("kids")} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Choose Service *</label>
                <select id="service-select" required className="input-field" value={form.service} onChange={set("service")}>
                  <option value="">Select a package</option>
                  <option value="car-only">Car Rental Only</option>
                  <option value="car-hotel">Car + Hotel Package</option>
                  <option value="full-package">The Ultimate Package</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Car Preference</label>
                <select className="input-field" value={form.car} onChange={set("car")}>
                  <option value="">Select car type</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              {showHotel && (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Hotel Star Rating</label>
                  <select className="input-field" value={form.hotelStar} onChange={set("hotelStar")}>
                    <option value="">Select star rating</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                  </select>
                </div>
              )}
            </div>

            {showHotel && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Room Type</label>
                <select className="input-field" value={form.hotelRoom} onChange={set("hotelRoom")}>
                  <option value="">Select room type</option>
                  <option value="standard">Standard</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Travel From *</label>
                <input required type="date" className="input-field" value={form.dateFrom} onChange={set("dateFrom")} min={today} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Travel To *</label>
                <input required type="date" className="input-field" value={form.dateTo} onChange={set("dateTo")} min={form.dateFrom || today} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Special Requests / Message</label>
              <textarea rows={4} className="input-field resize-none" placeholder="Any special requirements, preferences, or questions..."
                value={form.message} onChange={set("message")} />
            </div>

            <button type="submit" className="btn-primary w-full text-center text-base py-4">
              🚀 Submit Booking Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
