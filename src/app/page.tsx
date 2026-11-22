import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSolution from "@/components/sections/ProblemSolution";
import SixPillars from "@/components/sections/SixPillars";
import HowItWorks from "@/components/sections/HowItWorks";
import VirtualLabs from "@/components/sections/VirtualLabs";
import Testimonials from "@/components/sections/Testimonials";
import ScholarshipPreview from "@/components/sections/ScholarshipPreview";
import ForParents from "@/components/sections/ForParents";
import EarlyAccessCTA from "@/components/sections/EarlyAccessCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <SixPillars />
        <HowItWorks />
        <VirtualLabs />
        <Testimonials />
        <ScholarshipPreview />
        <ForParents />
        <EarlyAccessCTA />
      </main>
      <Footer />
    </>
  );
}
