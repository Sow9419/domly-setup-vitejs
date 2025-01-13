import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import CategoryBar from "@/components/layout/CategoryBar";
import PropertyCard from "@/components/layout/PropertyCard";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";
import { properties } from "@/data/properties";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = window.innerWidth < 768;

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
    <div className="min-h-screen bg-white">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <Header onSearch={handleSearch} />
        <CategoryBar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
        <main className="px-4 pt-20 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
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

      {/* Desktop Layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Column 1: Fixed Sidebar */}
        <div className="w-72 fixed left-0 top-0 bottom-0 border-r border-gray-200 bg-white">
          <SideNav />
        </div>

        {/* Column 2: Main Content */}
        <div className="flex-1 ml-72">
          {/* Fixed Header Section - Now properly contained within Column 2 */}
          <div className="sticky top-0 z-50 bg-white">
            <div className="w-full">
              <Header onSearch={handleSearch} />
              <CategoryBar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
            </div>
          </div>

          {/* Scrollable Main Content */}
          <main className="px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;