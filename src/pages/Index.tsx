import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import CategoryBar from "@/components/layout/CategoryBar";
import PropertyCard from "@/components/layout/PropertyCard";
import BottomNav from "@/components/layout/BottomNav";

const properties = [
  {
    id: 1,
    image: "/lovable-uploads/0d9cb893-a35a-4930-b179-115ffa8654be.png",
    title: "Appartement de luxe à Paris",
    location: "Bamako, Bacodjicoronie Acie",
    rating: 4.9,
    status: "Disponible" as const,
  },
  {
    id: 2,
    image: "/lovable-uploads/b68624e6-febe-47ec-9430-cc4ce645a787.png",
    title: "Appartement de luxe à Paris",
    location: "Bamako, Bacodjicoronie Acie",
    rating: 4.9,
    status: "Occupé" as const,
  },
  {
    id: 3,
    image: "/lovable-uploads/0d9cb893-a35a-4930-b179-115ffa8654be.png",
    title: "Appartement de luxe à Paris",
    location: "Bamako, Bacodjicoronie Acie",
    rating: 4.9,
    status: "Disponible" as const,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CategoryBar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Grid de propriétés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* Section "Devenez hôte" */}
        <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Devenez hôte</h2>
          <p className="mb-6">Gagnez un revenu complémentaire en partageant votre logement</p>
          <Button variant="secondary" className="bg-white text-pink-500 hover:bg-gray-100">
            En savoir plus
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;