import { Card } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "Miami",
    description: "Living Ocean City",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f"
  },
  {
    id: 2,
    name: "Seattle Beach",
    description: "Navy Beach City",
    image: "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739"
  },
  {
    id: 3,
    name: "Atlantis Dubai",
    description: "Living Island City",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c"
  }
];

const TopDestinations = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-8">Top Destinations For Boat Rentals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="group cursor-pointer overflow-hidden">
              <div className="relative aspect-[4/3]">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;