import { NextResponse } from "next/server";

const bestSellers = [
  {
    id: 1,
    name: "Blush Pink Delight Hamper",
    image: "/images/bestsellersimages/blush-pink.png",
    price: 1499,
    rating: 4.5,
    reviewCount: 128,
  },
  {
    id: 2,
    name: "Luxury Spa Hamper",
    image: "/images/bestsellersimages/luxury-spa.png",
    price: 2199,
    rating: 4.5,
    reviewCount: 96,
  },
  {
    id: 3,
    name: "Chocolate Lover Hamper",
    image: "/images/bestsellersimages/chocolate-lover.png",
    price: 1699,
    rating: 4.5,
    reviewCount: 154,
  },
  {
    id: 4,
    name: "Festive Celebration Hamper",
    image: "/images/bestsellersimages/festive-celebration.png",
    price: 1899,
    rating: 4.5,
    reviewCount: 112,
  },
  {
    id: 5,
    name: "Gentleman's Choice Hamper",
    image: "/images/bestsellersimages/gentleman's-choice.png",
    price: 2499,
    rating: 4.5,
    reviewCount: 78,
  },
];

export async function GET() {
  return NextResponse.json(bestSellers);
}
