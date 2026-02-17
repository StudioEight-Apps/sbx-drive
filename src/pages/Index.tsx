import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Sparkles, Truck, ShieldCheck, BadgeDollarSign, Clock, ArrowDownWideNarrow } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "100K+", label: "Cat Lovers" },
  { value: "9", label: "Lives Per Cat" },
  { value: "2,000+", label: "Purrs Delivered" },
];

const valueProps = [
  { icon: Heart, title: "Free Cuddles" },
  { icon: Sparkles, title: "Unlimited Purrs" },
  { icon: Truck, title: "Free Delivery" },
  { icon: ShieldCheck, title: "VIP Concierge" },
  { icon: BadgeDollarSign, title: "Multiple Discounts" },
  { icon: Clock, title: "24/7 Support" },
];

const bodyTypePills = ["All", "Lap Cat", "Adventure", "Luxury", "Gentle Giant"];
const breedPills = ["All Breeds", "Persian", "Bengal", "Maine Coon", "British Shorthair", "Siamese", "Ragdoll", "Abyssinian", "Scottish Fold"];

const Index = () => {
  const [activeBodyType, setActiveBodyType] = useState("All");
  const [selectedBreed, setSelectedBreed] = useState("All Breeds");
  const [sortHighToLow, setSortHighToLow] = useState(false);

  const filtered = vehicles
    .filter((v) => {
      const bodyMatch = activeBodyType === "All" || v.type === activeBodyType;
      const breedMatch = selectedBreed === "All Breeds" || v.brand === selectedBreed;
      return bodyMatch && breedMatch;
    })
    .sort((a, b) => (sortHighToLow ? b.pricePerDay - a.pricePerDay : 0));

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1920&h=1080&fit=crop" alt="Exotic cat Miami" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/85" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pb-12 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-white"
          >
            Exotic Cats
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-accent mb-4"
          >
            Redefined
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground mb-6 max-w-md"
          >
            Miami's most purrfect clowder since 2008 — No deposit, no hairballs, just cuddles
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center divide-x divide-white/10 w-full max-w-md sm:max-w-none mx-auto"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-4 sm:px-8">
                <span className="text-white font-bold text-base sm:text-lg">{s.value}</span>
                <span className="text-[11px] sm:text-[12px] text-[#A3A3A3] whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Browsing */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        {/* Body Type Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {bodyTypePills.map((type) => (
            <button
              key={type}
              onClick={() => setActiveBodyType(type)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeBodyType === type
                  ? "bg-accent text-black"
                  : "bg-transparent border border-white/15 text-muted-foreground hover:text-foreground"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Breed Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mt-1 scrollbar-hide">
          {breedPills.map((breed) => (
            <button
              key={breed}
              onClick={() => setSelectedBreed(breed)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedBreed === breed
                  ? "bg-accent text-black"
                  : "bg-transparent border border-white/15 text-muted-foreground hover:text-foreground"
              }`}
            >
              {breed}
            </button>
          ))}
        </div>

        {/* Sort + Grid */}
        <div className="flex items-center justify-end mb-4">
          <button
            onClick={() => setSortHighToLow(!sortHighToLow)}
            className={`flex items-center gap-1.5 text-[13px] font-medium transition-colors ${
              sortHighToLow ? "text-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <ArrowDownWideNarrow size={14} />
            Price: High to Low
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.length > 0 ? (
            filtered.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} showBadge={i === 0} />
            ))
          ) : (
            <p className="text-center text-muted-foreground py-12 col-span-full">No cats match your filters.</p>
          )}
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
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to purr?</h2>
          <p className="text-muted-foreground mb-6">Book your dream cat in under 2 minutes.</p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-7 py-3 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Adopt Now
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
