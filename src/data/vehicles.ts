export interface Vehicle {
  id: number;
  name: string;
  brand: string;
  type: string;
  pricePerDay: number;
  seats: number;
  hp: number;
  zeroToSixty: string;
  topSpeed: string;
  rating: number;
  noDeposit: boolean;
  slug: string;
  image: string;
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    name: "Persian Royal Floof",
    brand: "Persian",
    type: "Lap Cat",
    pricePerDay: 250,
    seats: 4,
    hp: 98,
    zeroToSixty: "0.3s",
    topSpeed: "25 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "persian-royal-floof",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop",
    description: "The Persian Royal Floof is the definition of luxury. 98% fluffiness, smush face, and a purr that fills the entire room. Built for penthouse living on Ocean Drive.",
  },
  {
    id: 2,
    name: "Bengal Lightning",
    brand: "Bengal",
    type: "Adventure",
    pricePerDay: 180,
    seats: 2,
    hp: 95,
    zeroToSixty: "0.1s",
    topSpeed: "30 mph",
    rating: 4.8,
    noDeposit: true,
    slug: "bengal-lightning",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop",
    description: "The Bengal Lightning is the athlete's cat — wild markings, explosive energy, and absolutely zero chill. Perfect for those who want a cat that keeps them on their toes.",
  },
  {
    id: 3,
    name: "Maine Coon Titan",
    brand: "Maine Coon",
    type: "Gentle Giant",
    pricePerDay: 200,
    seats: 6,
    hp: 92,
    zeroToSixty: "0.5s",
    topSpeed: "22 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "maine-coon-titan",
    image: "https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=800&h=600&fit=crop",
    description: "Supercat DNA in an XL body. The Maine Coon handles everything — family life, dog introductions, cold weather — with 25 lbs of majestic fluff and room for the whole crew.",
  },
  {
    id: 4,
    name: "British Shorthair Royale",
    brand: "British Shorthair",
    type: "Lap Cat",
    pricePerDay: 220,
    seats: 3,
    hp: 88,
    zeroToSixty: "0.8s",
    topSpeed: "18 mph",
    rating: 5.0,
    noDeposit: true,
    slug: "british-shorthair-royale",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop",
    description: "The most distinguished cat ever bred. The British Shorthair doesn't just sit on your lap — it makes the lap the destination. Complementary head bonks included.",
  },
  {
    id: 5,
    name: "Siamese Soprano",
    brand: "Siamese",
    type: "Adventure",
    pricePerDay: 160,
    seats: 2,
    hp: 90,
    zeroToSixty: "0.2s",
    topSpeed: "28 mph",
    rating: 4.8,
    noDeposit: false,
    slug: "siamese-soprano",
    image: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?w=800&h=600&fit=crop",
    description: "Vocal excellence at its finest. The Siamese Soprano will narrate your entire day with 90% purr power and a meow that carries across the MacArthur Causeway.",
  },
  {
    id: 6,
    name: "Ragdoll Cloud Nine",
    brand: "Ragdoll",
    type: "Lap Cat",
    pricePerDay: 140,
    seats: 5,
    hp: 85,
    zeroToSixty: "1.2s",
    topSpeed: "15 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "ragdoll-cloud-nine",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&h=600&fit=crop",
    description: "The icon. The Ragdoll is Miami's unofficial therapy cat — floppy, snuggly, and available with no deposit. Goes limp in your arms on command.",
  },
  {
    id: 7,
    name: "Abyssinian Rocket",
    brand: "Abyssinian",
    type: "Adventure",
    pricePerDay: 120,
    seats: 2,
    hp: 94,
    zeroToSixty: "0.1s",
    topSpeed: "32 mph",
    rating: 4.7,
    noDeposit: true,
    slug: "abyssinian-rocket",
    image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&h=600&fit=crop",
    description: "Ticked coat, 94% energy, and the best value in the clowder. The Abyssinian punches way above its weight — perfect for first-time cat parents.",
  },
  {
    id: 8,
    name: "Scottish Fold Charmer",
    brand: "Scottish Fold",
    type: "Luxury",
    pricePerDay: 190,
    seats: 3,
    hp: 87,
    zeroToSixty: "0.6s",
    topSpeed: "20 mph",
    rating: 4.8,
    noDeposit: true,
    slug: "scottish-fold-charmer",
    image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&h=600&fit=crop",
    description: "Handcrafted Scottish charm. The Scottish Fold is for the client who wants cuteness wrapped in owl-ear elegance and whisper-quiet purring.",
  },
];

export const brands = ["All Breeds", "Persian", "Bengal", "Maine Coon", "British Shorthair", "Siamese", "Ragdoll", "Abyssinian", "Scottish Fold"];
export const bodyTypes = ["All", "Lap Cat", "Adventure", "Luxury", "Gentle Giant"];
export const categoryPills = ["All", "Lap Cat", "Adventure", "Luxury", "Gentle Giant"];
export const dropdownBodyTypes = ["All Types", "Lap Cat", "Adventure", "Luxury", "Gentle Giant"];
