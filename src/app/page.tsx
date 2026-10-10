import Hero from "@/components/sections/Hero";
import ValuePillars from "@/components/sections/ValuePillars";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Differentiators from "@/components/sections/Differentiators";
import TrustBadges from "@/components/sections/TrustBadges";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ValuePillars />
      <ServicesGrid />
      <Differentiators />
      <TrustBadges />
      <CTASection />
    </>
  );
}
