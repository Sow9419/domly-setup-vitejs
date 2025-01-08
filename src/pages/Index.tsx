import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import CategoryBar, { CategoryType } from "@/components/layout/CategoryBar";
import PropertyCard from "@/components/layout/PropertyCard";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";
import { properties } from "@/data/properties";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  console.log('Index rendered, isMobile:', isMobile);

  const filteredProperties = properties.filter((property) => {
    const matchesCategory = selectedCategory === "all" || property.category === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = useCallback((category: CategoryType) => {
    setSelectedCategory(category);
    console.log("Filtering by category:", category);
  }, []);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
    console.log("Searching for:", term);
  }, []);

  return (
    <div className="min-h-screen bg-white flex">
      {/* SideNav will only render on desktop */}
      <SideNav />
      
      <div className="flex-1 flex flex-col">
        <Header onSearch={handleSearch} />
        <CategoryBar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
        
        <main className={`flex-1 overflow-y-auto ${isMobile ? 'pb-20' : 'px-8 py-4'}`}>
          <div className={`container mx-auto ${isMobile ? 'px-4' : ''}`}>
            <div className={`grid gap-6 ${
              isMobile 
                ? 'grid-cols-1' 
                : 'grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'
            }`}>
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="mt-12 mb-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Devenez hôte</h2>
              <p className="mb-6">Gagnez un revenu complémentaire en partageant votre logement</p>
              <Button variant="secondary" className="bg-white text-pink-500 hover:bg-gray-100">
                En savoir plus
              </Button>
            </div>
          </div>
        </main>

        {/* BottomNav will only render on mobile */}
        <BottomNav />
      </div>
    </div>
  );
};

export default Index;