import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NetWave Digital — Best Software Development, Web & App Development Company in India</title>
        <meta name="description" content="NetWave Digital is a leading software development company in Bokaro, Jharkhand. We offer custom software development, mobile app development, website design, digital marketing, SEO, and IT consulting services at affordable prices." />
        <meta name="keywords" content="software development company, web development, app development, digital marketing, SEO services, custom software, mobile app development, website design, IT consulting, e-commerce development, React development, Flutter app development, Bokaro, Jharkhand, India" />
        <meta property="og:title" content="NetWave Digital — Software, Web & App Development Company" />
        <meta property="og:description" content="Top-rated software development, web design, mobile app development, digital marketing & IT consulting company. Get a free consultation today!" />
        <meta property="og:url" content="https://netwavedigital.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="NetWave Digital — Software & App Development Company" />
        <meta name="twitter:description" content="Custom software development, web & mobile app development, digital marketing, and IT consulting services." />
        <link rel="canonical" href="https://netwavedigital.com/" />
      </Helmet>
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Home;

