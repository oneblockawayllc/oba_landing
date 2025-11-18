import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ThreeHeadedMonster from "@/components/ThreeHeadedMonster";
import GeographicFocus from "@/components/GeographicFocus";
import BookConsult from "@/components/BookConsult";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <ThreeHeadedMonster />
      <GeographicFocus />
      <BookConsult />
      <About />
      <Contact />
    </div>
  );
}

