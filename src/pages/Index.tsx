import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemValue from "@/components/ProblemValue";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import FeatureHighlights from "@/components/FeatureHighlights";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemValue />
      <HowItWorks />
      <SocialProof />
      <FeatureHighlights />
      <CTABanner />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
