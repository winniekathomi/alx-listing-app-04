import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/property/PropertyCard";


type Property = {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
};

export default function HomePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get("/api/properties");
        setProperties(response.data);
        setError("");
      } catch (err) {
        console.error("Failed to fetch properties:", err);
        setError("Could not load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading properties...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (properties.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No properties available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
