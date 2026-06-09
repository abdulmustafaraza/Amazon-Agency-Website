import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PreFooterCTA from "@/components/PreFooterCTA";
import ProblemSection from "@/components/ProblemSection";
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
        <ProblemSection />
        <SelectedWork />
        <ServicesSection />
        <ToolsEcosystemSection />
        <PreFooterCTA />
      </main>
      <Footer />
    </div>
  );
}
