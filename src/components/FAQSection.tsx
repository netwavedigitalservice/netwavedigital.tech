import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "How much does custom software development cost?", a: "Custom software development costs depend on complexity, features, and technology stack. A basic website starts from ₹6,999, mobile apps from ₹19,999, and enterprise software solutions are quoted after requirement analysis. Contact NetWave Digital for a free consultation and detailed project estimate." },
  { q: "How long does website or app development take?", a: "A typical business website takes 2-4 weeks, e-commerce stores 3-6 weeks, and complex mobile apps or custom software projects may take 2-6 months. We follow agile development methodology and provide detailed timelines during the planning phase." },
  { q: "Do you provide post-launch support and maintenance?", a: "Yes! NetWave Digital offers comprehensive post-launch support including bug fixes, security updates, performance optimization, server monitoring, and feature enhancements. Our maintenance packages are flexible to fit businesses of all sizes." },
  { q: "Can I hire dedicated developers from NetWave Digital?", a: "Absolutely. We offer dedicated development teams, CTO-as-a-Service, and CMO-as-a-Service for startups and enterprises. Scale your team with our skilled React, Flutter, Node.js, and full-stack developers on a monthly or project basis." },
  { q: "What technologies does NetWave Digital specialize in?", a: "We specialize in React.js, Angular, Vue.js, Node.js, SpringBoot, Laravel, Flutter, React Native, Python, AWS, and more. We choose the best technology stack based on your project requirements, budget, and scalability needs." },
  { q: "Do you offer digital marketing and SEO services?", a: "Yes! NetWave Digital provides complete digital marketing services including SEO (Search Engine Optimization), social media marketing, Google Ads, content marketing, and email marketing to help your business grow online and rank higher on search engines." },
  { q: "Can you build an e-commerce website for my business?", a: "Yes, we build professional e-commerce websites using Shopify, WooCommerce, Magento, and custom solutions. Our online stores come with payment gateway integration, inventory management, order tracking, and SEO optimization to maximize sales." },
  { q: "Where is NetWave Digital located?", a: "NetWave Digital is based in Bokaro Steel City, Jharkhand, India. We serve clients across India and globally, offering remote software development, web development, and IT consulting services." },
];

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto max-w-3xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Frequently Asked Questions</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Common Questions About Software Development Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Get answers to common questions about our custom software development, web design, mobile app development, and digital marketing services.
          </p>
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />
    </div>
  </section>
);

export default FAQSection;
