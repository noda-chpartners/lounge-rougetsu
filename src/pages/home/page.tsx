import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ConceptSection from "./components/ConceptSection";
import MenuSection from "./components/MenuSection";
import AccessSection from "./components/AccessSection";
import ContactSection from "./components/ContactSection";
import RecruitSection from "./components/RecruitSection";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Home() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-rougetu-dark">
      <Header />
      <main>
        <HeroSlider />
        <ConceptSection />
        <MenuSection />
        <AccessSection />
        <ContactSection />
        <RecruitSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}