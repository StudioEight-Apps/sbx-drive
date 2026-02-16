import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fuel, Gauge, Truck, ShieldCheck, BadgeDollarSign, Clock, Car, LayoutGrid } from "lucide-react";
import heroCarImg from "@/assets/hero-car.jpg";
import { vehicles } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import ferrariLogo from "@/assets/brands/ferrari.svg";
import lamborghiniLogo from "@/assets/brands/lamborghini.svg";
import mclarenLogo from "@/assets/brands/mclaren.svg";
import mercedesLogo from "@/assets/brands/mercedes.svg";
import rollsroyceLogo from "@/assets/brands/rollsroyce.svg";
import bentleyLogo from "@/assets/brands/bentley.svg";
import porscheLogo from "@/assets/brands/porsche.svg";
import chevroletLogo from "@/assets/brands/chevrolet.svg";

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

const brandData = [
  { name: "Lamborghini", logo: lamborghiniLogo },
  { name: "Ferrari", logo: ferrariLogo },
  { name: "McLaren", logo: mclarenLogo },
  { name: "Rolls Royce", logo: rollsroyceLogo },
  { name: "Bentley", logo: bentleyLogo },
  { name: "Porsche", logo: porscheLogo },
  { name: "Mercedes-Benz", logo: mercedesLogo },
  { name: "Chevrolet", logo: chevroletLogo },
];

const bodyStyles = ["SUV", "Sedan", "Coupe", "Convertible"];

const Index = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedBodyStyle, setSelectedBodyStyle] = useState<string | null>(null);

  const filtered = vehicles.filter((v) => {
    const brandMatch = !selectedBrand || v.brand === selectedBrand;
    const bodyMatch = !selectedBodyStyle || v.type === selectedBodyStyle;
    return brandMatch && bodyMatch;
  });

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
            Redefined.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground mb-6 max-w-md"
          >
            Miami's most trusted fleet since 2008. No deposit. No hassle. Just drive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 text-[13px] text-muted-foreground"
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

      {/* Fleet Browsing */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        {/* Filter Pills */}
        <div className="flex items-center gap-3 pb-8">
          {/* Brand Pill */}
          <Popover>
            <PopoverTrigger asChild>
              <button className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-200 border ${
                selectedBrand
                  ? "bg-card border-accent text-foreground"
                  : "bg-card border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
              }`}>
                <Car size={14} />
                {selectedBrand || "Brand"}
              </button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="start" sideOffset={8} className="w-64 bg-[#1A1A1A] border-white/10 rounded-xl shadow-2xl p-4">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Select Brand</h4>
              <button
                onClick={() => setSelectedBrand(null)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm mb-2 transition-colors ${
                  !selectedBrand ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                All Brands
              </button>
              <div className="grid grid-cols-2 gap-2">
                {brandData.map((brand) => (
                  <button
                    key={brand.name}
                    onClick={() => setSelectedBrand(brand.name)}
                    className={`flex flex-col items-center gap-1.5 p-2.5 rounded-lg transition-all duration-200 ${
                      selectedBrand === brand.name
                        ? "bg-accent/10 border border-accent"
                        : "bg-white/5 border border-transparent hover:border-white/10"
                    }`}
                  >
                    <img src={brand.logo} alt={brand.name} className="w-8 h-8 object-contain" />
                    <span className="text-[11px] font-medium text-foreground leading-tight text-center">{brand.name}</span>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Body Style Pill */}
          <Popover>
            <PopoverTrigger asChild>
              <button className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all duration-200 border ${
                selectedBodyStyle
                  ? "bg-card border-accent text-foreground"
                  : "bg-card border-white/10 text-muted-foreground hover:text-foreground hover:border-white/20"
              }`}>
                <LayoutGrid size={14} />
                {selectedBodyStyle || "Body Style"}
              </button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="start" sideOffset={8} className="w-52 bg-[#1A1A1A] border-white/10 rounded-xl shadow-2xl p-4">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Body Style</h4>
              <RadioGroup
                value={selectedBodyStyle || ""}
                onValueChange={(val) => setSelectedBodyStyle(val || null)}
              >
                <button
                  onClick={() => setSelectedBodyStyle(null)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    !selectedBodyStyle ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <div className="w-3.5 h-3.5 rounded-full border border-current flex items-center justify-center">
                    {!selectedBodyStyle && <div className="w-2 h-2 rounded-full bg-current" />}
                  </div>
                  <span>All</span>
                </button>
                {bodyStyles.map((style) => (
                  <label
                    key={style}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                      selectedBodyStyle === style ? "bg-accent/10 text-accent" : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    }`}
                  >
                    <RadioGroupItem value={style} className="border-current text-current h-3.5 w-3.5" />
                    <span>{style}</span>
                  </label>
                ))}
              </RadioGroup>
            </PopoverContent>
          </Popover>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.length > 0 ? (
            filtered.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground py-12">No vehicles match your filters.</p>
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
