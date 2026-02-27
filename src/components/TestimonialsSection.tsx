import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  { name: "Rahul Sharma", company: "TechStart Inc.", role: "CEO", review: "NetWave Digital delivered our SaaS platform ahead of schedule with exceptional code quality. Their custom software development expertise and clear communication made the entire project seamless. Highly recommend for any software project!" },
  { name: "Priya Patel", company: "GreenMart", role: "Founder", review: "Our e-commerce website saw a 200% increase in sales after NetWave Digital redesigned it with Shopify. Their web development and digital marketing skills transformed our online business completely." },
  { name: "Amit Kumar", company: "EduLearn", role: "CTO", review: "The Flutter mobile app they built for our EdTech platform is smooth, fast, and our students love it. NetWave Digital's app development team is incredibly talented and professional." },
  { name: "Sneha Gupta", company: "HealthFirst", role: "Director", review: "NetWave Digital built our patient management system with Laravel and Vue.js. The software is secure, scalable, and has streamlined our entire hospital operations. Outstanding IT consulting!" },
  { name: "Vikash Singh", company: "BuildSpace", role: "Managing Director", review: "The real estate website with virtual tour integration exceeded our expectations. Their full-stack web development expertise and attention to detail is remarkable." },
  { name: "Neha Verma", company: "FoodieHub", role: "Co-Founder", review: "Our food delivery app built with Flutter and SpringBoot handles thousands of orders daily without a glitch. NetWave Digital truly delivers enterprise-grade mobile app development." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-section-blue">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Client Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            What Our Clients Say About Our Software Development Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Don't just take our word for it — hear from businesses who trust NetWave Digital for their web development, app development, and digital marketing needs.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.08}>
            <div className="bg-card rounded-xl p-6 shadow-card h-full flex flex-col">
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-6 italic flex-1">"{t.review}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
