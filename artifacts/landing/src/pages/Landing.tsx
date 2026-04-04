import { useEffect } from "react";
import Navbar from "@/components/sections/Navbar";
import SplineHero from "@/components/sections/SplineHero";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import SplineCarousel from "@/components/sections/SplineCarousel";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/sections/CustomCursor";

export default function Landing() {
  useEffect(() => {
    document.documentElement.classList.add('dark');

    // Handle hash scrolling on mount (e.g. when coming from another page)
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      // Small delay to ensure all components (like SplineHero) are rendered and heights are stable
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.dispatchEvent(new CustomEvent("app:release-scroll"));
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 800);
    }
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground font-sans">
      <CustomCursor />
      <Navbar />
      <main>
        <SplineHero />
        <Hero />
        <Marquee />
        <SplineCarousel />
        <About />
        <Work />
        <Services />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
