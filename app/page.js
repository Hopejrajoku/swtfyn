import FinanceAdventure from "@/components/adventure";
import FinancialCard from "@/components/finacialCard";
import FinancialResources from "@/components/financial";
import HeroSection from "@/components/hero";
import Started from "@/components/started";
import TestimonialCarousel from "@/components/testimonials";

export default function Home() {
  return (
    <div className="mt-40">
      <div className="grid-background"></div>
      <HeroSection/>

      <FinancialResources /> 
      <FinanceAdventure />
      <FinancialCard/>      
      <TestimonialCarousel />
      <Started />
    </div>
  );
}