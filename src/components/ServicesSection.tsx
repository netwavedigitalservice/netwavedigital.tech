import { useState } from "react";
import {
  Monitor, Smartphone, Server, Palette, ShoppingCart, FileText, Users,
  Code, Globe, BarChart3, Settings, Database, Bot, Layers, Cpu
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  {
    title: "IT Services",
    icon: Monitor,
    items: ["Custom Software", "Full Stack Web Development", "IT Consulting", "QA & Testing", "Digital Marketing", "DevOps", "Data as a Service"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    items: ["Mobile App Development", "iOS (Swift)", "Android", "React Native", "Flutter", "Ionic"],
  },
  {
    title: "Backend Development",
    icon: Server,
    items: ["AI Chatbot", "PHP", "Laravel", "CodeIgniter", "Symfony", "NodeJS", "SpringBoot"],
  },
  {
    title: "Frontend Development",
    icon: Palette,
    items: ["Angular", "ReactJS", "VueJS"],
  },
  {
    title: "E-Commerce Solutions",
    icon: ShoppingCart,
    items: ["Magento", "WooCommerce", "Shopify"],
  },
  {
    title: "CMS Solutions",
    icon: FileText,
    items: ["Custom CMS", "WordPress Development"],
  },
  {
    title: "Hiring Services",
    icon: Users,
    items: ["Dedicated Development Teams", "CTO Services", "CMO Services", "Tech Agency Solutions"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What We Offer
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.08}>
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 h-full">
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                <cat.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
