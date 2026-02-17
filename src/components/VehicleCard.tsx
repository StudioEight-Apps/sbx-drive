import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Vehicle } from "@/data/vehicles";

interface Props {
  vehicle: Vehicle;
  index?: number;
  showBadge?: boolean;
}

const VehicleCard = ({ vehicle, index = 0, showBadge = false }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        to={`/fleet/${vehicle.slug}`}
        className="block rounded-xl bg-card border border-white/[0.06] overflow-hidden"
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />

          {showBadge && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-accent text-black">
              Guest Favorite
            </span>
          )}

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-200 hover:scale-110"
          >
            <Heart
              size={14}
              className={liked ? "fill-accent text-accent" : "text-white"}
            />
          </button>
        </div>

        {/* Info */}
        <div className="px-3 py-3">
          <div className="flex items-center justify-between mb-0.5">
            <h3 className="text-base font-bold text-foreground leading-tight">{vehicle.name}</h3>
            <div className="text-right shrink-0 ml-3">
              <span className="text-base font-bold text-foreground">${vehicle.pricePerDay.toLocaleString()}</span>
              <span className="text-xs text-muted-foreground">/day</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[13px] text-muted-foreground">{vehicle.type} · {vehicle.hp} HP</span>
            <div className="flex items-center gap-1">
              <Star size={12} className="fill-accent text-accent" />
              <span className="text-[13px] font-semibold text-foreground">{vehicle.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default VehicleCard;
