import { useState, useEffect } from 'react';
import NavFull from '@/components/layout/NavFull';
import SearchMobile from '@/components/layout/SearcheMobile';
import PropertyCard from '@/components/layout/PropertyCard';
import { Button } from '@/components/ui/button';
import { BookmarkPlus } from 'lucide-react';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { favorites } from '@/data/favorites';
import FavoriBar, { FavoriFilterType } from '@/components/layout/FavoriBar';
import { Property } from '@/data/properties';

const Favorites = () => {
  const isMobile = window.innerWidth < 768;
  const [selectedFilter, setSelectedFilter] = useState<FavoriFilterType>("all");
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>(favorites.properties);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(favorites.properties);

  useEffect(() => {
    setFavoriteProperties(favorites.properties);
  }, [favorites.properties]);

  useEffect(() => {
    let filtered = favoriteProperties;
    
    if (selectedFilter === "available") {
      filtered = favoriteProperties.filter(p => p.status === "Disponible");
    } else if (selectedFilter !== "all") {
      filtered = favoriteProperties.filter(p => p.category === selectedFilter);
    }
    
    setFilteredProperties(filtered);
  }, [selectedFilter, favoriteProperties]);

  const handleFilterChange = (filter: FavoriFilterType) => {
    setSelectedFilter(filter);
    console.log('Filter changed to:', filter);
  };

  return (
    <div className="min-h-screen flex">
      {/* Column 1: Fixed Sidebar */}
      <aside className="hidden md:block w-72 fixed left-0 top-0 bottom-0 bg-white border-r">
        <div className="h-full flex items-center justify-center">
          <SideNav />
        </div>
      </aside>

      {/* Column 2: Main Content Area */}
      <main className="flex-1 md:ml-72 flex flex-col min-h-screen">
        {/* Fixed Header Section */}
        <div className="sticky top-0 z-50 bg-white">
          {/* Mobile Header */}
          {isMobile ? (
            <SearchMobile />
          ) : (
            <NavFull title="Favoris" className="border-b" />
          )}
          
          {/* FavoriBar - Fixed for both mobile and desktop */}
          <div className={`bg-white ${isMobile ? 'mt-16' : ''}`}>
            <FavoriBar 
              onFilterChange={handleFilterChange}
              favorites={favoriteProperties}
            />
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className={`flex-1 overflow-y-auto p-4 ${isMobile ? 'pb-20' : ''}`}>
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <BookmarkPlus className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-2">
                Aucun favori pour le moment
              </h2>
              <p className="text-gray-600 mb-6">
                Explorez nos logements et ajoutez vos favoris ici
              </p>
              <Button 
                onClick={() => window.location.href = '/explorer'}
                className="bg-primary hover:bg-primary-hover text-white"
              >
                Explorer les logements
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Favorites;