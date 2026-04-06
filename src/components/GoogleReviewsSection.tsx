import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const GoogleReviewsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-narrow mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <img 
                src="https://www.gstatic.com/images/branding/product/2x/maps_2020q4_48dp.png" 
                alt="Google" 
                className="w-5 h-5"
              />
              Google Reviews
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              See What Our Clients Say on Google
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Read authentic reviews from our clients on Google Maps.
            </p>
          </div>
        </ScrollReveal>

        {/* Google Reviews Embed Widget */}
        <ScrollReveal delay={0.2}>
          <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4 text-center">
              NetWave Digital Reviews
            </h3>
            {/* Google Maps Reviews Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.242887482058!2d86.0531462753877!3d23.667270478727108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f43dcb6e1c120b%3A0x7b67502f2c4651f7!2sNetWave%20Digital%20%E2%80%93%20Web%20Development%20%26%20Software%20Company!5e0!3m2!1sen!2sin!4v1772216142762!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NetWave Digital Reviews - Google Maps"
              className="w-full"
            />
          </div>
        </ScrollReveal>

        {/* Google Reviews Link */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-8">
            <a 
              href="https://share.google/KkldlsTWdVTW5pZRH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <img 
                src="https://www.gstatic.com/images/branding/product/2x/maps_2020q4_48dp.png" 
                alt="Google Maps" 
                className="w-5 h-5"
              />
              Write a Review
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;

