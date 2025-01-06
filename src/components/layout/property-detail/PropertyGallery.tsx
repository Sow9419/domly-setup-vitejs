import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PropertyImage } from '@/data/properties';

interface PropertyGalleryProps {
  images: PropertyImage[];
}

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="w-full md:w-[55%] relative">
        <img
          src={images[currentImageIndex].url}
          alt={images[currentImageIndex].alt}
          className="w-full h-[353px] md:w-full md:h-[333px] object-cover md:rounded-lg"
        />
        <Button 
          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 hidden md:flex"
          size="icon"
          variant="ghost"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button 
          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 hidden md:flex"
          size="icon"
          variant="ghost"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="w-full md:w-[45%] flex flex-row md:grid md:grid-cols-2 gap-2 overflow-x-auto hide-scrollbar md:overflow-y-auto md:h-[333px] px-4 md:px-0">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "flex-shrink-0 w-[115px] h-[93px] md:w-full md:h-[163px] rounded-lg overflow-hidden",
              currentImageIndex === index ? "ring-2 ring-[#3498DB]" : ""
            )}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;