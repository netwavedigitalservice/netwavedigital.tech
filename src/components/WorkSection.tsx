import { useState } from "react";
import { ExternalLink, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const readyToSell = [
  { title: "E-Commerce Store", type: "E-Commerce", desc: "Complete online store with payment gateway, product management, and order tracking.", price: "₹14,999" },
  { title: "Real Estate Website", type: "Real Estate", desc: "Property listing website with search filters, agent profiles, and inquiry forms.", price: "₹12,999" },
  { title: "School Management System", type: "Education", desc: "Full school ERP with student management, attendance, and fee tracking.", price: "₹19,999" },
  { title: "Restaurant Website", type: "Food & Beverage", desc: "Menu showcase, online ordering, table reservations, and delivery tracking.", price: "₹9,999" },
  { title: "Portfolio Website", type: "Personal", desc: "Stunning portfolio to showcase your work with blog and contact features.", price: "₹6,999" },
];

const clientProjects = [
  { client: "TechStart Inc.", industry: "SaaS", tech: "React, Node.js, AWS", desc: "Built a complete SaaS platform for project management." },
  { client: "GreenMart", industry: "E-Commerce", tech: "Shopify, Custom Theme", desc: "Custom e-commerce store with 500+ products and payment integration." },
  { client: "EduLearn", industry: "Education", tech: "React Native, Firebase", desc: "Mobile learning app with live classes and quiz modules." },
  { client: "HealthFirst", industry: "Healthcare", tech: "Laravel, Vue.js", desc: "Patient management system with appointment scheduling." },
  { client: "BuildSpace", industry: "Real Estate", tech: "Next.js, Supabase", desc: "Property listing platform with virtual tour integration." },
  { client: "FoodieHub", industry: "Food Delivery", tech: "Flutter, SpringBoot", desc: "Multi-vendor food delivery app with real-time tracking." },
];

const filters = ["All", "Web", "Mobile", "E-Commerce", "Custom"];

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? clientProjects
    : clientProjects.filter((p) => {
        if (activeFilter === "Web") return p.tech.match(/React|Vue|Next|Laravel/i);
        if (activeFilter === "Mobile") return p.tech.match(/Native|Flutter/i);
        if (activeFilter === "E-Commerce") return p.industry === "E-Commerce";
        return p.industry === "SaaS" || p.industry === "Healthcare";
      });

  return (
    <section id="work" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Projects & Products</h2>
          </div>
        </ScrollReveal>

        {/* Ready to Sell */}
        <ScrollReveal>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">🔹 Ready to Sell Websites</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {readyToSell.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 overflow-hidden group h-full flex flex-col">
                <div className="h-40 bg-accent flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-accent-foreground/40" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-medium text-primary mb-1">{item.type}</span>
                  <h4 className="font-heading font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{item.desc}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="font-heading font-bold text-lg text-primary">{item.price}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Demo</Button>
                      <Button size="sm">Buy Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Projects */}
        <ScrollReveal>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">🔹 Delivered Client Projects</h3>
        </ScrollReveal>
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.client} delay={i * 0.08}>
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 h-full">
                <span className="text-xs font-medium text-primary">{project.industry}</span>
                <h4 className="font-heading font-semibold text-foreground mt-1 mb-2">{project.client}</h4>
                <p className="text-sm text-muted-foreground mb-3">{project.desc}</p>
                <p className="text-xs text-muted-foreground mb-4">
                  <span className="font-medium text-foreground">Tech:</span> {project.tech}
                </p>
                <Button size="sm" variant="outline" className="gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" /> View Live
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
