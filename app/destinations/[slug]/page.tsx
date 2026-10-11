import { notFound } from "next/navigation";
import { getDestination, getAllSlugs } from "../../data/destinations";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DestinationContent from "./DestinationContent";

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img src={dest.heroImage} alt={dest.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-16">
          <p className="text-white/70 text-sm font-medium mb-1 uppercase tracking-widest">West Bengal</p>
          <h1 className="text-white text-4xl md:text-6xl font-bold">{dest.name}</h1>
          <p className="text-white/80 text-lg mt-1">{dest.tagline}</p>
        </div>
      </div>

      <DestinationContent dest={dest} />

      <Footer />
    </>
  );
}
