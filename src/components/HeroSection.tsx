import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-illustration.png";
import { Star, Globe, Smartphone, Code, ShoppingCart, BarChart3, Palette, ArrowRight, Zap, Shield, Utensils, Building2, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Code, text: "Custom Software Development" },
  { icon: Globe, text: "Professional Websites" },
  { icon: Smartphone, text: "Mobile Apps (Android & iOS)" },
  { icon: ShoppingCart, text: "E-Commerce Solutions" },
  { icon: BarChart3, text: "Digital Marketing & SEO" },
  { icon: Palette, text: "UI/UX Design" },
];

// Demo projects data for the animated carousel
const demoProjects = [
  {
    name: "Restaurant",
    url: "https://restaurant-netwavedigital.netlify.app/",
    icon: Utensils,
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Real Estate",
    url: "https://realestate-netwavedigital.netlify.app/",
    icon: Building2,
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "E-Commerce",
    url: "https://ecommerce-netwavedigital.netlify.app/",
    icon: ShoppingCart,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Tuition",
    url: "https://tution-netwavedigital.netlify.app/",
    icon: GraduationCap,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Event Mgmt - SOLD",
    url: "https://sagartenthouse.netlify.app",
    icon: Globe,
    color: "from-rose-500 to-pink-500",
    sold: true,
    client: "Sagar Tent House"
  },
];

const HeroSection = () => {
  const [currentDemo, setCurrentDemo] = useState(0);

  // Auto-rotate demo projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demoProjects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center pt-20 pb-16" style={{ background: 'linear-gradient(135deg, hsl(220 20% 8%) 0%, hsl(220 25% 12%) 50%, hsl(224 30% 10%) 100%)' }}>
      <div className="container-narrow mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-5">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">Build Your Digital Presence with</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">Expert Developers</span>
              </h1>

              <p className="text-base text-slate-400 max-w-lg">
                NetWave Digital delivers world-class software development, web design, mobile apps, and digital marketing.
              </p>

              {/* Pricing Highlight */}
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-base text-white">
                      Website Development from ₹5,999
                    </p>
                    <p className="text-xs text-slate-400">SEO-optimized, mobile-responsive</p>
                  </div>
                </div>
              </div>

              {/* Service Highlights with Icons */}
              <ul className="grid grid-cols-2 gap-2">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-6 h-6 rounded-md bg-slate-800/60 flex items-center justify-center border border-slate-700/50">
                      <h.icon className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                    {h.text}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-lg shadow-violet-600/25 border-0">
                  <Link to="/contact">
                    Get Free Quote <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">
                  <Link to="/work">View Our Work</Link>
                </Button>
              </div>

              {/* Trust Line */}
              <p className="text-sm text-slate-500 flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold text-slate-300">4.9/5</span>
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">Based in Bokaro, Jharkhand</span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">Serving PAN India</span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative">
              <img
                src={heroImage}
                alt="NetWave Digital - Software Development, Web Design, Mobile App Development Company"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl shadow-black/50"
                loading="eager"
              />
              
              {/* Floating Icons */}
              <div className="absolute -left-4 top-1/4 bg-slate-800/90 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">100+</p>
                    <p className="text-[10px] text-slate-400">Projects</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/3 bg-slate-800/90 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">99%</p>
                    <p className="text-[10px] text-slate-400">Satisfaction</p>
                  </div>
                </div>
              </div>
              
              {/* Animated Demo Projects Carousel */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-72">
                <div className="relative">
                  {demoProjects.map((project, index) => {
                    const isActive = index === currentDemo;
                    const isNext = index === (currentDemo + 1) % demoProjects.length;
                    
                    return (
                      <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`absolute left-0 w-full bg-gradient-to-r ${project.color} rounded-xl p-4 shadow-2xl transition-all duration-500 ${
                          isActive 
                            ? 'opacity-100 translate-x-0 scale-105 z-20 shadow-2xl ring-2 ring-emerald-400/30' 
                            : isNext 
                              ? 'opacity-50 translate-x-4 scale-95 z-10' 
                              : 'opacity-20 -translate-x-4 scale-90 z-0'
                        } hover:scale-105 hover:shadow-2xl hover:z-30 hover:opacity-100 ${project.sold ? 'ring-2 ring-emerald-400/50 animate-pulse' : ''}`}
                        style={{ 
                          transform: isActive ? 'translateX(0) scale(1)' : isNext ? 'translateX(20px) scale(0.95)' : 'translateX(-20px) scale(0.95)',
                          opacity: isActive ? 1 : 0,
                          pointerEvents: isActive ? 'auto' : 'none'
                        }}
                      >
                        {project.sold && (
                          <div className="absolute top-1 right-1 bg-emerald-500/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md flex items-center gap-0.5">
                            SOLD ✓ Sagar Tent House
                          </div>
                        )}
                      
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg ${project.sold ? 'ring-2 ring-white/30 shadow-emerald-500/20' : ''}">
                              <project.icon className="w-5 h-5 text-white ${project.sold ? 'drop-shadow-lg' : ''}" />
                            </div>
                          <div>
                            <p className="text-xs font-semibold text-white">Live Demo</p>
                            <p className="text-[10px] text-white/80">{project.name} Website</p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                  
                  {/* Carousel Indicators */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {demoProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentDemo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentDemo ? 'w-6 bg-orange-400' : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                        aria-label={`View ${demoProjects[index].name} demo`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

