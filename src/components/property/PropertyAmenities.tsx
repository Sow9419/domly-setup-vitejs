import { Wifi, Car, Home, Trees, Waves, UtensilsCrossed } from 'lucide-react';

const amenities = [
  { icon: <Wifi className="h-5 w-5" />, label: "Wifi" },
  { icon: <Car className="h-5 w-5" />, label: "Parking" },
  { icon: <Home className="h-5 w-5" />, label: "Balcon" },
  { icon: <Trees className="h-5 w-5" />, label: "Jardin" },
  { icon: <Waves className="h-5 w-5" />, label: "Piscine" },
  { icon: <UtensilsCrossed className="h-5 w-5" />, label: "Cuisine équipée" },
];

export const PropertyAmenities = () => {
  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
      {amenities.map((amenity, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {amenity.icon}
          <span className="text-sm mt-1">{amenity.label}</span>
        </div>
      ))}
    </div>
  );
};