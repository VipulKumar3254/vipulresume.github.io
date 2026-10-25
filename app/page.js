import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import JourneySection from "./components/sections/JourneySection";
import WorkSection from "./components/sections/WorkSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="page-grid">
        <HeroSection />
        <JourneySection />
        <WorkSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
