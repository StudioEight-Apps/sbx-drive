import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Clock, Gauge, Phone } from "lucide-react";
import heroCarImg from "@/assets/hero-car.jpg";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "96K+", label: "Instagram Followers" },
  { value: "17", label: "Years in Miami" },
  { value: "500+", label: "Rentals Completed" },
];

const valueProps = [
  { icon: Truck, title: "No Deposit Required", desc: "Drive off with zero upfront deposit" },
  { icon: Truck, title: "Free Delivery", desc: "We bring the car to you anywhere in Miami" },
  { icon: Gauge, title: "Unlimited Miles", desc: "No mileage caps on any rental" },
  { icon: Phone, title: "24/7 Concierge", desc: "Round-the-clock support whenever you need" },
];

const Index = () => {
  const featured = vehicles.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCarImg} alt="Exotic car Miami" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-foreground"
            >
              Exotic Rentals
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-gold mb-6"
            >
              Redefined.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Miami's most trusted fleet since 2008. No deposit. No hassle. Just drive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/fleet"
                className="px-7 py-3 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200"
              >
                Browse Fleet
              </Link>
              <a
                href="tel:+13058902051"
                className="px-7 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-muted-foreground transition-colors duration-200"
              >
                Call (305) 890-2051
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <ScrollReveal>
        <div className="max-w-4xl mx-auto px-6 py-12 flex justify-center gap-8 md:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground font-semibold">{s.value}</span> {s.label}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured Fleet */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-foreground mb-10">The Fleet</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </div>
        <ScrollReveal className="mt-8 text-center">
          <Link to="/fleet" className="text-sm font-semibold text-foreground hover:underline">
            View All Vehicles →
          </Link>
        </ScrollReveal>
      </section>

      {/* Value Props */}
      <section className="bg-card py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((vp) => (
            <ScrollReveal key={vp.title}>
              <div className="text-center">
                <vp.icon size={24} className="mx-auto mb-3 text-muted-foreground" />
                <h3 className="text-sm font-semibold text-foreground mb-1">{vp.title}</h3>
                <p className="text-[13px] text-muted-foreground">{vp.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 text-center">
        <ScrollReveal>
          <h2 className="text-[28px] font-bold text-foreground mb-2">Follow the Fleet</h2>
          <p className="text-lg font-medium text-muted-foreground mb-1">@sbxrentals</p>
          <p className="text-[13px] text-muted-foreground mb-6">96,000+ followers</p>
          <a
            href="https://instagram.com/sbxrentals"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-muted-foreground transition-colors duration-200"
          >
            Follow on Instagram
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Index;
