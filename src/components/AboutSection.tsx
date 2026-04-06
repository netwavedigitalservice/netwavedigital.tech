import { Link } from "react-router-dom";
import { Lightbulb, Users, Shield, Clock, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { AboutIllustration } from "@/assets/illustrations";

const highlights = [
  { icon: Lightbulb, title: "Innovation Driven", desc: "Cutting-edge software development solutions using the latest technologies and frameworks." },
  { icon: Users, title: "Client Focused", desc: "Your business success is our priority — from planning to post-launch support." },
  { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security with cloud-ready, scalable software architecture." },
  { icon: Clock, title: "On-Time Delivery", desc: "We deliver quality web and app development projects within committed deadlines." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "15+", label: "Technologies" },
  { value: "99%", label: "Client Satisfaction" },
];

const AboutSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">About NetWave Digital</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Your Trusted Software Development Partner
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We are a full-service IT company specializing in custom software development, website design, mobile app development, digital marketing, and IT consulting.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <ScrollReveal>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground">Who We Are</h3>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">NetWave Digital</strong> is a leading software development and IT consulting company based in Bokaro Steel City, Jharkhand, India. We specialize in building custom software, responsive websites, cross-platform mobile applications, e-commerce platforms, and data-driven digital marketing campaigns for businesses of all sizes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded by <span className="font-semibold text-foreground">Sagar</span>, a passionate full-stack developer and tech entrepreneur, NetWave Digital was built with a vision to make world-class software development accessible and affordable for startups, SMEs, and enterprises across India and globally.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm">
                <Link to="/services">Explore Our Services <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/contact">Talk to Our Experts</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground">Our Mission & Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Mission:</span> To deliver innovative, scalable, and secure digital solutions — including custom software, web applications, mobile apps, and digital marketing strategies — that accelerate business growth and transform ideas into impactful products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Vision:</span> To become a globally trusted technology partner known for quality software engineering, innovative app development, and result-oriented digital marketing services.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-section-alt rounded-lg p-4 text-center">
                  <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* About Visual Section with Illustration */}
      <ScrollReveal>
        <div className="bg-foreground rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <AboutIllustration />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h3 className="font-heading text-2xl font-bold text-background">
                Technology Excellence
              </h3>
              <p className="text-background/70 leading-relaxed">
                We leverage cutting-edge technologies to build robust, scalable, and future-proof digital solutions. Our expertise spans across multiple platforms and frameworks.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Node.js", "Flutter", "AWS", "Shopify", "AI/ML", "PHP", "Laravel", "Vue.js", "MongoDB", "PostgreSQL", "Firebase"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-background/10 text-background text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Dark highlight cards */}
      <div className="bg-foreground rounded-2xl p-8 md:p-10 mb-16">
        <ScrollReveal>
          <h3 className="font-heading text-xl font-semibold text-background text-center mb-8">Why Choose NetWave Digital for Software Development?</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-background mb-1">{item.title}</h4>
                <p className="text-sm text-background/60">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Visit Our Office section - temporarily hidden from homepage */}
      {/* 
      <ScrollReveal>
        <div className="text-center mb-6">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Visit Our Office</h3>
          <p className="text-sm text-muted-foreground">Main Road Balidih, Bokaro Steel City, Jharkhand 827014, India</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-card">
          <iframe
            title="NetWave Digital Office Location - Software Development Company in Bokaro"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.0!2d86.055703!3d23.667359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQwJzAyLjUiTiA4NsKwMDMnMjAuNSJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ScrollReveal>
      */}
    </div>
  </section>
);

export default AboutSection;
