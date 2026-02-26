import ScrollReveal from "@/components/ScrollReveal";

const techs = [
  "React", "Angular", "Vue.js", "Node.js", "SpringBoot",
  "Laravel", "Flutter", "Shopify", "WordPress",
];

const TechnologiesSection = () => (
  <section id="technologies" className="section-padding bg-section-alt">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Technologies</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Technologies We Use</h2>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
          {techs.map((tech) => (
            <div
              key={tech}
              className="bg-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 flex items-center justify-center text-center"
            >
              <span className="text-sm font-medium text-foreground">{tech}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TechnologiesSection;
