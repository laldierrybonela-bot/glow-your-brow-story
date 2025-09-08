import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import SpecialOffer from "@/components/SpecialOffer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Gallery />
      <Testimonials />
      <About />
      <SpecialOffer />
      <FAQ />
      <Footer />
      <FloatingButtons />
    </main>
  );
};

export default Index;
