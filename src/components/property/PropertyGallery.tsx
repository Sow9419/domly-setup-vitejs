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
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="space-y-4">
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

      <div className="grid grid-cols-4 gap-4">
        {property.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative aspect-square rounded-lg overflow-hidden ${
              currentImageIndex === index ? "ring-2 ring-primary" : ""
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </button>
        ))}
      </div>
    </div>
  );
};