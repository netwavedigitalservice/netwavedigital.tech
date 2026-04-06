import { Helmet } from "react-helmet-async";
import AboutSection from "@/components/AboutSection";

const About = () => (
  <>
    <Helmet>
      <title>About Us — NetWave Digital | Software Development Company in Bokaro</title>
      <meta name="description" content="Learn about NetWave Digital, a premier software development company in Bokaro, Jharkhand. Our team of expert developers, designers, and digital marketers deliver exceptional IT solutions." />
      <meta name="keywords" content="about NetWave Digital, software company Bokaro, IT company Jharkhand, our team, developers, designers, digital marketers" />
      <meta property="og:title" content="About NetWave Digital - Our Team & Mission" />
      <meta property="og:description" content="Learn about NetWave Digital, a premier software development company in Bokaro, Jharkhand." />
      <meta property="og:url" content="https://netwavedigital.com/about" />
      <link rel="canonical" href="https://netwavedigital.com/about" />
    </Helmet>
    <AboutSection />
  </>
);

export default About;
