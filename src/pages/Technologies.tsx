import { Helmet } from "react-helmet-async";
import TechnologiesSection from "@/components/TechnologiesSection";

const Technologies = () => (
  <>
    <Helmet>
      <title>Technologies — NetWave Digital | Tech Stack & Tools We Use</title>
      <meta name="description" content="Explore the technologies and tools NetWave Digital uses for software development. Our tech stack includes React, Vue.js, Flutter, Laravel, Node.js, and more." />
      <meta name="keywords" content="technologies, tech stack, tools, programming languages, frameworks, React, Vue.js, Flutter, Laravel, Node.js, Python, JavaScript" />
      <meta property="og:title" content="Technologies We Use - NetWave Digital" />
      <meta property="og:description" content="Explore our technology stack and tools." />
      <meta property="og:url" content="https://netwavedigital.com/technologies" />
      <link rel="canonical" href="https://netwavedigital.com/technologies" />
    </Helmet>
    <TechnologiesSection />
  </>
);

export default Technologies;
