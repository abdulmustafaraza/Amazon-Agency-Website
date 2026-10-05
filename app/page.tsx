import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FoundersSection from "@/components/FoundersSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PreFooterCTA from "@/components/PreFooterCTA";
import SelectedWork from "@/components/SelectedWork";
import ServicesSection from "@/components/ServicesSection";
import StatsStrip from "@/components/StatsStrip";
import ToolsEcosystemSection from "@/components/ToolsEcosystemSection";

export default function Home() {
  return (
    <div className="site-page">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <ServicesSection />
        <SelectedWork />
        <ToolsEcosystemSection />
        <FoundersSection />
        <FaqSection />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
