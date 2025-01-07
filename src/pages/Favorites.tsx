import { useState } from 'react';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
import { SearchMobile } from '@/components/layout/SearcheMobile';
import CategoryBar from '@/components/layout/CategoryBar';
import PropertyCard from '@/components/layout/PropertyCard';
import { properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Share2, Plus, BookmarkPlus } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Favorites = () => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const favoriteProperties = properties.filter(p => p.isFavorite);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {isMobile ? <SearchMobile /> : <NavDesktop />}

      {/* Main content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        {/* Category filters */}
        <CategoryBar 
          onCategoryChange={(category) => setSelectedCategory(category)}
          onSearch={() => {}}
        />

        {/* Content */}
        <div className="mt-8">
          {favoriteProperties.length === 0 ? (
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
            <div>
              {/* Actions */}
              <div className="flex justify-between items-center mb-6">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2"
                  onClick={() => console.log('Create new list')}
                >
                  <Plus className="h-4 w-4" />
                  Créer une nouvelle liste
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => console.log('Share favorites')}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Favorites grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorites;