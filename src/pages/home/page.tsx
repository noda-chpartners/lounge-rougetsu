import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import ConceptSection from "./components/ConceptSection";
import MenuSection from "./components/MenuSection";
import AccessSection from "./components/AccessSection";
import ContactSection from "./components/ContactSection";
import RecruitSection from "./components/RecruitSection";
import InstagramSection from "./components/InstagramSection";
import Footer from "./components/Footer";

export default function Home() {
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
