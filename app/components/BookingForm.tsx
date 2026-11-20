"use client";
import { useState } from "react";

const TABS = ["General Inquiry", "Car Rental", "Car + Hotel", "Ultimate Package"] as const;
type Tab = typeof TABS[number];

const inputCls = "w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200 text-white placeholder:text-white/45";
const inputStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "#ffffff",
  colorScheme: "dark",
};
const labelCls = "block text-sm font-semibold mb-1.5 text-white/90";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {children}
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const isPhone = props.type === "tel" || props.name === "whatsapp";
  const isNumber = props.type === "number";

  return (
    <input
      {...props}
      inputMode={isPhone || isNumber ? "numeric" : props.inputMode}
      pattern={isPhone ? "[0-9]{10}" : props.pattern}
      maxLength={isPhone ? (props.maxLength ?? 10) : props.maxLength}
      className={inputCls}
      style={inputStyle}
      onKeyDown={e => {
        // For phone number fields, only allow numbers, backspace, delete, tab, arrows
        if (isPhone) {
          const allowedKeys = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter"];
          if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key) && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
          }
        }
        if (props.onKeyDown) props.onKeyDown(e);
      }}
      onInput={e => {
        if (isPhone) {
          // Strictly strip all non-numeric characters and limit to 10 digits
          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
        } else if (isNumber) {
          // Strictly strip non-digits
          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
        }
        if (props.onInput) props.onInput(e);
      }}
      onFocus={e => {
        e.currentTarget.style.borderColor = "rgba(242, 140, 40, 0.85)";
        e.currentTarget.style.boxShadow = "0 0 16px rgba(242, 140, 40, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
      }}
      onBlur={e => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
      }}
    />
  );
}

function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={inputCls}
      style={{ ...inputStyle, cursor: "pointer" }}
      onFocus={e => {
        e.currentTarget.style.borderColor = "rgba(242, 140, 40, 0.85)";
        e.currentTarget.style.boxShadow = "0 0 16px rgba(242, 140, 40, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
      }}
      onBlur={e => {
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
      }}
    >
      {children}
    </select>
  );
}

function SubmitBtn({ label, loading }: { label: string; loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 disabled:opacity-60 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
      style={{
        background: "linear-gradient(135deg, rgba(242, 140, 40, 0.95) 0%, rgba(217, 123, 30, 0.85) 50%, rgba(27, 58, 107, 0.95) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        boxShadow: "0 8px 30px rgba(242, 140, 40, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(8px)",
      }}
    >
      {loading ? "Sending..." : label}
    </button>
  );
}

function SuccessMsg({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-10">
      <div className="text-5xl mb-4">🎉</div>
      <h3 className="text-xl font-bold mb-2 text-white">Request Sent!</h3>
      <p className="text-sm mb-2" style={{ color: "rgba(255, 255, 255, 0.8)" }}>Our team will contact you on WhatsApp within 2 hours.</p>
      <p className="text-xs mb-6" style={{ color: "rgba(255, 255, 255, 0.55)" }}>Check your email for a confirmation with your submission details.</p>
      <button
        onClick={onReset}
        className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
        style={{
          background: "linear-gradient(135deg, rgba(242, 140, 40, 0.8) 0%, rgba(27, 58, 107, 0.9) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 15px rgba(242, 140, 40, 0.3)"
        }}
      >
        Submit Another
      </button>
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

/* ── Form 1: General Inquiry ── */
function GeneralForm() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  if (done) return <SuccessMsg onReset={() => setDone(false)} />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const f = new FormData(e.currentTarget);
    await submitForm({
      formType: "general-inquiry",
      name: f.get("name") as string,
      whatsapp: f.get("whatsapp") as string,
      email: f.get("email") as string,
      lookingFor: f.get("lookingFor") as string,
      destination: f.get("destination") as string,
      travelDate: f.get("travelDate") as string,
      message: f.get("message") as string,
    });
    setLoading(false);
    setDone(true);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <Field label="Full Name *"><Input required name="name" placeholder="Your full name" /></Field>
      <Field label="WhatsApp Number *"><Input required type="tel" name="whatsapp" placeholder="10-digit number (e.g. 9876543210)" /></Field>
      <Field label="Email ID *"><Input required type="email" name="email" placeholder="you@example.com" /></Field>
      <Field label="I am looking for *">
        <Select required name="lookingFor" defaultValue="">
          <option value="" disabled className="bg-[#0F1B2D] text-white">Select service</option>
          <option className="bg-[#0F1B2D] text-white">Car Rental Only</option>
          <option className="bg-[#0F1B2D] text-white">Car + Hotel Package</option>
          <option className="bg-[#0F1B2D] text-white">Ultimate Holiday</option>
          <option className="bg-[#0F1B2D] text-white">Just Need Information</option>
        </Select>
      </Field>
      <Field label="Destination / Place to Visit *"><Input required name="destination" placeholder="e.g. Darjeeling, Digha..." /></Field>
      <Field label="Approximate Travel Date *"><Input required type="date" name="travelDate" /></Field>
      <div className="sm:col-span-2">
        <Field label="Special Message / Requirement">
          <textarea
            name="message"
            rows={3}
            placeholder="Any special requirements (optional)"
            className={inputCls + " resize-none"}
            style={inputStyle}
            onFocus={e => {
              e.currentTarget.style.borderColor = "rgba(242, 140, 40, 0.85)";
              e.currentTarget.style.boxShadow = "0 0 16px rgba(242, 140, 40, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
            }}
            onBlur={e => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
            }}
          />
        </Field>
      </div>
      <div className="sm:col-span-2 pt-2"><SubmitBtn label="Send Inquiry / Request Call Back" loading={loading} /></div>
    </form>
  );
}

