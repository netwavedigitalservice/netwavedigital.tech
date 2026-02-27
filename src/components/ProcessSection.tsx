import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { step: "01", title: "Requirement Gathering", desc: "We deeply understand your business goals, target audience, and project scope to define a clear software development roadmap." },
  { step: "02", title: "Planning & Strategy", desc: "Our team creates a detailed project plan with technology selection, timelines, milestones, and budget estimation." },
  { step: "03", title: "UI/UX Design", desc: "We design intuitive, user-friendly interfaces and prototypes that ensure the best user experience for your website or app." },
  { step: "04", title: "Development & Coding", desc: "Our expert developers build your custom software, website, or mobile app using modern frameworks like React, Flutter, Node.js, and more." },
  { step: "05", title: "Testing & QA", desc: "Rigorous quality assurance and testing to ensure your software is bug-free, secure, fast, and ready for production." },
  { step: "06", title: "Deployment & Launch", desc: "We deploy your application to the cloud or app stores, ensuring smooth launch with zero downtime." },
  { step: "07", title: "Support & Maintenance", desc: "Ongoing post-launch support, performance monitoring, updates, and feature enhancements to keep your software running at its best." },
];

const ProcessSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">How We Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our Software Development Process
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We follow an agile software development methodology to deliver high-quality custom software, websites, and mobile apps — on time and within budget.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8 md:space-y-0">
          {steps.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 0.1}>
              <div className={`md:flex items-center gap-8 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-card inline-block text-left">
                    <span className="text-xs font-bold text-primary">STEP {item.step}</span>
                    <h4 className="font-heading font-semibold text-foreground mt-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-8 h-8 rounded-full bg-primary items-center justify-center shrink-0 relative z-10">
                  <span className="text-xs font-bold text-primary-foreground">{item.step}</span>
                </div>
                <div className="md:w-1/2" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <ScrollReveal>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProcessSection;
