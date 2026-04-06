import { Helmet } from "react-helmet-async";
import ContactSection from "@/components/ContactSection";

const Contact = () => (
  <>
    <Helmet>
      <title>Contact Us — NetWave Digital | Get Free Consultation</title>
      <meta name="description" content="Contact NetWave Digital for custom software development, web design, mobile app development, and digital marketing services. Get a free consultation today!" />
      <meta name="keywords" content="contact us, free consultation, software development inquiry, web development quote, app development contact, Bokaro, Jharkhand" />
      <meta property="og:title" content="Contact NetWave Digital - Get Free Consultation" />
      <meta property="og:description" content="Contact us for custom software development, web design, and digital marketing services." />
      <meta property="og:url" content="https://netwavedigital.com/contact" />
      <link rel="canonical" href="https://netwavedigital.com/contact" />
    </Helmet>
    <ContactSection />
  </>
);

export default Contact;