/* ── Form 2: Car Rental ── */
function CarRentalForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>👤</span> Personal Details
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Name *"><Input required name="name" placeholder="Full name" /></Field>
        <Field label="WhatsApp No *"><Input required type="tel" name="whatsapp" placeholder="10-digit number (e.g. 9876543210)" /></Field>
        <Field label="Email *"><Input required type="email" name="email" placeholder="you@example.com" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-2 flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>🗺️</span> Trip Details
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-3">
          <Field label="Trip Type *">
            <div className="flex flex-wrap gap-4 mt-1.5">
              {["One-Way", "Round Trip (Up & Down)", "Kolkata Local Package"].map(v => (
                <label key={v} className="flex items-center gap-2 text-sm cursor-pointer text-white/90 hover:text-white transition-colors">
                  <input type="radio" name="tripType" value={v} required className="accent-[#F28C28] cursor-pointer" /> {v}
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
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select duration</option>
            <option className="bg-[#0F1B2D] text-white">8 Hrs (Local)</option>
            <option className="bg-[#0F1B2D] text-white">10 Hrs</option>
            <option className="bg-[#0F1B2D] text-white">12 Hrs</option>
            <option className="bg-[#0F1B2D] text-white">2 Days</option>
            <option className="bg-[#0F1B2D] text-white">3 Days</option>
            <option className="bg-[#0F1B2D] text-white">4 Days</option>
            <option className="bg-[#0F1B2D] text-white">5+ Days</option>
          </Select>
        </Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-2 flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>🚗</span> Vehicle & Passenger Details
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Preferred Car Type *">
          <Select required name="carType" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select car</option>
            <option className="bg-[#0F1B2D] text-white">Swift Dzire (4 Seater)</option>
            <option className="bg-[#0F1B2D] text-white">Ertiga (6 Seater)</option>
            <option className="bg-[#0F1B2D] text-white">Innova Crysta (7 Seater)</option>
            <option className="bg-[#0F1B2D] text-white">Tempo Traveller</option>
            <option className="bg-[#0F1B2D] text-white">Mini Bus</option>
          </Select>
        </Field>
        <Field label="No. of Adults *"><Input required type="number" name="adults" min="1" defaultValue="1" /></Field>
        <Field label="No. of Kids (Below 10 yrs)"><Input type="number" name="kids" min="0" defaultValue="0" /></Field>
      </div>
      <div className="pt-2"><SubmitBtn label="Get Car Rental Quote" loading={loading} /></div>
    </form>
  );
}

/* ── Form 3: Car + Hotel ── */
function CarHotelForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>👤</span> Personal Details
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Name *"><Input required name="name" placeholder="Full name" /></Field>
        <Field label="WhatsApp No *"><Input required type="tel" name="whatsapp" placeholder="10-digit number (e.g. 9876543210)" /></Field>
        <Field label="Email *"><Input required type="email" name="email" placeholder="you@example.com" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-2 flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>📍</span> Travel & Destination Details
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Package / Destination *"><Input required name="destination" placeholder="e.g. Darjeeling, Sundarbans" /></Field>
        <Field label="Check-in Date *"><Input required type="date" name="checkIn" /></Field>
        <Field label="Check-out Date *"><Input required type="date" name="checkOut" /></Field>
        <Field label="Total Duration of Stay *">
          <Select required name="duration" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select duration</option>
            <option className="bg-[#0F1B2D] text-white">1 Night 2 Days</option>
            <option className="bg-[#0F1B2D] text-white">2 Nights 3 Days</option>
            <option className="bg-[#0F1B2D] text-white">3 Nights 4 Days</option>
            <option className="bg-[#0F1B2D] text-white">4 Nights 5 Days</option>
            <option className="bg-[#0F1B2D] text-white">Custom</option>
          </Select>
        </Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-2 flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>🏨</span> Hotel & Passenger Requirements
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="No. of Adults *"><Input required type="number" name="adults" min="1" defaultValue="1" /></Field>
        <Field label="No. of Kids"><Input type="number" name="kids" min="0" defaultValue="0" /></Field>
        <Field label="Number of Rooms *">
          <Select required name="rooms" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select rooms</option>
            <option className="bg-[#0F1B2D] text-white">1</option>
            <option className="bg-[#0F1B2D] text-white">2</option>
            <option className="bg-[#0F1B2D] text-white">3</option>
            <option className="bg-[#0F1B2D] text-white">4+</option>
          </Select>
        </Field>
        <Field label="Room Type *">
          <Select required name="roomType" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select type</option>
            <option className="bg-[#0F1B2D] text-white">AC</option>
            <option className="bg-[#0F1B2D] text-white">Non-AC</option>
          </Select>
        </Field>
        <Field label="Hotel Category *">
          <Select required name="hotelCategory" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select category</option>
            <option className="bg-[#0F1B2D] text-white">2-Star (Budget)</option>
            <option className="bg-[#0F1B2D] text-white">3-Star (Standard)</option>
            <option className="bg-[#0F1B2D] text-white">4-Star (Premium)</option>
            <option className="bg-[#0F1B2D] text-white">5-Star (Luxury)</option>
            <option className="bg-[#0F1B2D] text-white">Authentic Homestay</option>
          </Select>
        </Field>
        <Field label="Car Preference *">
          <Select required name="carPreference" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select car</option>
            <option className="bg-[#0F1B2D] text-white">Sedan (Dzire)</option>
            <option className="bg-[#0F1B2D] text-white">SUV (Ertiga / Innova)</option>
            <option className="bg-[#0F1B2D] text-white">Large Group Vehicle</option>
          </Select>
        </Field>
      </div>
      <div className="pt-2"><SubmitBtn label="Get Package Price" loading={loading} /></div>
    </form>
  );
}

