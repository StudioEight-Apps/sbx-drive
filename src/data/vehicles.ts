import aventadorImg from "@/assets/vehicles/aventador-s.jpg";
import huracanImg from "@/assets/vehicles/huracan-evo.jpg";
import urusImg from "@/assets/vehicles/urus.jpg";
import ghostImg from "@/assets/vehicles/cullinan.jpg";
import ferrari458Img from "@/assets/vehicles/ferrari-488.jpg";
import g63Img from "@/assets/vehicles/g63.jpg";
import wraithImg from "@/assets/vehicles/continental-gt.jpg";
import gallardoImg from "@/assets/vehicles/corvette-c8.jpg";

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
    name: "Lamborghini Aventador",
    brand: "Lamborghini",
    type: "Exotic",
    pricePerDay: 2500,
    seats: 2,
    hp: 740,
    zeroToSixty: "2.9s",
    topSpeed: "217 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "lamborghini-aventador",
    image: aventadorImg,
    description: "The Aventador is not just an exotic car — it's an ultra luxury performance vehicle. 740 horsepower, scissor doors, and a naturally aspirated V12 that goes 0–100 km/h in 2.9 seconds. Our cheapest Aventador rental in Miami.",
  },
  {
    id: 2,
    name: "Lamborghini Huracan",
    brand: "Lamborghini",
    type: "Exotic",
    pricePerDay: 1800,
    seats: 2,
    hp: 631,
    zeroToSixty: "2.9s",
    topSpeed: "202 mph",
    rating: 4.8,
    noDeposit: true,
    slug: "lamborghini-huracan",
    image: huracanImg,
    description: "The Huracan is the driver's Lamborghini — sharper, lighter, and more connected to the road. Available in white, this is one of the most sought-after exotics in our Miami fleet.",
  },
  {
    id: 3,
    name: "Lamborghini Performante",
    brand: "Lamborghini",
    type: "Exotic",
    pricePerDay: 2200,
    seats: 2,
    hp: 640,
    zeroToSixty: "2.9s",
    topSpeed: "202 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "lamborghini-performante",
    image: urusImg,
    description: "The Performante takes the Huracan to the next level with active aerodynamics and forged composites. Track-bred performance for the streets of Miami.",
  },
  {
    id: 4,
    name: "Lamborghini Gallardo",
    brand: "Lamborghini",
    type: "Exotic",
    pricePerDay: 1200,
    seats: 2,
    hp: 562,
    zeroToSixty: "4.3s",
    topSpeed: "199 mph",
    rating: 4.7,
    noDeposit: true,
    slug: "lamborghini-gallardo",
    image: gallardoImg,
    description: "The Gallardo catches eyes, turns heads, and could stop traffic. One of the most rented exotic cars in our collection — 0 to 60 in just 4.3 seconds. Available in black.",
  },
  {
    id: 5,
    name: "Ferrari 458 Spider",
    brand: "Ferrari",
    type: "Exotic",
    pricePerDay: 2000,
    seats: 2,
    hp: 570,
    zeroToSixty: "3.0s",
    topSpeed: "199 mph",
    rating: 4.8,
    noDeposit: true,
    slug: "ferrari-458-spider",
    image: ferrari458Img,
    description: "The 458 Spider is one of the latest additions to our exotic collection. Fitted with navigation, carbon fiber interior, and a 4.5L V8 with 8 cylinders. Michael Schumacher gave his inputs on the design. Rent at the best prices in Miami.",
  },
  {
    id: 6,
    name: "Rolls Royce Ghost",
    brand: "Rolls Royce",
    type: "Luxury",
    pricePerDay: 1800,
    seats: 5,
    hp: 563,
    zeroToSixty: "4.6s",
    topSpeed: "155 mph",
    rating: 5.0,
    noDeposit: true,
    slug: "rolls-royce-ghost",
    image: ghostImg,
    description: "The most luxurious sedan on the road. The Ghost delivers effortless power and whisper-quiet refinement — the ultimate statement for Miami's most distinguished clientele.",
  },
  {
    id: 7,
    name: "Rolls Royce Wraith",
    brand: "Rolls Royce",
    type: "Luxury",
    pricePerDay: 1500,
    seats: 4,
    hp: 624,
    zeroToSixty: "4.4s",
    topSpeed: "155 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "rolls-royce-wraith",
    image: wraithImg,
    description: "The most powerful Rolls Royce ever built. The Wraith combines grand touring elegance with 624 horsepower — the fastback silhouette was born for South Beach.",
  },
  {
    id: 8,
    name: "Mercedes-AMG G63",
    brand: "Mercedes-Benz",
    type: "SUV",
    pricePerDay: 800,
    seats: 5,
    hp: 577,
    zeroToSixty: "4.5s",
    topSpeed: "137 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "mercedes-amg-g63",
    image: g63Img,
    description: "The icon. The G-Wagon is Miami's unofficial city car — unmistakable, unstoppable, and available with no deposit. The perfect blend of luxury and presence.",
  },
];

export const brands = ["All Brands", "Lamborghini", "Ferrari", "Rolls Royce", "Mercedes-Benz"];
export const bodyTypes = ["All", "Exotic", "SUV", "Luxury"];
export const categoryPills = ["All", "Exotic", "SUV", "Luxury"];
export const dropdownBodyTypes = ["All Types", "Exotic", "SUV", "Luxury"];
