import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EventsSection } from "@/components/EventsSection";
import { TeamSection } from "@/components/TeamSection";
import { GallerySection } from "@/components/GallerySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <EventsSection />
      <TeamSection />
      <GallerySection />
      <Footer />
    </main>
  );
};

export default Index;
