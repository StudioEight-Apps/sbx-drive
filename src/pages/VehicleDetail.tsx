import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronLeft, ChevronRight, Check, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { vehicles } from "@/data/vehicles";

const inclusions = ["Free Delivery", "Unlimited Miles", "Full Insurance", "24/7 Support", "Airport Pickup", "Free Gas"];

const VehicleDetail = () => {
  const { slug } = useParams();
  const vehicle = vehicles.find((v) => v.slug === slug);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  if (!vehicle) {
    return (
      <main className="pt-24 pb-20 text-center">
        <p className="text-muted-foreground">Vehicle not found.</p>
        <Link to="/fleet" className="text-primary mt-4 inline-block">Back to Fleet</Link>
      </main>
    );
  }

  // Use same image 4 times as gallery placeholders
  const photos = [vehicle.image, vehicle.image, vehicle.image, vehicle.image];

  const specs = [
    { value: `${vehicle.hp}`, label: "HP" },
    { value: vehicle.zeroToSixty, label: "0-60" },
    { value: vehicle.topSpeed, label: "TOP SPEED" },
    { value: `${vehicle.seats}`, label: "SEATS" },
  ];

  return (
    <main className="pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Gallery */}
        <div className="relative rounded-2xl overflow-hidden h-[280px] md:h-[400px] mb-4 group">
          <AnimatePresence mode="wait">
            <motion.img
              key={photoIndex}
              src={photos[photoIndex]}
              alt={vehicle.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Nav arrows */}
          <button
            onClick={() => setPhotoIndex((i) => (i - 1 + photos.length) % photos.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full frosted-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={18} className="text-foreground" />
          </button>
          <button
            onClick={() => setPhotoIndex((i) => (i + 1) % photos.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full frosted-glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={18} className="text-foreground" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 right-4 frosted-glass px-3 py-1 rounded-full text-xs font-medium text-foreground">
            {photoIndex + 1} / {photos.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mb-10">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setPhotoIndex(i)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                i === photoIndex ? "border-foreground" : "border-transparent"
              }`}
            >
              <img src={p} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{vehicle.name}</h1>
            <p className="text-[15px] text-muted-foreground mb-3">{vehicle.type} · {vehicle.brand}</p>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                <Star size={14} className="fill-foreground text-foreground" />
                <span className="text-sm font-semibold text-foreground">{vehicle.rating}</span>
              </div>
              {vehicle.noDeposit && (
                <span className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-foreground/[0.08] text-foreground/70">
                  No Deposit
                </span>
              )}
            </div>

            <hr className="border-border mb-6" />

            {/* Specs */}
            <div className="grid grid-cols-4 gap-6 mb-6">
              {specs.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-bold text-foreground">{s.value}</div>
                  <div className="sbx-label mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <hr className="border-border mb-6" />

            <h3 className="text-lg font-semibold text-foreground mb-3">About this vehicle</h3>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6">{vehicle.description}</p>

            <hr className="border-border mb-6" />

            <h3 className="text-lg font-semibold text-foreground mb-4">What's Included</h3>
            <div className="flex flex-wrap gap-2">
              {inclusions.map((item) => (
                <span key={item} className="sbx-pill sbx-pill-inactive cursor-default">{item}</span>
              ))}
            </div>
          </div>

          {/* Right — Booking Card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="sbx-card p-6 hover:transform-none hover:shadow-[0_2px_16px_rgba(0,0,0,0.3)]">
              <div className="mb-6">
                <span className="sbx-label">FROM</span>
                <div className="mt-1">
                  <span className="text-[32px] font-bold text-foreground">${vehicle.pricePerDay.toLocaleString()}</span>
                  <span className="text-sm text-sbx-tertiary">/day</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 bg-background rounded-[10px] border border-border px-4 py-3">
                  <Calendar size={16} className="text-sbx-tertiary" />
                  <input
                    type="text"
                    placeholder="Pickup Date"
                    className="bg-transparent text-foreground placeholder:text-sbx-tertiary text-sm w-full outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 bg-background rounded-[10px] border border-border px-4 py-3">
                  <Calendar size={16} className="text-sbx-tertiary" />
                  <input
                    type="text"
                    placeholder="Return Date"
                    className="bg-transparent text-foreground placeholder:text-sbx-tertiary text-sm w-full outline-none"
                  />
                </div>
                <div className="flex items-center gap-3 bg-background rounded-[10px] border border-border px-4 py-3">
                  <MapPin size={16} className="text-sbx-tertiary" />
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    defaultValue="Miami, FL"
                    className="bg-transparent text-foreground placeholder:text-sbx-tertiary text-sm w-full outline-none"
                  />
                </div>
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="w-full py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-[hsl(var(--sbx-accent-hover))] transition-all duration-200 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
              >
                Request Booking
              </button>

              <p className="text-center text-[13px] text-sbx-tertiary mt-4">Or call (305) 890-2051</p>
              <p className="text-center text-xs text-sbx-tertiary mt-1">No deposit required · Free cancellation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-3xl p-8 max-w-md w-full border border-border shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center">
                  <Check size={28} className="text-primary" />
                </div>
              </div>
              <h2 className="text-[22px] font-bold text-foreground text-center mb-2">Booking Requested</h2>
              <p className="text-sm text-muted-foreground text-center mb-6">
                We'll confirm your {vehicle.name} within the hour.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-[hsl(var(--sbx-accent-hover))] transition-colors"
              >
                Done
              </button>
              <p className="text-center text-[13px] text-sbx-tertiary mt-3">Call to confirm: (305) 890-2051</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default VehicleDetail;
