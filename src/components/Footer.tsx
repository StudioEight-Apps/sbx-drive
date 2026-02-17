import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Brand */}
      <div>
        <div className="text-xl font-bold text-foreground mb-2">SBX</div>
        <p className="text-xs text-sbx-tertiary">South Beach Exotic Rentals</p>
        <p className="text-xs text-sbx-tertiary">Miami, FL · Est. 2008</p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {[
            { to: "/fleet", label: "Fleet" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <a href="tel:+13058902051" className="hover:text-foreground transition-colors">(305) 890-2051</a>
          <a href="mailto:info@sbxrentals.com" className="hover:text-foreground transition-colors">info@sbxrentals.com</a>
          <span>7620 NW 25th St Unit 2, Miami FL 33122</span>
        </div>
      </div>
    </div>

    <div className="border-t border-border py-6 text-center">
      <p className="text-xs text-sbx-tertiary">© 2026 SBX. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-3">
        {["Instagram", "Facebook", "Twitter"].map((s) => (
          <a key={s} href="#" className="text-xs text-sbx-tertiary hover:text-foreground transition-colors">{s}</a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
