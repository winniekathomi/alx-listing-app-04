import Link from "next/link";

type Property = {
  id: string;
  title: string;
  price: string;
  image: string;
  location: string;
};

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-semibold mt-2">{property.title}</h2>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-green-700 font-bold">{property.price}</p>
      </div>
    </Link>
  );
}
