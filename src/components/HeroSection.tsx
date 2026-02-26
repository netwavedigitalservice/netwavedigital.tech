import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section className="gradient-hero min-h-[calc(100vh-5rem)] flex items-center">
    <div className="container-narrow mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Empowering Businesses with Smart{" "}
              <span className="text-primary">Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              We build scalable software, modern websites, and powerful mobile apps for growing businesses.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <img
            src={heroImage}
            alt="Modern tech workspace dashboard mockup"
            className="w-full max-w-lg mx-auto"
            loading="eager"
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSection;
