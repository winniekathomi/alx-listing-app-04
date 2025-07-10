import type { NextApiRequest, NextApiResponse } from "next";

const properties = [
  {
    id: "1",
    title: "Cozy Cottage",
    price: "$120/night",
    description: "A peaceful retreat in the countryside.",
    location: "Nairobi, Kenya",
    image: "https://via.placeholder.com/400x250?text=Cozy+Cottage"
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: "$90/night",
    description: "Stylish apartment in the heart of the city.",
    location: "Mombasa, Kenya",
    image: "https://via.placeholder.com/400x250?text=Modern+Apartment"
  },
  {
    id: "3",
    title: "Beach House",
    price: "$150/night",
    description: "Enjoy ocean views and sandy beaches.",
    location: "Diani, Kenya",
    image: "https://via.placeholder.com/400x250?text=Beach+House"
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(properties);
}
