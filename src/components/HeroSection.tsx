import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => (
  <section id="home" className="gradient-hero min-h-screen flex items-center pt-20">
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
                <a href="#contact">Get Free Consultation</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#work">View Our Work</a>
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
