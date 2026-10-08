import ServicePageLayout, { ServicePageConfig } from "../../components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Rental Only – TravelKolkata",
  description: "Full-day dedicated car service for Kolkata sightseeing. The car stays with you — no point-to-point drops, no surge pricing.",
};

const config: ServicePageConfig = {
  badge: "Most Flexible",
  badgeClass: "badge-blue",
  icon: "🚗",
  title: "Car Rental Only",
  tagline: "Explore Kolkata and beyond at your own pace. A premium, dedicated car stays with you for the entire day — no waiting, no surge pricing, no limits.",
  heroGradient: "linear-gradient(160deg, #eff6ff 0%, #dbeafe 50%, #f0f9ff 100%)",
  accentColor: "accent-blue",
  ctaLabel: "Book This Ride",
  ctaService: "car-only",
  ctaClass: "btn-primary",
  whatWeOffer: {
    heading: "What's Included in Car Rental",
    points: [
      {
        icon: "🚘",
        title: "Full-Day Dedicated Vehicle",
        desc: "Your car is exclusively yours for the entire day — from morning pickup to evening drop-off. No sharing, no interruptions.",
      },
      {
        icon: "👨‍✈️",
        title: "Professional Local Driver",
        desc: "Our experienced drivers know every corner of Kolkata and surrounding areas. They double as your local guide.",
      },
      {
        icon: "⛽",
        title: "All Fuel Included",
        desc: "No hidden fuel charges. The quoted price covers all fuel for the day, no matter how many stops you make.",
      },
      {
        icon: "🗺️",
        title: "Flexible Custom Itinerary",
        desc: "You decide where to go and when. Want to spend 3 hours at Victoria Memorial? No problem. Your schedule, your rules.",
      },
      {
        icon: "🚫",
        title: "Zero Surge Pricing",
        desc: "Unlike app-based cabs, our pricing is fixed and transparent. No surprises at the end of the day.",
      },
      {
        icon: "📞",
        title: "24/7 Support",
        desc: "Our team is reachable throughout your trip for any assistance, route changes, or emergencies.",
      },
    ],
  },
  benefits: [
    {
      icon: "🕐",
      title: "Complete Freedom & Flexibility",
      desc: "Unlike point-to-point cabs, your car waits for you at every stop. Spend as much or as little time as you want at each location — no pressure, no meter running.",
    },
    {
      icon: "💰",
      title: "Cost-Effective for Full-Day Tours",
      desc: "Booking multiple Ola/Uber rides for a full day of sightseeing costs 2–3x more. Our flat-rate full-day package is significantly cheaper and far more convenient.",
    },
    {
      icon: "🚫",
      title: "No Driver Cancellations",
      desc: "App-based drivers cancel rides constantly, especially during peak hours. With us, your driver is committed to you for the entire day — guaranteed.",
    },
    {
      icon: "🧭",
      title: "Local Expert Guidance",
      desc: "Our drivers know the best local restaurants, hidden gems, and shortcuts. They'll suggest must-visit spots you won't find on any tourist map.",
    },
  ],
  howItWorks: [
    {
      step: "1",
      title: "Submit Your Booking Request",
      desc: "Fill in the booking form with your travel dates, number of people, and car preference. Takes less than 2 minutes.",
    },
    {
      step: "2",
      title: "Get a Confirmed Quote",
      desc: "Our team will call you within 2 hours with a fixed, transparent price. No hidden charges, no surprises.",
    },
    {
      step: "3",
      title: "Driver Arrives at Your Location",
      desc: "On the day of travel, your dedicated driver arrives at your doorstep or hotel at the agreed time.",
    },
    {
      step: "4",
      title: "Explore at Your Own Pace",
      desc: "Your car stays with you all day. Visit as many places as you want. The driver handles navigation and parking.",
    },
  ],
  faq: [
    {
      q: "Can I change my itinerary on the day of travel?",
      a: "Absolutely! Your itinerary is completely flexible. You can add or remove stops anytime during the day.",
    },
    {
      q: "What types of cars are available?",
      a: "We offer Sedans (Swift Dzire, Honda Amaze), SUVs (Innova, Ertiga), and Luxury vehicles (Toyota Fortuner, Mercedes) based on your preference.",
    },
    {
      q: "Is there a limit on how many stops I can make?",
      a: "No limit at all. The car is yours for the full day. Make as many stops as you like within the agreed coverage area.",
    },
    {
      q: "What if I need the car for more than one day?",
      a: "We offer multi-day car rental packages at discounted rates. Mention this in your booking request and we'll customize a plan for you.",
    },
  ],
};

export default function CarRentalPage() {
  return <ServicePageLayout config={config} />;
}
