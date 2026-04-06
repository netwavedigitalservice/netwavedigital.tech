import {
  Monitor, Smartphone, Server, Palette, ShoppingCart, FileText, Users, ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { ServicesIllustration } from "@/assets/illustrations";

const categories = [
  {
    title: "IT Services & Custom Software",
    icon: Monitor,
    desc: "End-to-end software development and IT consulting for businesses.",
    items: ["Custom Software Development", "Full Stack Web Development", "IT Consulting & Strategy", "QA & Testing", "Digital Marketing & SEO", "DevOps & Cloud", "Data as a Service"],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    desc: "Native and cross-platform mobile apps for iOS and Android.",
    items: ["Mobile App Development", "iOS App (Swift)", "Android App (Kotlin)", "React Native Apps", "Flutter App Development", "Ionic Hybrid Apps"],
  },
  {
    title: "Backend Development",
    icon: Server,
    desc: "Robust server-side solutions and AI-powered applications.",
    items: ["AI Chatbot Development", "PHP Development", "Laravel Framework", "CodeIgniter", "Symfony", "Node.js Development", "SpringBoot"],
  },
  {
    title: "Frontend Development",
    icon: Palette,
    desc: "Modern, responsive UI development with top JavaScript frameworks.",
    items: ["Angular Development", "ReactJS Development", "VueJS Development"],
  },
  {
    title: "E-Commerce Development",
    icon: ShoppingCart,
    desc: "Complete online store solutions to sell products worldwide.",
    items: ["Magento Development", "WooCommerce Store", "Shopify Store Development"],
  },
  {
    title: "CMS & WordPress Development",
    icon: FileText,
    desc: "Content management systems and WordPress website development.",
    items: ["Custom CMS Development", "WordPress Website Development"],
  },
  {
    title: "Dedicated Hiring Services",
    icon: Users,
    desc: "Hire skilled developers and tech leaders for your projects.",
    items: ["Dedicated Development Teams", "CTO as a Service", "CMO as a Service", "Tech Agency Partnership"],
  },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-section-alt">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Software Development & IT Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            From custom software development to mobile app development, website design, e-commerce solutions, and digital marketing — NetWave Digital offers comprehensive technology services tailored to your business goals.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.title} delay={i * 0.08}>
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 h-full flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                <cat.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{cat.title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{cat.desc}</p>
              <ul className="space-y-1.5 flex-1">
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

      {/* CTA */}
      <ScrollReveal>
        <div className="bg-foreground rounded-2xl p-8 md:p-10 text-center">
          <h3 className="font-heading text-2xl font-bold text-background mb-3">
            Need Custom Software or App Development?
          </h3>
          <p className="text-background/60 mb-6 max-w-xl mx-auto">
            Whether you need a website, mobile app, e-commerce store, or custom software — our expert developers are ready to build it. Get a free consultation and quote today.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Free Quote <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </ScrollReveal>

      {/* Services Visual Section */}
      <ScrollReveal>
        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Comprehensive IT Solutions
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                From concept to deployment, we provide end-to-end technology solutions that help businesses transform digitally. Our team specializes in creating scalable, secure, and high-performance applications.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  { title: "Web Development", desc: "Modern responsive websites" },
                  { title: "Mobile Apps", desc: "iOS & Android apps" },
                  { title: "E-Commerce", desc: "Online stores" },
                  { title: "Digital Marketing", desc: "SEO & branding" }
                ].map((item) => (
                  <div key={item.title} className="bg-section-alt rounded-lg p-3">
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <ServicesIllustration />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ServicesSection;
