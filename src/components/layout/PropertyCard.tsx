import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  rating: number;
  status: "Occupé" | "Disponible";
}

const PropertyCard = ({ image, title, location, rating, status }: PropertyCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full"
        >
          <Heart className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span>{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-gray-500">
          <span className="flex items-center gap-1">
            📍 {location}
          </span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            status === "Occupé" ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
          }`}>
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;