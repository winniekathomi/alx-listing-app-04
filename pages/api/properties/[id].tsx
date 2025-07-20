import { NextApiRequest, NextApiResponse } from "next";
import { properties } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find((prop) => prop.id === id);

  if (property) {
    res.status(200).json(property);
  } else {
    res.status(404).json({ message: "Property not found" });
  }
}
