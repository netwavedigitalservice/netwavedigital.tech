import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "How much does a website cost?", a: "Website costs vary based on complexity and features. A basic website starts from ₹6,999, while custom enterprise solutions are quoted based on requirements. Contact us for a free consultation and detailed estimate." },
  { q: "How long does development take?", a: "A typical website takes 2-4 weeks, while complex applications may take 2-6 months. We provide a detailed timeline during the planning phase and keep you updated throughout." },
  { q: "Do you provide post-launch support?", a: "Yes! We offer comprehensive post-launch support including bug fixes, updates, performance monitoring, and feature enhancements. Our support packages are flexible to fit your needs." },
  { q: "Can I hire dedicated developers?", a: "Absolutely. We offer dedicated development teams, CTO-as-a-Service, and CMO-as-a-Service. Scale your team with our skilled professionals on a monthly or project basis." },
  { q: "What technologies do you specialize in?", a: "We specialize in React, Angular, Vue.js, Node.js, SpringBoot, Laravel, Flutter, React Native, and more. We choose the best technology stack based on your project requirements." },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card rounded-xl shadow-card px-6 border-none"
            >
              <AccordionTrigger className="font-heading font-medium text-foreground text-left hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ScrollReveal>
    </div>
  </section>
);

export default FAQSection;
