import aventadorImg from "@/assets/vehicles/aventador-s.jpg";
import huracanImg from "@/assets/vehicles/huracan-evo.jpg";
import urusImg from "@/assets/vehicles/urus.jpg";
import cullinanImg from "@/assets/vehicles/cullinan.jpg";
import ferrari488Img from "@/assets/vehicles/ferrari-488.jpg";
import g63Img from "@/assets/vehicles/g63.jpg";
import corvetteImg from "@/assets/vehicles/corvette-c8.jpg";
import continentalImg from "@/assets/vehicles/continental-gt.jpg";

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
    name: "Lamborghini Aventador S",
    brand: "Lamborghini",
    type: "Exotic",
    pricePerDay: 2500,
    seats: 2,
    hp: 740,
    zeroToSixty: "2.9s",
    topSpeed: "217 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "lamborghini-aventador-s",
    image: aventadorImg,
    description: "The Aventador S is the definition of presence. 740 horsepower, scissor doors, and a naturally aspirated V12 that announces your arrival from three blocks away. Built for Ocean Drive.",
  },
  {
    id: 2,
    name: "Lamborghini Huracan EVO",
    brand: "Lamborghini",
    type: "Exotic",
    pricePerDay: 1800,
    seats: 2,
    hp: 631,
    zeroToSixty: "2.9s",
    topSpeed: "202 mph",
    rating: 4.8,
    noDeposit: true,
    slug: "lamborghini-huracan-evo",
    image: huracanImg,
    description: "The Huracan EVO is the driver's Lamborghini — sharper, lighter, and more connected to the road. Perfect for those who want the thrill without the theater.",
  },
  {
    id: 3,
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    type: "SUV",
    pricePerDay: 1200,
    seats: 5,
    hp: 641,
    zeroToSixty: "3.5s",
    topSpeed: "190 mph",
    rating: 4.9,
    noDeposit: true,
    slug: "lamborghini-urus",
    image: urusImg,
    description: "Supercar DNA in an SUV body. The Urus handles Miami's scene — valet lines, beach runs, airport pickups — with 641 horsepower and room for five.",
  },
  {
    id: 4,
    name: "Rolls Royce Cullinan",
    brand: "Rolls Royce",
    type: "SUV",
    pricePerDay: 1800,
    seats: 5,
    hp: 563,
    zeroToSixty: "4.8s",
    topSpeed: "155 mph",
    rating: 5.0,
    noDeposit: true,
    slug: "rolls-royce-cullinan",
    image: cullinanImg,
    description: "The most luxurious SUV ever built. The Cullinan doesn't just get you there — it makes the journey the destination. Rear-seat champagne cooler included.",
  },
  {
    id: 5,
    name: "Ferrari 488 Spider",
    brand: "Ferrari",
    type: "Exotic",
    pricePerDay: 2000,
    seats: 2,
    hp: 661,
    zeroToSixty: "3.0s",
    topSpeed: "203 mph",
    rating: 4.8,
    noDeposit: false,
    slug: "ferrari-488-spider",
    image: ferrari488Img,
    description: "Open-air Italian excellence. Drop the top on the 488 Spider and feel every curve of the MacArthur Causeway with 661 horsepower at your back.",
  },
  {
    id: 6,
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
    description: "The icon. The G-Wagon is Miami's unofficial city car — unmistakable, unstoppable, and available with no deposit.",
  },
  {
    id: 7,
    name: "Corvette C8 Stingray",
    brand: "Chevrolet",
    type: "Sports",
    pricePerDay: 600,
    seats: 2,
    hp: 495,
    zeroToSixty: "2.9s",
    topSpeed: "194 mph",
    rating: 4.7,
    noDeposit: true,
    slug: "corvette-c8-stingray",
    image: corvetteImg,
    description: "Mid-engine, 495 horsepower, and the best value in the fleet. The C8 punches way above its price — perfect for first-timers.",
  },
  {
    id: 8,
    name: "Bentley Continental GT",
    brand: "Bentley",
    type: "Luxury",
    pricePerDay: 1500,
    seats: 4,
    hp: 626,
    zeroToSixty: "3.5s",
    topSpeed: "207 mph",
    rating: 4.8,
    noDeposit: true,
    slug: "bentley-continental-gt",
    image: continentalImg,
    description: "Handcrafted British grand touring. The Continental GT is for the client who wants power wrapped in whisper-quiet luxury.",
  },
];

export const brands = ["All", "Lamborghini", "Rolls Royce", "Ferrari", "Mercedes-Benz", "Bentley", "Chevrolet"];
export const bodyTypes = ["All", "Exotic", "SUV", "Sports", "Luxury"];
