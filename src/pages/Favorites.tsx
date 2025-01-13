import { useState, useEffect } from 'react';
import NavFull from '@/components/layout/NavFull';
import SearchMobile from '@/components/layout/SearcheMobile';
import PropertyCard from '@/components/layout/PropertyCard';
import { Button } from '@/components/ui/button';
import { BookmarkPlus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
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
    <div className="h-screen flex">
      {/* Column 1: Fixed Sidebar */}
      {!isMobile && (
        <div className="w-[72px] h-screen flex-shrink-0 border-r bg-white">
          <SideNav />
        </div>
      )}

      {/* Column 2: Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Row 1: Fixed Header Section */}
        <div className="flex-shrink-0">
          {isMobile ? <SearchMobile /> : <NavFull title="Favoris" />}
          <FavoriBar 
            onFilterChange={handleFilterChange}
            favorites={favoriteProperties}
          />
        </div>

        {/* Row 2: Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
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
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Favorites;