import { Car, Ship, Plane, Home } from "lucide-react";
import miamiImg from "@/assets/miami-about.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "20+", label: "Years in Miami" },
  { value: "96K+", label: "Instagram Followers" },
  { value: "500+", label: "Completed Rentals" },
  { value: "24/7", label: "Concierge Support" },
];

const services = [
  { icon: Car, title: "Exotic Cars", desc: "Lamborghini, Ferrari, Rolls Royce and more" },
  { icon: Ship, title: "Yachts", desc: "Private luxury yachts for Miami waterways" },
  { icon: Plane, title: "Aircraft", desc: "Private jet and helicopter charters" },
  { icon: Home, title: "Mansions", desc: "Luxury waterfront estate rentals" },
];

const About = () => (
  <main className="pt-16">
    {/* Hero Banner */}
    <div className="relative h-[300px] overflow-hidden">
      <img src={miamiImg} alt="Miami skyline" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">The SBX Story</h1>
        <p className="text-base text-muted-foreground">Miami's most trusted exotic fleet since 2008</p>
      </div>
    </div>

    {/* Content */}
    <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-foreground mb-4">Built on Trust</h2>
        <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
          <p>
            Founded by Juan Caballero in 2008, South Beach Exotic Rentals began with a simple idea: make the world's most exclusive vehicles accessible to anyone visiting Miami. What started as a small fleet has grown into one of the city's most recognized luxury rental brands.
          </p>
          <p>
            With over 96,000 Instagram followers and hundreds of five-star reviews, SBX has built a reputation on reliability, transparency, and an obsessive attention to detail. Every vehicle is maintained to showroom standards. Every rental is backed by our concierge team.
          </p>
          <p>
            Today, SBX offers more than exotic cars. Our services extend to private yachts, aircraft charters, and waterfront mansion rentals — everything you need to experience Miami at its finest.
          </p>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="rounded-2xl overflow-hidden h-80 bg-sbx-elevated">
          <img src={miamiImg} alt="SBX Fleet" className="w-full h-full object-cover" />
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
