import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { step: "01", title: "Requirement Gathering", desc: "Understanding your business goals and project scope." },
  { step: "02", title: "Planning", desc: "Creating a roadmap with timelines and milestones." },
  { step: "03", title: "Design & Development", desc: "Building your solution with modern technologies." },
  { step: "04", title: "Testing", desc: "Rigorous QA to ensure quality and performance." },
  { step: "05", title: "Deployment", desc: "Launching your product to the world securely." },
  { step: "06", title: "Support & Maintenance", desc: "Ongoing support to keep everything running smoothly." },
];

const ProcessSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Development Process</h2>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Timeline line */}
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
    </div>
  </section>
);

export default ProcessSection;
