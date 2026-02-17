import { Cat, Ship, Plane, Home } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "9", label: "Lives Per Cat" },
  { value: "96K+", label: "Instagram Followers" },
  { value: "500+", label: "Happy Adoptions" },
  { value: "24/7", label: "Purr Support" },
];

const services = [
  { icon: Cat, title: "Exotic Cats", desc: "Persian, Bengal, Maine Coon and more" },
  { icon: Ship, title: "Cat Yachts", desc: "Luxury catamaran cruises with feline friends" },
  { icon: Plane, title: "Cat Transport", desc: "Private jet and limo cat delivery" },
  { icon: Home, title: "Cat Mansions", desc: "Luxury cat-friendly estate experiences" },
];

const About = () => (
  <main className="pt-16">
    {/* Hero Banner */}
    <div className="relative h-[300px] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1501820488136-72669149e0d4?w=1920&h=800&fit=crop" alt="Cats in Miami" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">The SBX Story</h1>
        <p className="text-base text-muted-foreground">Miami's most purrfect exotic clowder since 2008</p>
      </div>
    </div>

    {/* Content */}
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-foreground mb-4">Built on Trust</h2>
        <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
          <p>
            Founded by Juan Caballero in 2008, South Beach Exotic Cats began with a simple idea: make the world's most exclusive feline companions accessible to anyone visiting Miami. What started as a small clowder has grown into one of the city's most recognized luxury cat brands.
          </p>
          <p>
            With over 96,000 Instagram followers and hundreds of five-star reviews, SBX has built a reputation on reliability, transparency, and an obsessive attention to floof. Every cat is groomed to show standards. Every adoption is backed by our concierge team.
          </p>
          <p>
            Today, SBX offers more than exotic cats. Our services extend to cat-friendly yacht cruises, private transport, and luxury cat mansion experiences — everything you need to experience Miami's finest felines.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="rounded-2xl overflow-hidden h-80 bg-sbx-elevated">
          <img src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop" alt="SBX Cats" className="w-full h-full object-cover" />
        </div>
      </ScrollReveal>
    </section>

    {/* Stats */}
    <section className="bg-card py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s) => (
          <ScrollReveal key={s.label}>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">{s.value}</div>
              <div className="text-[13px] text-sbx-tertiary mt-1">{s.label}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="max-w-7xl mx-auto px-6 py-20">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-foreground text-center mb-12">Our Services</h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <ScrollReveal key={s.title}>
            <div className="sbx-card p-6 text-center hover:transform-none">
              <s.icon size={28} className="mx-auto mb-3 text-muted-foreground" />
              <h3 className="text-base font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-[13px] text-muted-foreground">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  </main>
);

export default About;
