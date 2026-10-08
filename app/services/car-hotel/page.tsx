import ServicePageLayout, { ServicePageConfig } from "../../components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car + Hotel Package – TravelKolkata",
  description: "Seamless combo of full-day sightseeing cars and hotel stays (2★–5★) with complimentary breakfast. Bundle pricing saves money.",
};

const config: ServicePageConfig = {
  badge: "Most Popular",
  badgeClass: "badge-emerald",
  icon: "🏨",
  title: "Car + Hotel Package",
  tagline: "The perfect travel combo — a comfortable hotel stay paired with a dedicated sightseeing car every single day. Breakfast included, car ready outside every morning.",
  heroGradient: "linear-gradient(160deg, #ecfdf5 0%, #d1fae5 50%, #f0fdf4 100%)",
  videoBg: "/videos/hotel video.mp4",
  accentColor: "accent-emerald",
  ctaLabel: "Book Stay & Ride",
  ctaService: "car-hotel",
  ctaClass: "btn-emerald",
  whatWeOffer: {
    heading: "What's Included in Car + Hotel",
    points: [
      {
        icon: "🏨",
        title: "Hotel Stays (2★ to 5★)",
        desc: "Choose from our curated partner hotels ranging from comfortable 2-star properties to premium 5-star resorts. All verified and quality-checked.",
      },
      {
        icon: "🛏️",
        title: "Standard, Deluxe & Luxury Rooms",
        desc: "Pick the room type that fits your budget and comfort level — Standard, Deluxe, or Luxury. All options include clean, safe, and comfortable accommodations.",
      },
      {
        icon: "🍳",
        title: "Complimentary Breakfast",
        desc: "Start every morning right. Breakfast is included with every hotel stay in this package — no extra charges.",
      },
      {
        icon: "🚗",
        title: "Dedicated Sightseeing Car",
        desc: "A full-day dedicated car is included for every day of your stay. The car is ready outside your hotel each morning.",
      },
      {
        icon: "🗺️",
        title: "Suggested Itinerary",
        desc: "We provide a day-by-day sightseeing plan based on your destination, so you never waste time figuring out what to visit next.",
      },
      {
        icon: "💰",
        title: "Bundle Pricing Savings",
        desc: "Booking hotel + car together through us is significantly cheaper than booking them separately. You save on both.",
      },
    ],
  },
  benefits: [
    {
      icon: "😌",
      title: "No Hotel Hunting Stress",
      desc: "Finding a safe, clean, and well-located hotel in an unfamiliar city is stressful. We handle it for you — vetted properties, guaranteed quality, no surprises at check-in.",
    },
    {
      icon: "🚗",
      title: "Car Ready Every Morning",
      desc: "No waiting for cabs, no surge pricing at 8 AM. Your dedicated driver is parked outside your hotel every morning, ready to take you wherever you want to go.",
    },
    {
      icon: "💸",
      title: "Significant Cost Savings",
      desc: "Our bundle pricing means you pay less than if you booked the hotel and car separately. The more days you book, the more you save.",
    },
    {
      icon: "🍽️",
      title: "Breakfast Included Every Day",
      desc: "Start your sightseeing day on a full stomach. Complimentary breakfast is included at every hotel in this package — a saving of ₹300–₹800 per person per day.",
    },
  ],
  howItWorks: [
    {
      step: "1",
      title: "Tell Us Your Preferences",
      desc: "Fill in the booking form with your travel dates, number of people, hotel star preference, and room type.",
    },
    {
      step: "2",
      title: "We Curate Your Package",
      desc: "Our team selects the best available hotel and car combination for your dates and sends you a detailed quote within 2 hours.",
    },
    {
      step: "3",
      title: "Confirm & Pay",
      desc: "Review the package details, confirm your booking, and pay a small advance to lock in your hotel and car.",
    },
    {
      step: "4",
      title: "Arrive & Enjoy",
      desc: "Check into your hotel, find your car waiting outside the next morning, and enjoy a stress-free trip with breakfast every day.",
    },
  ],
  faq: [
    {
      q: "Can I choose my specific hotel?",
      a: "Yes! You can request a specific hotel or area, and we'll do our best to accommodate. Alternatively, share your star rating and room type preference and we'll pick the best option.",
    },
    {
      q: "Is breakfast included for all guests?",
      a: "Yes, complimentary breakfast is included for all guests in the booking. Kids under 5 eat free at most partner hotels.",
    },
    {
      q: "What if I want to extend my stay?",
      a: "No problem. Contact us and we'll extend both the hotel booking and car arrangement for the additional days at the same bundled rate.",
    },
    {
      q: "Are the hotels safe for solo female travellers?",
      a: "Absolutely. All our partner hotels are thoroughly vetted for safety, cleanliness, and staff professionalism. We only work with properties we'd recommend to our own families.",
    },
  ],
};

export default function CarHotelPage() {
  return <ServicePageLayout config={config} />;
}
