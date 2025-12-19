import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TodaSection from "./components/TodaSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import TrustSection from "./components/TrustSection";
import HowItWorks from "./components/HowItWorks";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";

export default function Landing() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <Hero onDemoClick={() => setIsDemoOpen(true)} />
      <TodaSection />
      <ProblemSection />
      <SolutionSection />
      <TrustSection />
      <HowItWorks />
      <FinalCTA />
      <Footer />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
