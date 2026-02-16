import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fuel, Gauge, Truck, ShieldCheck, BadgeDollarSign, Clock } from "lucide-react";
import heroCarImg from "@/assets/hero-car.jpg";
import { vehicles, brands, bodyTypes } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "96K+", label: "Instagram Followers" },
  { value: "20+", label: "Years in Miami" },
  { value: "500+", label: "Rentals Completed" },
];

const valueProps = [
  { icon: Fuel, title: "Free Gas" },
  { icon: Gauge, title: "Unlimited Miles" },
  { icon: Truck, title: "Free Delivery" },
  { icon: ShieldCheck, title: "VIP Concierge" },
  { icon: BadgeDollarSign, title: "Multiple Discounts" },
  { icon: Clock, title: "24/7 Support" },
];

const Index = () => {
  const [activeType, setActiveType] = useState("All");

  const filtered = activeType === "All"
    ? vehicles
    : vehicles.filter((v) => v.type === activeType);

  return (
    <main>
      {/* Compact Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCarImg} alt="Exotic car Miami" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-12 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-white"
          >
            Exotic Rentals
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-gold mb-4"
          >
            Redefined.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/70 mb-6 max-w-md"
          >
            Miami's most trusted fleet since 2008. No deposit. No hassle. Just drive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 text-[13px] text-white/50"
          >
            {stats.map((s, i) => (
              <span key={s.label}>
                <span className="text-white font-semibold">{s.value}</span> {s.label}
                {i < stats.length - 1 && <span className="ml-6">·</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Tabs + Fleet Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-1 p-1 bg-card rounded-full border border-border">
            {bodyTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeType === type
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <Link
            to="/fleet"
            className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            View All →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((v, i) => (
            <VehicleCard key={v.id} vehicle={v} index={i} />
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-card py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-14">
          {valueProps.map((vp) => (
            <ScrollReveal key={vp.title}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center">
                  <vp.icon size={26} className="text-gold" />
                </div>
                <span className="text-sm font-medium text-gold italic">{vp.title}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 text-center">
        <ScrollReveal>
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to ride?</h2>
          <p className="text-muted-foreground mb-6">Book your dream car in under 2 minutes.</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-3 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Reserve Now
            </Link>
            <a
              href="tel:+13058902051"
              className="px-7 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-muted-foreground transition-colors"
            >
              Call (305) 890-2051
            </a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
};

export default Index;
