import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import CategoryBar from "@/components/layout/CategoryBar";
import PropertyCard from "@/components/layout/PropertyCard";
import BottomNav from "@/components/layout/BottomNav";
import Sidebar from "@/components/layout/Sidebar";

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80",
    title: "Villa Moderne à Bamako",
    location: "Bamako, Bacodjicoroni ACI",
    rating: 4.9,
    status: "Disponible" as const,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Appartement Luxueux",
    location: "Bamako, Hamdallaye ACI",
    rating: 4.8,
    status: "Occupé" as const,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2053&q=80",
    title: "Maison Contemporaine",
    location: "Bamako, Badalabougou",
    rating: 4.7,
    status: "Disponible" as const,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Villa avec Piscine",
    location: "Bamako, Sotuba ACI",
    rating: 4.9,
    status: "Disponible" as const,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    title: "Appartement Vue Fleuve",
    location: "Bamako, Quartier du Fleuve",
    rating: 4.8,
    status: "Occupé" as const,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2084&q=80",
    title: "Maison Traditionnelle Moderne",
    location: "Bamako, Magnambougou",
    rating: 4.6,
    status: "Disponible" as const,
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <CategoryBar />
          
          <main className="container mx-auto px-4 pt-32 pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

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
      </div>
    </div>
  );
};

export default Index;
