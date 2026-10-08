import ServicePageLayout, { ServicePageConfig } from "../../components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Ultimate Package – TravelKolkata",
  description: "Complete end-to-end luxury travel. Train/flight tickets + luxury hotels + dedicated cars + full itinerary planning. Zero stress, VIP treatment.",
};

const config: ServicePageConfig = {
  badge: "Zero Stress · VIP Treatment",
  badgeClass: "badge-blue",
  icon: "✈️",
  title: "The Ultimate Package",
  tagline: "From the moment you arrive until the moment you leave — every single detail is managed by our team. Tickets, hotels, cars, and a fully personalized itinerary. You just show up.",
  heroGradient: "linear-gradient(160deg, #eff6ff 0%, #e0e7ff 50%, #f5f3ff 100%)",
  accentColor: "accent-blue",
  ctaLabel: "Plan My Ultimate Trip",
  ctaService: "full-package",
  ctaClass: "btn-primary",
  whatWeOffer: {
    heading: "Everything Managed, End-to-End",
    points: [
      {
        icon: "🎫",
        title: "Train & Flight Tickets",
        desc: "We book your inbound and outbound train or flight tickets at the best available prices. No more fighting with IRCTC or airline websites.",
      },
      {
        icon: "🏨",
        title: "Luxury Hotel Stays",
        desc: "Premium accommodations from 3-star to 5-star properties, carefully selected for location, comfort, and service quality.",
      },
      {
        icon: "🚗",
        title: "Full-Day Dedicated Cars",
        desc: "A dedicated sightseeing car is available every day of your trip. Your driver knows the area and is ready from morning to evening.",
      },
      {
        icon: "📋",
        title: "Complete Itinerary Planning",
        desc: "We create a detailed day-by-day travel plan covering all major attractions, local experiences, meal recommendations, and travel timings.",
      },
      {
        icon: "👑",
        title: "VIP Personalization",
        desc: "Special occasions? Anniversary, honeymoon, family reunion? We add personal touches — flowers, cakes, special room setups — at no extra hassle.",
      },
      {
        icon: "📞",
        title: "Dedicated Trip Manager",
        desc: "A single point of contact manages your entire trip. One call or message and everything is handled — changes, emergencies, requests.",
      },
    ],
  },
  benefits: [
    {
      icon: "🧘",
      title: "Absolute Zero Stress",
      desc: "You don't need to research hotels, compare ticket prices, plan routes, or worry about logistics. Our team handles every single detail so you can focus entirely on enjoying your trip.",
    },
    {
      icon: "💎",
      title: "VIP Treatment Throughout",
      desc: "From priority check-ins to personalized itineraries and special occasion arrangements — you're treated like a VIP from the moment you book until you return home.",
    },
    {
      icon: "💰",
      title: "Best Value for Complete Packages",
      desc: "Booking everything separately — tickets, hotels, cabs — costs significantly more and takes hours of research. Our bundled pricing gives you premium service at a fraction of the cost.",
    },
    {
      icon: "🔄",
      title: "Fully Flexible & Customizable",
      desc: "This isn't a rigid group tour. Every aspect of your trip is tailored to your preferences, budget, travel style, and special requirements. Your trip, your way.",
    },
  ],
  howItWorks: [
    {
      step: "1",
      title: "Share Your Dream Trip",
      desc: "Tell us your destination, travel dates, number of travellers, budget range, and any special preferences or occasions.",
    },
    {
      step: "2",
      title: "Receive a Custom Itinerary",
      desc: "Within 24 hours, our travel experts send you a detailed day-by-day itinerary with hotel options, ticket details, and pricing.",
    },
    {
      step: "3",
      title: "Approve & Confirm",
      desc: "Review the plan, request any changes, and confirm. We handle all bookings — tickets, hotels, and cars — simultaneously.",
    },
    {
      step: "4",
      title: "Travel Stress-Free",
      desc: "Your dedicated trip manager is available throughout your journey. From airport pickup to final drop-off, everything is taken care of.",
    },
  ],
  faq: [
    {
      q: "How far in advance should I book the Ultimate Package?",
      a: "We recommend booking at least 7–10 days in advance for domestic trips and 15–20 days for trips involving flights. However, we can often accommodate last-minute requests — just ask.",
    },
    {
      q: "Can I customize the itinerary after booking?",
      a: "Yes, absolutely. Your itinerary is flexible. You can request changes up to 48 hours before departure, and minor adjustments can be made even during the trip.",
    },
    {
      q: "Do you handle group travel for families or corporate trips?",
      a: "Yes! We specialize in family trips, honeymoons, group tours, and corporate offsite travel. The larger the group, the better the pricing.",
    },
    {
      q: "What if something goes wrong during the trip?",
      a: "Your dedicated trip manager is available 24/7 during your travel. Flight delays, hotel issues, car breakdowns — we handle it all so you don't have to stress.",
    },
  ],
};

export default function UltimatePackagePage() {
  return <ServicePageLayout config={config} />;
}
