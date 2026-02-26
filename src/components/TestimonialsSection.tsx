import { Star } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  { name: "Rahul Sharma", company: "TechStart Inc.", review: "NetWave Digital delivered our SaaS platform ahead of schedule. Exceptional quality and communication throughout the project." },
  { name: "Priya Patel", company: "GreenMart", review: "Our e-commerce store saw a 200% increase in sales after NetWave redesigned it. Highly recommend their services!" },
  { name: "Amit Kumar", company: "EduLearn", review: "The mobile app they built for us is smooth, fast, and our students love it. Great team to work with." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-section-blue">
    <div className="container-narrow mx-auto">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <div className="bg-card rounded-xl p-6 shadow-card h-full">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-6 italic">"{t.review}"</p>
              <div>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
