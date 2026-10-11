import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DestinationsGrid from "./components/DestinationsGrid";
import ExploreSection from "./components/ExploreSection";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DestinationsGrid />
        <ExploreSection />
        <WhyChooseUs />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