/* ── Form 4: Ultimate Package ── */
function UltimateForm() {
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-xs font-bold uppercase tracking-widest flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>👑</span> Primary Details
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Name *"><Input required name="name" placeholder="Full name" /></Field>
        <Field label="WhatsApp No *"><Input required type="tel" name="whatsapp" placeholder="10-digit number (e.g. 9876543210)" /></Field>
        <Field label="Email *"><Input required type="email" name="email" placeholder="you@example.com" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-2 flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>✈️</span> The Journey Details
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Field label="Dream Destination *"><Input required name="destination" placeholder="Where do you want to go?" /></Field>
        <Field label="Travel From *"><Input required type="date" name="travelFrom" /></Field>
        <Field label="Travel To *"><Input required type="date" name="travelTo" /></Field>
        <Field label="No. of Adults *"><Input required type="number" name="adults" min="1" defaultValue="1" /></Field>
        <Field label="No. of Kids"><Input type="number" name="kids" min="0" defaultValue="0" /></Field>
        <Field label="Senior Citizens (60+)"><Input type="number" name="seniorCitizens" min="0" defaultValue="0" /></Field>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest pt-2 flex items-center gap-2" style={{ color: "#F28C28" }}>
        <span>✨</span> Experience Preferences
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Arrival Mode *">
          <Select required name="arrivalMode" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select arrival mode</option>
            <option className="bg-[#0F1B2D] text-white">Flight</option>
            <option className="bg-[#0F1B2D] text-white">Train</option>
            <option className="bg-[#0F1B2D] text-white">Need Home Pickup</option>
          </Select>
        </Field>
        <Field label="Hotel Preference *">
          <Select required name="hotelPreference" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select hotel type</option>
            <option className="bg-[#0F1B2D] text-white">2-Star (Budget)</option>
            <option className="bg-[#0F1B2D] text-white">3-Star (Standard)</option>
            <option className="bg-[#0F1B2D] text-white">4-Star Premium</option>
            <option className="bg-[#0F1B2D] text-white">5-Star Luxury</option>
            <option className="bg-[#0F1B2D] text-white">Heritage Property (e.g. Rajbari)</option>
          </Select>
        </Field>
        <Field label="Meal Plan *">
          <Select required name="mealPlan" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select meal plan</option>
            <option className="bg-[#0F1B2D] text-white">Breakfast Only</option>
            <option className="bg-[#0F1B2D] text-white">Breakfast + Dinner</option>
            <option className="bg-[#0F1B2D] text-white">All Meals Included</option>
          </Select>
        </Field>
        <Field label="Food Preference *">
          <Select required name="foodPreference" defaultValue="">
            <option value="" disabled className="bg-[#0F1B2D] text-white">Select preference</option>
            <option className="bg-[#0F1B2D] text-white">Veg</option>
            <option className="bg-[#0F1B2D] text-white">Non-Veg</option>
            <option className="bg-[#0F1B2D] text-white">Jain Food</option>
          </Select>
        </Field>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: "#F28C28" }}>
          <span>🎁</span> Special Add-ons
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Professional Tour Guide Required",
            "Special Decoration (Birthday / Anniversary / Honeymoon)",
            "Wheelchair Assistance Required",
            "Adventure Activities / Safari Booking",
          ].map(v => (
            <label
              key={v}
              className="flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 text-sm text-white/90 hover:text-white"
              style={{
                borderColor: addons.includes(v) ? "rgba(242, 140, 40, 0.85)" : "rgba(255, 255, 255, 0.18)",
                background: addons.includes(v) ? "rgba(242, 140, 40, 0.22)" : "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                boxShadow: addons.includes(v) ? "0 4px 18px rgba(242, 140, 40, 0.25)" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={addons.includes(v)}
                onChange={() => toggle(v)}
                className="accent-[#F28C28] w-4 h-4 flex-shrink-0 cursor-pointer"
              />
              {v}
            </label>
          ))}
        </div>
      </div>
      <div className="pt-2"><SubmitBtn label="✨ Design My Ultimate Trip" loading={loading} /></div>
    </form>
  );
}

