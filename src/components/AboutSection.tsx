import { Lightbulb, Users, Shield, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  { icon: Lightbulb, title: "Innovation Driven", desc: "Cutting-edge solutions using the latest technologies." },
  { icon: Users, title: "Client Focused", desc: "Your success is our priority at every step." },
  { icon: Shield, title: "Secure & Scalable", desc: "Enterprise-grade security with scalable architecture." },
  { icon: Clock, title: "On-Time Delivery", desc: "We deliver quality projects within deadlines." },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">About Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Who We Are
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <ScrollReveal>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground">Our Company</h3>
            <p className="text-muted-foreground leading-relaxed">
              NetWave Digital is a technology company specializing in custom software development, web & mobile applications, and digital transformation. Based in Bokaro Steel City, Jharkhand, we serve clients globally with innovative and reliable tech solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded by <span className="font-semibold text-foreground">Sagar</span>, a passionate technologist with a vision to empower businesses through smart digital solutions. With deep expertise in full-stack development and a commitment to quality, Sagar leads NetWave Digital in delivering excellence.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="space-y-4">
            <h3 className="font-heading text-xl font-semibold text-foreground">Mission & Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Mission:</span> To deliver innovative, scalable, and secure digital solutions that accelerate business growth and transform ideas into impactful products.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Vision:</span> To become a globally trusted technology partner known for quality, innovation, and client success.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow text-center">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="rounded-xl overflow-hidden shadow-card">
          <iframe
            title="NetWave Digital Location"
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
    </div>
  </section>
);

export default AboutSection;
