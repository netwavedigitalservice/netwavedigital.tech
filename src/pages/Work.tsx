import { Helmet } from "react-helmet-async";
import WorkSection from "@/components/WorkSection";

const Work = () => (
  <>
    <Helmet>
      <title>Our Work — NetWave Digital | Portfolio & Projects</title>
      <meta name="description" content="Explore NetWave Digital's portfolio of successful projects. View our web development, mobile app development, and digital marketing case studies from various industries." />
      <meta name="keywords" content="our work, portfolio, projects, case studies, web development projects, app development projects, successful projects, Bokaro" />
      <meta property="og:title" content="Our Work - NetWave Digital Portfolio" />
      <meta property="og:description" content="Explore our portfolio of successful projects." />
      <meta property="og:url" content="https://netwavedigital.com/work" />
      <link rel="canonical" href="https://netwavedigital.com/work" />
    </Helmet>
    <WorkSection />
  </>
);

export default Work;
