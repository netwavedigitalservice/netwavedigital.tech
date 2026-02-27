import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-illustration.png";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Custom Software Development",
  "Mobile App Development",
  "Digital Marketing & SEO",
  "24/7 Support & Maintenance",
];

const HeroSection = () => (
  <section className="gradient-hero min-h-[calc(100vh-5rem)] flex items-center">
    <div className="container-narrow mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              #1 Software Development Company in India
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Empowering Businesses with Smart{" "}
              <span className="text-primary">Digital Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              We build scalable custom software, modern websites, powerful mobile apps, and result-driven digital marketing strategies for growing businesses across India and worldwide.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/work">View Our Work</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Trusted by 50+ businesses · Based in Bokaro Steel City, Jharkhand
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <img
            src={heroImage}
            alt="NetWave Digital - Custom Software Development, Web Design and Mobile App Development Company Dashboard"
            className="w-full max-w-lg mx-auto"
            loading="eager"
          />
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSection;
