"use client";
import { useState } from "react";

const inputCls = "w-full rounded-xl px-4 py-2.5 text-sm outline-none border transition-colors bg-white";
const inputStyle = { border: "1px solid #D3D1C7", color: "#1F2A28" };
const labelCls = "block text-sm font-semibold mb-1.5";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelCls} style={{ color: "#1F2A28" }}>{label}</label>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={inputCls} style={inputStyle}
      onFocus={e => (e.currentTarget.style.borderColor = "#0F6E56")}
      onBlur={e => (e.currentTarget.style.borderColor = "#D3D1C7")} />
  );
}

function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={inputCls} style={inputStyle}
      onFocus={e => (e.currentTarget.style.borderColor = "#0F6E56")}
      onBlur={e => (e.currentTarget.style.borderColor = "#D3D1C7")}>
      {children}
    </select>
  );
}

function SubmitBtn({ label, loading }: { label: string; loading: boolean }) {
  return (
    <button type="submit" disabled={loading}
      className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-all disabled:opacity-60"
      style={{ background: "linear-gradient(135deg, #0F6E56, #1D9E75)" }}>
      {loading ? "Sending..." : label}
    </button>
  );
}

function SuccessMsg({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-10">
      <div className="text-5xl mb-4">🎉</div>
      <h3 className="text-xl font-bold mb-2" style={{ color: "#0F6E56" }}>Request Sent!</h3>
      <p className="text-sm mb-2" style={{ color: "#5F5E5A" }}>Our team will contact you on WhatsApp within 2 hours.</p>
      <p className="text-xs mb-6" style={{ color: "#9CA3AF" }}>Check your email for a confirmation with your submission details.</p>
      <button onClick={onReset} className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold"
        style={{ background: "#0F6E56" }}>Submit Another</button>
    </div>
  );
}

async function submitForm(data: Record<string, string | string[]>) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.ok;
}

/* ── Car Rental Form ── */
export function CarRentalForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  if (done) return <SuccessMsg onReset={() => setDone(false)} />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const f = new FormData(e.currentTarget);
    await submitForm({
      formType: "car-rental",
      name: f.get("name") as string,
      whatsapp: f.get("whatsapp") as string,
      email: f.get("email") as string,
      tripType: f.get("tripType") as string,
      pickupLocation: f.get("pickupLocation") as string,
      dropLocation: f.get("dropLocation") as string,
      destination: f.get("destination") as string,
      pickupDate: f.get("pickupDate") as string,
      pickupTime: f.get("pickupTime") as string,
      duration: f.get("duration") as string,
      carType: f.get("carType") as string,
      adults: f.get("adults") as string,
      kids: f.get("kids") as string,
    });
    setLoading(false);
    setDone(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F6E56" }}>Personal Details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Name *"><Input required name="name" placeholder="Full name" /></Field>
        <Field label="WhatsApp No *"><Input required type="tel" name="whatsapp" placeholder="+91 XXXXX XXXXX" /></Field>
        <Field label="Email *"><Input required type="email" name="email" placeholder="you@example.com" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-1" style={{ color: "#0F6E56" }}>Trip Details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3">
          <Field label="Trip Type *">
            <div className="flex flex-wrap gap-4 mt-1">
              {["One-Way", "Round Trip (Up & Down)", "Kolkata Local Package"].map(v => (
                <label key={v} className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#1F2A28" }}>
                  <input type="radio" name="tripType" value={v} required className="accent-[#0F6E56]" /> {v}
                </label>
              ))}
            </div>
          </Field>
        </div>
        <Field label="Pickup Location *"><Input required name="pickupLocation" placeholder="Pickup address" /></Field>
        <Field label="Drop Location *"><Input required name="dropLocation" placeholder="Drop address" /></Field>
        <Field label="Package / Destination *"><Input required name="destination" placeholder="e.g. Darjeeling, Digha" /></Field>
        <Field label="Pickup Date *"><Input required type="date" name="pickupDate" /></Field>
        <Field label="Pickup Time *"><Input required type="time" name="pickupTime" /></Field>
        <Field label="Duration *">
          <Select required name="duration" defaultValue="">
            <option value="" disabled>Select duration</option>
            <option>8 Hrs (Local)</option>
            <option>10 Hrs</option>
            <option>12 Hrs</option>
            <option>2 Days</option>
            <option>3 Days</option>
            <option>4 Days</option>
            <option>5+ Days</option>
          </Select>
        </Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-1" style={{ color: "#0F6E56" }}>Vehicle & Passenger Details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Preferred Car Type *">
          <Select required name="carType" defaultValue="">
            <option value="" disabled>Select car</option>
            <option>Swift Dzire (4 Seater)</option>
            <option>Ertiga (6 Seater)</option>
            <option>Innova Crysta (7 Seater)</option>
            <option>Tempo Traveller</option>
            <option>Mini Bus</option>
          </Select>
        </Field>
        <Field label="No. of Adults *"><Input required type="number" name="adults" min="1" defaultValue="1" /></Field>
        <Field label="No. of Kids (Below 10 yrs)"><Input type="number" name="kids" min="0" defaultValue="0" /></Field>
      </div>
      <SubmitBtn label="🚗 Get Car Rental Quote" loading={loading} />
    </form>
  );
}

