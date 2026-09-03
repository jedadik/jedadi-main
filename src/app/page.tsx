import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-titanium-dark">
      <Header />
      <Hero />
      <EcosystemGrid />
      <Footer />
    </div>
  );
}
