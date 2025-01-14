import { useState, useEffect } from 'react';
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
import NavDesktop from '@/components/layout/property-detail/NavDesktop';

const Favorites = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // État pour gérer le flash de rendu

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // Vérification initiale

    window.addEventListener('resize', checkIsMobile);

    // Désactivation de l'état de "chargement" après le premier calcul
    setIsLoading(false);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
  };

  // Rendu dynamique de la navigation en fonction de la taille de la fenêtre
  const renderNavigation = () => {
    if (isMobile) {
      return <BottomNav />;
    }
    return <SideNav />;
  };

  // Layout Mobile
  const MobileLayout = () => (
    <div className="min-h-screen bg-white">
      <SearchMobile />
      <div className="fixed top-[72px] left-0 right-0 z-40 bg-white">
        <FavoriBar
          onFilterChange={handleFilterChange}
          favorites={favoriteProperties}
        />
      </div>
      <main className="px-4 pt-[144px] pb-20">
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
      </main>
      <BottomNav />
    </div>
  );

  // Layout Desktop
  const DesktopLayout = () => (
    <div className="min-h-screen flex">
      <div className="w-[72px] fixed left-0 top-0 bottom-0 overflow-hidden border-r bg-white">
        <SideNav />
      </div>

      <div className="flex-1 flex flex-col ml-[72px]">
        <div className="fixed top-0 right-0 left-[72px] bg-white z-50">
          <NavDesktop className="w-full border-b" />
          <FavoriBar
            onFilterChange={handleFilterChange}
            favorites={favoriteProperties}
          />
        </div>

        <main className="flex-1 overflow-y-auto px-8 pt-[132px] pb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );

  // Affichage conditionnel basé sur isMobile et isLoading
  if (isLoading) {
    return null; // Affichage vide pendant le calcul de la taille
  }

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Favorites;