/* ── Main Component ── */
export default function BookingForm() {
  const [active, setActive] = useState<Tab>("General Inquiry");

  return (
    <section id="booking" className="relative py-16 sm:py-24 px-4 overflow-hidden">
      {/* Matching Background Image with Parallax */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark Navy / Slate Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(15,27,45,0.92) 0%, rgba(27,58,107,0.80) 45%, rgba(15,27,45,0.95) 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto" style={{ zIndex: 10 }}>
        <div className="text-center mb-10">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-md"
            style={{
              background: "rgba(242,140,40,0.18)",
              color: "#F28C28",
              border: "1px solid rgba(242,140,40,0.45)",
              backdropFilter: "blur(10px)",
            }}
          >
            Book Your Trip
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-3 text-white" style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}>
            Plan Your <span style={{ color: "#F28C28" }}>Perfect Journey</span>
          </h2>
          <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.78)" }}>
            Choose your service and fill in the details — we&apos;ll handle the rest.
          </p>
        </div>

        {/* Glassmorphic Tab Bar */}
        <div
          className="flex overflow-x-auto rounded-2xl p-1.5 mb-8 gap-1.5 shadow-2xl"
          style={{
            background: "rgba(15, 27, 45, 0.55)",
            border: "1px solid rgba(255, 255, 255, 0.16)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 10px 35px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.15)",
          }}
        >
          {TABS.map(tab => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className="flex-1 min-w-max px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, rgba(242, 140, 40, 0.45) 0%, rgba(217, 123, 30, 0.25) 100%)"
                    : "transparent",
                  color: isActive ? "#ffffff" : "rgba(255, 255, 255, 0.72)",
                  border: isActive
                    ? "1px solid rgba(242, 140, 40, 0.8)"
                    : "1px solid transparent",
                  backdropFilter: isActive ? "blur(12px)" : "none",
                  WebkitBackdropFilter: isActive ? "blur(12px)" : "none",
                  boxShadow: isActive
                    ? "0 4px 20px rgba(242, 140, 40, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.5)"
                    : "none",
                  textShadow: isActive ? "0 1px 8px rgba(242, 140, 40, 0.6)" : "none",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Glassic Form Card */}
        <div
          className="rounded-3xl border p-5 sm:p-9 transition-all duration-300"
          style={{
            background: "rgba(15, 27, 45, 0.72)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            borderColor: "rgba(255, 255, 255, 0.18)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.55), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
          }}
        >
          {active === "General Inquiry" && <GeneralForm />}
          {active === "Car Rental" && <CarRentalForm />}
          {active === "Car + Hotel" && <CarHotelForm />}
          {active === "Ultimate Package" && <UltimateForm />}
        </div>
      </div>
    </section>
  );
}
