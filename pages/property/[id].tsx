import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "../../components/property/PropertyDetail";


export default function PropertyDetailPage() {
  const router = useRouter();             // 1. Get router object
  const { id } = router.query;            // 2. Extract ID from URL
  const [property, setProperty] = useState(null); // 3. Store property data
  const [loading, setLoading] = useState(true);   // 4. Track if loading
  const [error, setError] = useState("");         // 5. Track errors

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return; // Skip if ID is not ready yet

      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data); // Save data
        setError("");               // Clear error
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property.");
      } finally {
        setLoading(false); // Done loading
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!property) {
    return <p>Property not found.</p>;
  }

  return <PropertyDetail property={property} />;
}
