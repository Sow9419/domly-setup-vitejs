import { useState } from 'react';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
import SearchMobile from '@/components/layout/SearcheMobile';
import CategoryBar from '@/components/layout/CategoryBar';
import { Button } from '@/components/ui/button';
import { Plus, Share2, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { properties } from '@/data/properties';

const Favorites = () => {
  const isMobile = useIsMobile();
  const [favorites, setFavorites] = useState(properties.filter(p => p.isFavorite));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      {isMobile ? (
        <SearchMobile />
      ) : (
        <NavDesktop />
      )}

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 mt-20">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Favoris</h1>
          <p className="text-gray-600">Gérez vos listes de favoris</p>
        </div>

        {/* Filters */}
        <CategoryBar 
          onCategoryChange={() => {}} 
          onSearch={() => {}}
        />

        {/* Favorites Content */}
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-xl font-semibold mb-4">
              Vous n'avez pas encore de favoris
            </h2>
            <p className="text-gray-600 mb-8">
              Commencez à explorer des logements et ajoutez-les à vos favoris !
            </p>
            <Button className="bg-primary text-white">
              Explorer les logements
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {favorites.map((property) => (
              <div key={property.id} className="relative group">
                <img
                  src={property.images[0].url}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/80 backdrop-blur-sm"
                    onClick={() => {}}
                  >
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-white/80 backdrop-blur-sm"
                    onClick={() => {}}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{property.title}</h3>
                  <p className="text-gray-600">{property.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Create New List Button */}
        <Button
          className="fixed bottom-6 right-6 rounded-full shadow-lg"
          size="lg"
        >
          <Plus className="mr-2 h-4 w-4" />
          Créer une nouvelle liste
        </Button>
      </main>
    </div>
  );
};

export default Favorites;