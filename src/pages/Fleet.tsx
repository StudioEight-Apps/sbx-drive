import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles, brands, bodyTypes } from "@/data/vehicles";
import VehicleCard from "@/components/VehicleCard";

const Fleet = () => {
  const [activeBrand, setActiveBrand] = useState("All Brands");
  const [activeType, setActiveType] = useState("All");

  const filtered = vehicles.filter((v) => {
    const brandMatch = activeBrand === "All Brands" || v.brand === activeBrand;
    const typeMatch = activeType === "All" || v.type === activeType;
    return brandMatch && typeMatch;
  });

  return (
    <main className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">The Fleet</h1>
          <p className="text-base text-muted-foreground">Browse our collection. Book in minutes.</p>
        </div>

        {/* Brand Filter */}
        <div className="flex justify-center gap-6 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`relative text-sm font-medium whitespace-nowrap pb-2 transition-colors duration-200 ${
                activeBrand === brand
                  ? "text-foreground"
                  : "text-sbx-tertiary hover:text-muted-foreground"
              }`}
            >
              {brand}
              {activeBrand === brand && (
                <motion.div
                  layoutId="brand-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Body Type Pills */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {bodyTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`sbx-pill ${
                activeType === type ? "sbx-pill-active" : "sbx-pill-inactive"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand + activeType}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((v, i) => (
              <VehicleCard key={v.id} vehicle={v} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No vehicles match your filters.
          </div>
        )}
      </div>
    </main>
  );
};

export default Fleet;
