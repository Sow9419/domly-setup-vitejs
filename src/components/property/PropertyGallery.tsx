import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyGalleryProps {
  property: Property;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
}

export const PropertyGallery = ({ 
  property, 
  currentImageIndex, 
  setCurrentImageIndex 
}: PropertyGalleryProps) => {
  const nextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === property.images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? property.images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="space-y-4">
      {/* Mobile Gallery */}
      <div className="md:hidden">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={property.images[currentImageIndex].url}
            alt={property.images[currentImageIndex].alt}
            className="w-full h-full object-cover"
          />
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white/90 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white/90 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Desktop Gallery */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        <div className="col-span-2 aspect-[16/9] rounded-lg overflow-hidden">
          <img
            src={property.images[0].url}
            alt={property.images[0].alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {property.images.slice(1, 4).map((image, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
        <button className="absolute bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          +16 photos
        </button>
      </div>
    </div>
  );
};