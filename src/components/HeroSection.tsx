import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-illustration.png";
import { CheckCircle, Star, Users, Globe, Smartphone, Code, ShoppingCart, BarChart3, Palette, ArrowRight } from "lucide-react";

const highlights = [
  { icon: Code, text: "Custom Software Development" },
  { icon: Globe, text: "Professional Website Development" },
  { icon: Smartphone, text: "Mobile App Development (Android & iOS)" },
  { icon: ShoppingCart, text: "E-Commerce (Shopify, WooCommerce)" },
  { icon: BarChart3, text: "Digital Marketing & SEO Services" },
  { icon: Palette, text: "UI/UX Design & Modern Web Apps" },
];

const trustStats = [
  { value: "50+", label: "Businesses Served" },
  { value: "100+", label: "Projects Delivered" },
  { value: "15+", label: "Technologies" },
  { value: "99%", label: "Client Satisfaction" },
];

const HeroSection = () => (
  <section className="gradient-hero min-h-[calc(100vh-5rem)] flex items-center">
    <div className="container-narrow mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase">
              #1 Software & Web Development Company in India
            </span>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Leading Web, Software &{" "}
              <span className="text-primary">Mobile App Development</span>{" "}
              Company in India
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              <strong className="text-foreground">NetWave Digital</strong> is a top-rated software development company based in Bokaro Steel City, Jharkhand, India. We help startups, local businesses, and growing enterprises build scalable custom software, professional websites, powerful mobile apps, e-commerce stores, and result-driven digital marketing strategies that accelerate growth and drive real results.
            </p>

            <p className="text-base text-muted-foreground max-w-lg">
              Whether you need a <strong className="text-foreground">React developer</strong>, <strong className="text-foreground">Shopify developer</strong>, <strong className="text-foreground">SEO services in India</strong>, or a dedicated team for <strong className="text-foreground">custom software development services</strong> — we deliver world-class solutions at affordable prices.
            </p>

            {/* Pricing Highlight */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
              <p className="text-primary font-bold text-lg">
                🚀 Professional Website Development Starts at Just ₹5,999
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                High-quality, SEO-optimized, mobile-responsive websites for every business.
              </p>
            </div>

            {/* Service Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h) => (
                <li key={h.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <h.icon className="w-4 h-4 text-primary shrink-0" />
                  {h.text}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/work">View Our Work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Start Your Project Today</Link>
              </Button>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-muted-foreground flex items-center gap-1 flex-wrap">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              Trusted by 50+ businesses · Serving clients across India & globally · Based in Bokaro Steel City, Jharkhand
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
            <img
              src={heroImage}
              alt="NetWave Digital - Custom Software Development, Web Design, Mobile App Development and Digital Marketing Company Dashboard"
              className="w-full max-w-lg mx-auto"
              loading="eager"
            />

            {/* Trust Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustStats.map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-3 text-center shadow-card border border-border">
                  <p className="font-heading text-xl font-bold text-primary">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Extended SEO Intro */}
      <ScrollReveal delay={0.3}>
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-10 shadow-card border border-border">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Why Choose NetWave Digital for Software & Web Development?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed">
            <div className="space-y-3">
              <p>
                As a leading <strong className="text-foreground">web development company in India</strong>, NetWave Digital specializes in delivering end-to-end <strong className="text-foreground">custom software development services</strong> that transform business ideas into powerful digital products. Our expert team of <strong className="text-foreground">React developers</strong>, mobile <strong className="text-foreground">app developers in India</strong>, and certified <strong className="text-foreground">Shopify developers</strong> work closely with clients to build solutions that drive measurable results.
              </p>
              <p>
                From professional <strong className="text-foreground">website development services</strong> starting at just ₹5,999 to complex enterprise-grade software, we deliver quality at every scale. Our <strong className="text-foreground">digital marketing agency</strong> services including <strong className="text-foreground">SEO services in India</strong>, social media marketing, and PPC campaigns help businesses reach their target audience and grow online visibility.
              </p>
            </div>
            <div className="space-y-3">
              <p>
                Whether you're a startup looking for an MVP, a business needing a <strong className="text-foreground">mobile app development company</strong> for Android & iOS apps, or an enterprise seeking a reliable <strong className="text-foreground">software development company</strong> for long-term partnership — NetWave Digital is your trusted technology partner.
              </p>
              <p>
                Based in <strong className="text-foreground">Bokaro Steel City, Jharkhand</strong>, we serve clients across India and globally. Our Bokaro, Jharkhand-based IT company combines local expertise with global standards to deliver scalable, secure, and innovative digital solutions. <Link to="/contact" className="text-primary font-semibold hover:underline">Contact us today</Link> for a free consultation and let's build something great together.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default HeroSection;
