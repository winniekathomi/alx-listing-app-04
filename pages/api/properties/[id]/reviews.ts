import type { NextApiRequest, NextApiResponse } from "next";

// 👇 Mock review data for each property
const allReviews = {
  "1": [
    { id: "r1", comment: "Absolutely loved this place!" },
    { id: "r2", comment: "Clean and cozy. Would book again." },
  ],
  "2": [
    { id: "r3", comment: "Perfect for city visits. Great location!" },
  ],
  "3": [
    { id: "r4", comment: "The beach view was amazing!" },
    { id: "r5", comment: "Very relaxing stay. Worth the price." },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  const reviews = allReviews[id as string];

  if (reviews) {
    res.status(200).json(reviews);
  } else {
    res.status(404).json({ message: "No reviews found for this property." });
  }
}
