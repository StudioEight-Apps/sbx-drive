import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fuel, Gauge, Truck, ShieldCheck, BadgeDollarSign, Clock, ArrowDownWideNarrow, ChevronDown } from "lucide-react";
import heroCarImg from "@/assets/hero-car.jpg";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import lamborghiniLogo from "@/assets/brands/lamborghini.svg";
import ferrariLogo from "@/assets/brands/ferrari.svg";
import mclarenLogo from "@/assets/brands/mclaren.svg";
import rollsroyceLogo from "@/assets/brands/rollsroyce.svg";
import bentleyLogo from "@/assets/brands/bentley.svg";
import porscheLogo from "@/assets/brands/porsche.svg";

const stats = [
  { value: "100K+", label: "Followers" },
  { value: "20+", label: "Years in Miami" },
  { value: "2,000+", label: "Trips Completed" },
];

const valueProps = [
  { icon: Fuel, title: "Free Gas" },
  { icon: Gauge, title: "Unlimited Miles" },
  { icon: Truck, title: "Free Delivery" },
  { icon: ShieldCheck, title: "VIP Concierge" },
  { icon: BadgeDollarSign, title: "Multiple Discounts" },
  { icon: Clock, title: "24/7 Support" },
];

const bodyTypePills = ["All", "SUV", "Coupe", "Convertible", "Sedan"];
const brandPills = ["All Brands", "Lamborghini", "Ferrari", "McLaren", "Rolls Royce", "Bentley", "Porsche", "Mercedes-Benz", "Chevrolet"];

const brandLogos = [
  { name: "Lamborghini", logo: lamborghiniLogo },
  { name: "Ferrari", logo: ferrariLogo },
  { name: "McLaren", logo: mclarenLogo },
  { name: "Rolls Royce", logo: rollsroyceLogo },
  { name: "Bentley", logo: bentleyLogo },
  { name: "Porsche", logo: porscheLogo },
];

const Index = () => {
  const [activeBodyType, setActiveBodyType] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [sortHighToLow, setSortHighToLow] = useState(false);

  const filtered = vehicles
    .filter((v) => {
      const bodyMatch = activeBodyType === "All" || v.type === activeBodyType;
      const brandMatch = selectedBrand === "All Brands" || v.brand === selectedBrand;
      return bodyMatch && brandMatch;
    })
    .sort((a, b) => (sortHighToLow ? b.pricePerDay - a.pricePerDay : 0));

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroCarImg} alt="Exotic car Miami" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/85" />
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
            Miami's most trusted fleet since 2008. Miami's most trusted fleet since 2008 — No deposit, no hassle, just drive
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center divide-x divide-white/10 w-full"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-8">
                <span className="text-white font-bold text-lg">{s.value}</span>
                <span className="text-[12px] text-[#A3A3A3] whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Browsing */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-12">
        {/* Body Type Pills + Brand Popover */}
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

        {/* Brand Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mt-1 scrollbar-hide">
          {brandPills.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedBrand === brand
                  ? "bg-accent text-black"
                  : "bg-transparent border border-white/15 text-muted-foreground hover:text-foreground"
              }`}
            >
              {brand}
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
            <p className="text-center text-muted-foreground py-12 col-span-full">No vehicles match your filters.</p>
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
