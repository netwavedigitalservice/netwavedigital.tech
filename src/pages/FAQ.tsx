import { Helmet } from "react-helmet-async";
import FAQSection from "@/components/FAQSection";

const FAQ = () => (
  <>
    <Helmet>
      <title>FAQ — NetWave Digital | Frequently Asked Questions</title>
      <meta name="description" content="Find answers to frequently asked questions about NetWave Digital's software development, web design, mobile app development, and digital marketing services." />
      <meta name="keywords" content="FAQ, frequently asked questions, software development FAQ, web development questions, app development FAQ, digital marketing questions" />
      <meta property="og:title" content="FAQ - NetWave Digital" />
      <meta property="og:description" content="Frequently asked questions about our services." />
      <meta property="og:url" content="https://netwavedigital.com/faq" />
      <link rel="canonical" href="https://netwavedigital.com/faq" />
    </Helmet>
    <FAQSection />
  </>
);

export default FAQ;
