type Property = {
  id: string;
  title: string;
  price: string;
  description: string;
  location: string;
  image: string;
};

type Props = {
  property: Property;
};

export default function PropertyDetail({ property }: Props) {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img
        src={property.image}
        alt={property.title}
        className="rounded mb-4 w-full"
      />
      <h1 className="text-2xl font-bold">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-700 text-lg font-semibold mt-2">
        {property.price}
      </p>
      <p className="mt-4 text-gray-700">{property.description}</p>
    </div>
  );
}