/* ── Car + Hotel Form ── */
export function CarHotelForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  if (done) return <SuccessMsg onReset={() => setDone(false)} />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const f = new FormData(e.currentTarget);
    await submitForm({
      formType: "car-hotel",
      name: f.get("name") as string,
      whatsapp: f.get("whatsapp") as string,
      email: f.get("email") as string,
      destination: f.get("destination") as string,
      checkIn: f.get("checkIn") as string,
      checkOut: f.get("checkOut") as string,
      duration: f.get("duration") as string,
      adults: f.get("adults") as string,
      kids: f.get("kids") as string,
      rooms: f.get("rooms") as string,
      roomType: f.get("roomType") as string,
      hotelCategory: f.get("hotelCategory") as string,
      carPreference: f.get("carPreference") as string,
    });
    setLoading(false);
    setDone(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F6E56" }}>Personal Details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Name *"><Input required name="name" placeholder="Full name" /></Field>
        <Field label="WhatsApp No *"><Input required type="tel" name="whatsapp" placeholder="+91 XXXXX XXXXX" /></Field>
        <Field label="Email *"><Input required type="email" name="email" placeholder="you@example.com" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-1" style={{ color: "#0F6E56" }}>Travel & Destination Details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Package / Destination *"><Input required name="destination" placeholder="e.g. Darjeeling, Sundarbans" /></Field>
        <Field label="Check-in Date *"><Input required type="date" name="checkIn" /></Field>
        <Field label="Check-out Date *"><Input required type="date" name="checkOut" /></Field>
        <Field label="Total Duration of Stay *">
          <Select required name="duration" defaultValue="">
            <option value="" disabled>Select duration</option>
            <option>1 Night 2 Days</option>
            <option>2 Nights 3 Days</option>
            <option>3 Nights 4 Days</option>
            <option>4 Nights 5 Days</option>
            <option>Custom</option>
          </Select>
        </Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-1" style={{ color: "#0F6E56" }}>Hotel & Passenger Requirements</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="No. of Adults *"><Input required type="number" name="adults" min="1" defaultValue="1" /></Field>
        <Field label="No. of Kids"><Input type="number" name="kids" min="0" defaultValue="0" /></Field>
        <Field label="Number of Rooms *">
          <Select required name="rooms" defaultValue="">
            <option value="" disabled>Select rooms</option>
            <option>1</option><option>2</option><option>3</option><option>4+</option>
          </Select>
        </Field>
        <Field label="Room Type *">
          <Select required name="roomType" defaultValue="">
            <option value="" disabled>Select type</option>
            <option>AC</option>
            <option>Non-AC</option>
          </Select>
        </Field>
        <Field label="Hotel Category *">
          <Select required name="hotelCategory" defaultValue="">
            <option value="" disabled>Select category</option>
            <option>2-Star (Budget)</option>
            <option>3-Star (Standard)</option>
            <option>4-Star (Premium)</option>
            <option>5-Star (Luxury)</option>
            <option>Authentic Homestay</option>
          </Select>
        </Field>
        <Field label="Car Preference *">
          <Select required name="carPreference" defaultValue="">
            <option value="" disabled>Select car</option>
            <option>Sedan (Dzire)</option>
            <option>SUV (Ertiga / Innova)</option>
            <option>Large Group Vehicle</option>
          </Select>
        </Field>
      </div>
      <SubmitBtn label="🏨 Get Package Price" loading={loading} />
    </form>
  );
}

