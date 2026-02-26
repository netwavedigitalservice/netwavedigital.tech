import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const footerLinks = {
  "Quick Links": [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Work", to: "/work" },
    { label: "Contact", to: "/contact" },
  ],
  "More": [
    { label: "Technologies", to: "/technologies" },
    { label: "Process", to: "/process" },
    { label: "Testimonials", to: "/testimonials" },
    { label: "FAQ", to: "/faq" },
  ],
};

const Footer = () => (
  <footer className="bg-foreground text-background py-12 px-4">
    <div className="container-narrow mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <img src={logo} alt="NetWave Digital" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm text-background/70 mb-4">
            Empowering businesses with smart digital solutions.
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

        <div>
          <h4 className="font-heading font-semibold text-background text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>+91 7481947649</li>
            <li>netwavedigitalservice@gmail.com</li>
            <li>Bokaro Steel City, Jharkhand</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/20 pt-6 text-center">
        <p className="text-xs text-background/50">© 2026 NetWave Digital. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
