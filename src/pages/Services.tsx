import { Helmet } from "react-helmet-async";
import ServicesSection from "@/components/ServicesSection";

const Services = () => (
  <>
    <Helmet>
      <title>Services — NetWave Digital | Web Development, App Development & Digital Marketing</title>
      <meta name="description" content="Explore NetWave Digital's comprehensive IT services including custom software development, web development, mobile app development, e-commerce solutions, and digital marketing services in Bokaro, Jharkhand." />
      <meta name="keywords" content="services, web development, app development, mobile app, software development, e-commerce, digital marketing, SEO, IT consulting, Bokaro, Jharkhand" />
      <meta property="og:title" content="NetWave Digital Services - Web & App Development" />
      <meta property="og:description" content="Explore our comprehensive IT services including web development, mobile app development, and digital marketing." />
      <meta property="og:url" content="https://netwavedigital.com/services" />
      <link rel="canonical" href="https://netwavedigital.com/services" />
    </Helmet>
    <ServicesSection />
  </>
);

export default Services;
