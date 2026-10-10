import LegalPageLayout from "../components/LegalPageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions – TravelKolkata",
  description: "Read our Terms and Conditions of Service for TravelKolkata travel packages.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      badge="Legal"
      icon="📋"
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our services."
      lastUpdated="January 2025"
      accentClass="text-slate-900"
      badgeClass="badge-blue"
      sections={[
        {
          id: "acceptance",
          title: "Acceptance of Agreement",
          content: (
            <p>
              By accessing this website, creating an account, or processing a transaction for our travel services
              (including dedicated vehicle rentals, hotel accommodations, and end-to-end travel itineraries), you are
              entering into a legally binding contract. If you do not agree with any part of these terms, you must
              immediately cease utilizing our platform.
            </p>
          ),
        },
        {
          id: "scope",
          title: "Scope and Delivery of Services",
          content: (
            <p>
              Our platform functions as a comprehensive travel service provider and aggregator. While we take full
              operational responsibility for our dedicated sightseeing vehicles and internal itinerary planning, all
              third-party services — such as flights, train journeys, and specific hotel accommodations — are executed
              by independent contractors. We act as a facilitator for these specific third-party services and cannot be
              held liable for their individual service deficiencies.
            </p>
          ),
        },
        {
          id: "obligations",
          title: "User Obligations and Conduct",
          content: (
            <p>
              The customer is solely responsible for providing accurate, verifiable information at the time of booking,
              exactly matching government-issued identification. Customers must ensure their own timely arrival for
              designated pickups. Any disruptive, illegal, or abusive behavior toward our designated drivers, guides,
              or hotel staff will result in immediate termination of the trip without any liability for refunds.
            </p>
          ),
        },
        {
          id: "liability",
          title: "Limitation of Liability and Force Majeure",
          content: (
            <p>
              The company shall not be held liable for any direct, indirect, punitive, or consequential damages arising
              from travel delays, vehicle breakdowns, or itinerary alterations caused by circumstances beyond our
              control. This includes Acts of God, severe weather conditions, government lockdowns, civil unrest, or
              sudden vendor bankruptcies.
            </p>
          ),
        },
        {
          id: "governing-law",
          title: "Governing Law and Jurisdiction",
          content: (
            <p>
              This entire agreement shall be governed strictly by the laws of India. Any legal disputes, claims, or
              conflicts arising from these services shall be subject to the exclusive jurisdiction of the competent
              civil courts located in Kolkata, West Bengal.
            </p>
          ),
        },
      ]}
    />
  );
}
