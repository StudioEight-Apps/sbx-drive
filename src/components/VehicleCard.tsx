import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Vehicle } from "@/data/vehicles";

interface Props {
  vehicle: Vehicle;
  index?: number;
}

const VehicleCard = ({ vehicle, index = 0 }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="sbx-card group overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden rounded-t-2xl">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Favorite button */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-9 h-9 rounded-full frosted-glass flex items-center justify-center transition-transform duration-200 hover:scale-110"
        >
          <Heart
            size={16}
            className={liked ? "fill-gold text-gold" : "text-foreground"}
          />
        </button>

        {/* Guest Favorite badge */}
        {vehicle.noDeposit && (
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500 text-white">
            Guest Favorite
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-lg font-semibold text-foreground leading-tight">{vehicle.name}</h3>
          <div className="text-right shrink-0 ml-3">
            <span className="text-[22px] font-bold text-foreground">${vehicle.pricePerDay.toLocaleString()}</span>
            <span className="text-xs text-sbx-tertiary">/day</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[13px] text-sbx-tertiary">{vehicle.type} · {vehicle.hp} HP</span>
          <div className="flex items-center gap-1">
            <Star size={12} className="fill-foreground text-foreground" />
            <span className="text-[13px] font-semibold text-foreground">{vehicle.rating}</span>
          </div>
        </div>

        <Link
          to={`/fleet/${vehicle.slug}`}
          className="block w-full text-center py-2.5 rounded-[10px] bg-muted text-foreground text-[13px] font-semibold hover:bg-border transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default VehicleCard;
