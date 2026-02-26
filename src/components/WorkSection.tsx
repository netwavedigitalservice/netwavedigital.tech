import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ShoppingBag, Globe, Building2, GraduationCap, UtensilsCrossed, Briefcase, Eye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const readyToSell = [
  { 
    title: "E-Commerce Store", 
    type: "E-Commerce", 
    desc: "Complete online store with payment gateway, product management, and order tracking.", 
    price: "₹14,999",
    icon: ShoppingCart,
    features: ["Payment Gateway", "Product Management", "Order Tracking", "Admin Panel"],
    color: "from-primary to-blue-600"
  },
  { 
    title: "Real Estate Website", 
    type: "Real Estate", 
    desc: "Property listing website with search filters, agent profiles, and inquiry forms.", 
    price: "₹12,999",
    icon: Building2,
    features: ["Property Listings", "Search Filters", "Agent Profiles", "Inquiry Forms"],
    color: "from-emerald-500 to-teal-600"
  },
  { 
    title: "School Management System", 
    type: "Education", 
    desc: "Full school ERP with student management, attendance, and fee tracking.", 
    price: "₹19,999",
    icon: GraduationCap,
    features: ["Student Management", "Attendance System", "Fee Tracking", "Report Cards"],
    color: "from-violet-500 to-purple-600"
  },
  { 
    title: "Restaurant Website", 
    type: "Food & Beverage", 
    desc: "Menu showcase, online ordering, table reservations, and delivery tracking.", 
    price: "₹9,999",
    icon: UtensilsCrossed,
    features: ["Online Ordering", "Table Reservations", "Menu Management", "Delivery Tracking"],
    color: "from-orange-500 to-red-500"
  },
  { 
    title: "Portfolio Website", 
    type: "Personal", 
    desc: "Stunning portfolio to showcase your work with blog and contact features.", 
    price: "₹6,999",
    icon: Briefcase,
    features: ["Project Showcase", "Blog Section", "Contact Form", "Responsive Design"],
    color: "from-cyan-500 to-blue-500"
  },
  { 
    title: "Business Website", 
    type: "Corporate", 
    desc: "Professional corporate website with team, services, and client testimonials.", 
    price: "₹11,999",
    icon: Globe,
    features: ["Team Section", "Service Pages", "Testimonials", "SEO Optimized"],
    color: "from-slate-600 to-slate-800"
  },
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
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Projects & Products</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Explore our ready-to-deploy solutions and successful client projects
            </p>
          </div>
        </ScrollReveal>

        {/* Ready to Sell - Dark themed section */}
        <div className="bg-foreground rounded-2xl p-8 md:p-12 mb-16">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">
                READY TO LAUNCH
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-background">
                Ready to Sell Websites
              </h3>
              <p className="text-background/60 mt-2">Pre-built, tested, and ready to deploy for your business</p>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {readyToSell.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="bg-background/5 backdrop-blur-sm border border-background/10 rounded-xl overflow-hidden group hover:bg-background/10 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  {/* Gradient header */}
                  <div className={`h-36 bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                    <item.icon className="w-16 h-16 text-white/90" />
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-white">{item.type}</span>
                    </div>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-heading font-bold text-background text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-background/60 mb-4 flex-1">{item.desc}</p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.features.map((f) => (
                        <span key={f} className="text-[10px] font-medium text-background/50 bg-background/10 rounded px-2 py-0.5">
                          {f}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-background/10">
                      <span className="font-heading font-bold text-xl text-primary">{item.price}</span>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-background/20 text-background hover:bg-background/10 gap-1">
                          <Eye className="w-3.5 h-3.5" /> Demo
                        </Button>
                        <Button size="sm" className="gap-1">
                          <ShoppingBag className="w-3.5 h-3.5" /> Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Client Projects */}
        <ScrollReveal>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Delivered Client Projects</h3>
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
