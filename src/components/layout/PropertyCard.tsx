import { Heart, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

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
      {/* Image Container */}
      <div className="relative aspect-square w-full">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Top Info Bar */}
        <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start">
          {/* Rating Badge */}
          <div className="bg-white/90 backdrop-blur-[2px] py-1 pl-2 pr-3 rounded-full flex items-center gap-1.5 shadow-sm">
            <span className="text-base">⭐</span>
            <span className="text-[15px] font-medium">{rating}</span>
            <span className="text-[15px] text-gray-600 mx-0.5">·</span>
            <span className="text-[15px] text-gray-600">{status}</span>
          </div>

          {/* Favorite Button */}
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-[2px] hover:bg-white transition-colors"
            aria-label="Ajouter aux favoris"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[20px] overflow-hidden">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1.5">
                <h3 className="font-medium text-[15px]">{title}</h3>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{location}</span>
                </div>
              </div>
              
              {/* Arrow Button */}
              <button 
                className="w-10 h-10 rounded-full bg-[#0096FF] hover:bg-[#0086e5] transition-colors flex items-center justify-center shadow-sm"
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