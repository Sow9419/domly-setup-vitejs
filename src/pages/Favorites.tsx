import { useState, useEffect } from 'react';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
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
      {/* Mobile Layout */}
      {isMobile ? (
        <div className="flex flex-col w-full">
          <SearchMobile />
          <FavoriBar 
            onFilterChange={handleFilterChange}
            favorites={favoriteProperties}
          />
          <div className="flex-1 p-4 pb-20">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
          <BottomNav />
        </div>
      ) : (
        <>
          {/* Column 1: Fixed Sidebar */}
          <div className="w-72 fixed left-0 top-0 bottom-0 border-r border-gray-200 bg-white">
            <SideNav />
          </div>

          {/* Column 2: Main Content */}
          <div className="flex-1 ml-72">
            {/* Fixed Header Section */}
            <div className="fixed top-0 right-0 left-72 bg-white z-50">
              <NavDesktop />
              <FavoriBar 
                onFilterChange={handleFilterChange}
                favorites={favoriteProperties}
              />
            </div>

            {/* Scrollable Main Content */}
            <div className="pt-32 px-8">
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
                <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;