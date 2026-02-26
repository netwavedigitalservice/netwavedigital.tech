const footerLinks = {
  "Quick Links": ["Home", "About", "Services", "Work", "Contact"],
  "Services": ["Web Development", "Mobile Apps", "E-Commerce", "IT Consulting", "UI/UX Design"],
};

const Footer = () => (
  <footer className="bg-secondary py-12 px-4">
    <div className="container-narrow mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">
            Net<span className="text-primary">Wave</span> Digital
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Empowering businesses with smart digital solutions.
          </p>
          <div className="flex gap-3">
            {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">{s}</a>
            ))}
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, "")}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+91 7481947649</li>
            <li>netwavedigitalservice@gmail.com</li>
            <li>Bokaro Steel City, Jharkhand</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">© 2026 NetWave Digital. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
