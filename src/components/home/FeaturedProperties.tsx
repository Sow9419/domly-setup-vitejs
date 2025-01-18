import PropertyCard from "@/components/PropertyCard";
import { Property } from "@/data/properties";

const mockProperties: Property[] = [
  {
    id: "1",
    title: "Luxury Beach House",
    location: "Miami Beach, FL",
    rating: 4.9,
    status: "Superhost",
    isFavorite: false,
    images: [
      { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", alt: "Luxury Beach House" },
      { url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", alt: "Interior view" }
    ]
  },
  {
    id: "2",
    title: "Modern Downtown Loft",
    location: "Seattle, WA",
    rating: 4.8,
    status: "Plus",
    isFavorite: false,
    images: [
      { url: "https://images.unsplash.com/photo-1494526585095-c41746248156", alt: "Modern Loft" },
      { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267", alt: "Interior view" }
    ]
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Top Des Meilleur Appartement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;