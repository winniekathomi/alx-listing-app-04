import axios from "axios";
import { useState, useEffect } from "react";

type Review = {
  id: string;
  comment: string;
};

type Props = {
  propertyId: string;
};

export default function ReviewSection({ propertyId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        setError("Failed to load reviews.");
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) fetchReviews();
  }, [propertyId]);

  if (loading) return <p className="text-gray-500">Loading reviews...</p>;

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-3">Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div
            key={review.id}
            className="mb-4 p-3 bg-gray-100 rounded shadow-sm"
          >
            <p className="text-gray-800">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
}
