import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  "Quick Links": [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Services", to: "/services" },
    { label: "Our Work", to: "/work" },
    { label: "Contact Us", to: "/contact" },
  ],
  "Services": [
    { label: "Software Development", to: "/services" },
    { label: "Web Development", to: "/services" },
    { label: "App Development", to: "/services" },
    { label: "Digital Marketing", to: "/services" },
    { label: "E-Commerce Solutions", to: "/services" },
  ],
  "Resources": [
    { label: "Technologies", to: "/technologies" },
    { label: "Our Process", to: "/process" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "FAQ", to: "/faq" },
  ],
};

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-4">
    <div className="container-narrow mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
        <div className="lg:col-span-2">
          <img src={logo} alt="NetWave Digital - Software Development Company" className="h-14 mb-4 brightness-0 invert" />
          <p className="text-sm text-background/70 mb-3">
            NetWave Digital is a leading software development, web design, mobile app development, and digital marketing company based in Bokaro Steel City, Jharkhand, India.
          </p>
          <p className="text-xs text-background/50 mb-4">
            Custom Software · Web Development · App Development · SEO · Digital Marketing
          </p>
          <div className="flex gap-3">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-background/50 hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-background text-sm mb-3">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-background/50">© 2026 NetWave Digital. All Rights Reserved. | Software Development Company in India</p>
        <div className="flex gap-4">
          <a href="tel:+917481947649" className="text-xs text-background/50 hover:text-primary transition-colors">+91 7481947649</a>
          <a href="mailto:netwavedigitalservice@gmail.com" className="text-xs text-background/50 hover:text-primary transition-colors">netwavedigitalservice@gmail.com</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
