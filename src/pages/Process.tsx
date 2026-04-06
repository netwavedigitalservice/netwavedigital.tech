import { Helmet } from "react-helmet-async";
import ProcessSection from "@/components/ProcessSection";

const Process = () => (
  <>
    <Helmet>
      <title>Our Process — NetWave Digital | Software Development Methodology</title>
      <meta name="description" content="Discover NetWave Digital's proven software development process. Learn how we deliver quality projects through agile methodology, transparent communication, and iterative development." />
      <meta name="keywords" content="our process, development methodology, agile development, software development process, project management, software delivery" />
      <meta property="og:title" content="Our Process - NetWave Digital" />
      <meta property="og:description" content="Discover our proven software development process." />
      <meta property="og:url" content="https://netwavedigital.com/process" />
      <link rel="canonical" href="https://netwavedigital.com/process" />
    </Helmet>
    <ProcessSection />
  </>
);

export default Process;
