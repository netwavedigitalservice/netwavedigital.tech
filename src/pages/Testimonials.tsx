import { Helmet } from "react-helmet-async";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";

const Testimonials = () => (
  <>
    <Helmet>
      <title>Testimonials — NetWave Digital | Client Reviews & Feedback</title>
      <meta name="description" content="Read what our clients say about NetWave Digital. Discover testimonials from satisfied customers who trusted us for their software development, web design, and digital marketing needs." />
      <meta name="keywords" content="testimonials, client reviews, feedback, customer testimonials, software development reviews, web development reviews, Bokaro clients" />
      <meta property="og:title" content="Client Testimonials - NetWave Digital" />
      <meta property="og:description" content="Read what our clients say about our services." />
      <meta property="og:url" content="https://netwavedigital.com/testimonials" />
      <link rel="canonical" href="https://netwavedigital.com/testimonials" />
    </Helmet>
    <TestimonialsSection />
    <GoogleReviewsSection />
  </>
);

export default Testimonials;
