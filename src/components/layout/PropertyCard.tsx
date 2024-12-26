import { Heart, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  status: "Occupé" | "Disponible";
}

const PropertyCard = ({ image, title, location, rating, status }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden bg-white relative transform transition-all hover:scale-[1.02] rounded-[20px]">
      <div className="relative aspect-square w-full">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* Top Info Bar */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="bg-white rounded-full py-1 px-3 flex items-center gap-1.5 shadow-sm">
            <span className="text-base">⭐</span>
            <span className="text-[15px] font-medium">{rating}</span>
            <span className="text-[15px] text-gray-600 mx-0.5">•</span>
            <span className="text-[15px] text-gray-600">{status}</span>
          </div>

          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-white/90 transition-colors"
            aria-label="Ajouter aux favoris"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-4 left-4 right-4 bg-white rounded-[16px] shadow-sm overflow-hidden">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-[15px]">{title}</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{location}</span>
                </div>
              </div>
              
              <button 
                className="w-10 h-10 rounded-full bg-[#0EA5E9] hover:bg-[#0284C7] transition-colors flex items-center justify-center"
                aria-label="Voir les détails"
              >
                <svg 
                  className="w-5 h-5 text-white" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;