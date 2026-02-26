import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <TechnologiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Index;
