import ScrollReveal from "@/components/ScrollReveal";
import { Code, Smartphone, Server, Database, Cloud, Palette } from "lucide-react";

const techGroups = [
  {
    title: "Frontend Development",
    icon: Palette,
    techs: ["React.js", "Angular", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Server,
    techs: ["Node.js", "SpringBoot", "Laravel", "PHP", "Python", "Express.js"],
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    techs: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Ionic"],
  },
  {
    title: "Database & Storage",
    icon: Database,
    techs: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    techs: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "CMS & E-Commerce",
    icon: Code,
    techs: ["WordPress", "Shopify", "WooCommerce", "Magento", "Custom CMS"],
  },
];

const TechnologiesSection = () => (
  <section id="technologies" className="section-padding bg-section-alt">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Tech Stack</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Technologies We Use for Software & App Development
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            We leverage the best programming languages, frameworks, and cloud platforms to build high-performance software, websites, and mobile applications.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techGroups.map((group, i) => (
          <ScrollReveal key={group.title} delay={i * 0.08}>
            <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 h-full">
              <div className="w-11 h-11 rounded-lg bg-accent flex items-center justify-center mb-4">
                <group.icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-section-alt text-muted-foreground rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TechnologiesSection;
