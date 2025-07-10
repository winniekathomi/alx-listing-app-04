import ReviewSection from "@/components/property/ReviewSection";

...

return (
  <>
    <PropertyDetail property={property} />
    <ReviewSection propertyId={property.id} />
  </>
);
