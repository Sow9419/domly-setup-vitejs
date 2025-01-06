import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import NavDesktop from "@/components/layout/property-detail/NavDesktop";
import SearchMobile from "@/components/layout/SearcheMobile";
import { Button } from "@/components/ui/button";
import { Plus, Share2 } from "lucide-react";
import PropertyCard from "@/components/layout/PropertyCard";
import { properties } from "@/data/properties";
import BottomNav from "@/components/layout/BottomNav";

type FilterType = "available" | "all" | "apartment" | "house" | "villa" | "workspace" | "office" | "store";

export default function Favorites() {
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [favorites] = useState(properties.slice(0, 3)); // Simulating some favorites

  const filters: { id: FilterType; label: string }[] = [
    { id: "available", label: "Disponible" },
    { id: "all", label: "Tous les hôtes" },
    { id: "apartment", label: "Appartement" },
    { id: "house", label: "Logement entier" },
    { id: "villa", label: "Villas" },
    { id: "workspace", label: "Domaine de travail" },
    { id: "office", label: "Location Bureau" },
    { id: "store", label: "Magasin" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {isMobile ? <SearchMobile /> : <NavDesktop />}

      <main className="container mx-auto px-4 pt-24 pb-20">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-6">Mes Favoris</h1>
          
          {/* Filters */}
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-3 pb-4">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className="whitespace-nowrap"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {favorites.length > 0 ? (
          <>
            {/* Create New List Section */}
            <div className="mb-8">
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center gap-2 h-20 border-dashed"
              >
                <Plus className="h-5 w-5" />
                Créer une nouvelle liste
              </Button>
            </div>

            {/* Favorites Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((property) => (
                <div key={property.id} className="relative group">
                  <PropertyCard property={property} />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm"
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-xl font-semibold mb-4">
              Commencez à créer votre liste de favoris
            </h2>
            <p className="text-gray-600 mb-8">
              Lorsque vous trouverez un logement qui vous plaît, cliquez sur le cœur
              pour l'enregistrer dans vos favoris
            </p>
            <Button>Explorer les logements</Button>
          </div>
        )}
      </main>

      {isMobile && <BottomNav />}
    </div>
  );
}