/* ── Ultimate Package Form ── */
export function UltimateForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addons, setAddons] = useState<string[]>([]);
  const toggle = (v: string) =>
    setAddons(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  if (done) return <SuccessMsg onReset={() => { setDone(false); setAddons([]); }} />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const f = new FormData(e.currentTarget);
    await submitForm({
      formType: "ultimate-package",
      name: f.get("name") as string,
      whatsapp: f.get("whatsapp") as string,
      email: f.get("email") as string,
      destination: f.get("destination") as string,
      travelFrom: f.get("travelFrom") as string,
      travelTo: f.get("travelTo") as string,
      adults: f.get("adults") as string,
      kids: f.get("kids") as string,
      seniorCitizens: f.get("seniorCitizens") as string,
      arrivalMode: f.get("arrivalMode") as string,
      hotelPreference: f.get("hotelPreference") as string,
      mealPlan: f.get("mealPlan") as string,
      foodPreference: f.get("foodPreference") as string,
      specialAddons: addons,
    });
    setLoading(false);
    setDone(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0F6E56" }}>Primary Details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Name *"><Input required name="name" placeholder="Full name" /></Field>
        <Field label="WhatsApp No *"><Input required type="tel" name="whatsapp" placeholder="+91 XXXXX XXXXX" /></Field>
        <Field label="Email *"><Input required type="email" name="email" placeholder="you@example.com" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-1" style={{ color: "#0F6E56" }}>The Journey Details</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Dream Destination *"><Input required name="destination" placeholder="Where do you want to go?" /></Field>
        <Field label="Travel From *"><Input required type="date" name="travelFrom" /></Field>
        <Field label="Travel To *"><Input required type="date" name="travelTo" /></Field>
        <Field label="No. of Adults *"><Input required type="number" name="adults" min="1" defaultValue="1" /></Field>
        <Field label="No. of Kids"><Input type="number" name="kids" min="0" defaultValue="0" /></Field>
        <Field label="Senior Citizens (60+)"><Input type="number" name="seniorCitizens" min="0" defaultValue="0" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-1" style={{ color: "#0F6E56" }}>Experience Preferences</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Arrival Mode *">
          <Select required name="arrivalMode" defaultValue="">
            <option value="" disabled>Select arrival mode</option>
            <option>Flight</option>
            <option>Train</option>
            <option>Need Home Pickup</option>
          </Select>
        </Field>
        <Field label="Hotel Preference *">
          <Select required name="hotelPreference" defaultValue="">
            <option value="" disabled>Select hotel type</option>
            <option>2-Star (Budget)</option>
            <option>3-Star (Standard)</option>
            <option>4-Star Premium</option>
            <option>5-Star Luxury</option>
            <option>Heritage Property (e.g. Rajbari)</option>
          </Select>
        </Field>
        <Field label="Meal Plan *">
          <Select required name="mealPlan" defaultValue="">
            <option value="" disabled>Select meal plan</option>
            <option>Breakfast Only</option>
            <option>Breakfast + Dinner</option>
            <option>All Meals Included</option>
          </Select>
        </Field>
        <Field label="Food Preference *">
          <Select required name="foodPreference" defaultValue="">
            <option value="" disabled>Select preference</option>
            <option>Veg</option>
            <option>Non-Veg</option>
            <option>Jain Food</option>
          </Select>
        </Field>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0F6E56" }}>Special Add-ons</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Professional Tour Guide Required",
            "Special Decoration (Birthday / Anniversary / Honeymoon)",
            "Wheelchair Assistance Required",
            "Adventure Activities / Safari Booking",
          ].map(v => (
            <label key={v} className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all text-sm"
              style={{
                borderColor: addons.includes(v) ? "#0F6E56" : "#D3D1C7",
                background: addons.includes(v) ? "#E1F5EE" : "#fff",
                color: "#1F2A28",
              }}>
              <input type="checkbox" checked={addons.includes(v)} onChange={() => toggle(v)}
                className="accent-[#0F6E56] w-4 h-4 flex-shrink-0" />
              {v}
            </label>
          ))}
        </div>
      </div>
      <SubmitBtn label="✨ Design My Ultimate Trip" loading={loading} />
    </form>
  );
}
