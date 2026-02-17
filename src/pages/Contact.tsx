import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(305) 890-2051", href: "tel:+13058902051" },
  { icon: Mail, label: "Email", value: "info@sbxrentals.com", href: "mailto:info@sbxrentals.com" },
  { icon: MapPin, label: "Address", value: "7620 NW 25th St Unit 2, Miami FL 33122" },
  { icon: Clock, label: "Hours", value: "Mon–Sun, 9AM – 12AM" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <ScrollReveal>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-3">Get in Touch</h1>
            <p className="text-[15px] text-muted-foreground mb-10">
              Ready to ride? Reach out and we'll have your car waiting.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="sbx-card p-4 flex items-center gap-4 hover:transform-none">
                  <item.icon size={18} className="text-muted-foreground shrink-0" />
                  <div>
                    <div className="sbx-label mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-foreground hover:text-gold transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            {["Name", "Email", "Phone"].map((field) => (
              <input
                key={field}
                type={field === "Email" ? "email" : field === "Phone" ? "tel" : "text"}
                placeholder={field}
                required={field !== "Phone"}
                className="w-full bg-background border border-border rounded-[10px] px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-foreground transition-colors"
              />
            ))}
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="w-full bg-background border border-border rounded-[10px] px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-foreground transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3.5 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-all duration-200"
            >
              {submitted ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
};

export default Contact;
