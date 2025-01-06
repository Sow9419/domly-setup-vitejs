import { MapPin, Star, Wifi, Car, Home, Compass, Building2, CircleDot } from 'lucide-react';
import { Property } from '@/data/properties';

const amenities = [
  { icon: <Home className="w-5 h-5 text-[#2C3E50]" />, text: "4 Chambres" },
  { icon: <Building2 className="w-5 h-5 text-[#2C3E50]" />, text: "2 Douches" },
  { icon: <CircleDot className="w-5 h-5 text-[#2C3E50]" />, text: "Climatisation" },
  { icon: <Compass className="w-5 h-5 text-[#2C3E50]" />, text: "Robinet" },
  { icon: <CircleDot className="w-5 h-5 text-[#2C3E50]" />, text: "Electricité" }
];

const features = [
  { icon: <Wifi className="w-5 h-5 text-[#2C3E50]" />, text: "Wifi" },
  { icon: <Car className="w-5 h-5 text-[#2C3E50]" />, text: "Parking" },
  { icon: <Home className="w-5 h-5 text-[#2C3E50]" />, text: "Balcon" },
  { icon: <Compass className="w-5 h-5 text-[#2C3E50]" />, text: "Jardin" },
  { icon: <Building2 className="w-5 h-5 text-[#2C3E50]" />, text: "Piscine" },
  { icon: <CircleDot className="w-5 h-5 text-[#2C3E50]" />, text: "Cuisine équipée" }
];

interface PropertyInfoProps {
  property: Property;
}

const PropertyInfo = ({ property }: PropertyInfoProps) => {
  return (
    <div className="w-full md:w-[60%] space-y-6">
      <div>
        <h1 className="font-montserrat font-bold text-2xl md:text-3xl text-[#2C3E50] mb-2">{property.title}</h1>
        <div className="flex items-center gap-2 text-[#777777]">
          <MapPin className="w-5 h-5" />
          <span className="font-montserrat text-sm md:text-base">{property.location}</span>
        </div>
        <div className="flex items-center mt-2">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="font-montserrat font-semibold ml-1">{property.rating}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
          >
            {amenity.icon}
            <span className="text-xs mt-1">{amenity.text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full text-sm"
          >
            {feature.icon}
            <span>{feature.text}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="font-montserrat font-semibold text-xl mb-3 text-[#2C3E50]">À propos de ce logement</h2>
        <p className="text-sm leading-relaxed">
          Situé dans un cadre pittoresque appelé Breckland dans le Norfolk Sud, Settle
          se trouve dans l'une des régions les plus ensoleillées du Royaume-Uni. Nos ciels sont souvent bleus et sans nuages.
          Cette propriété unique combine le charme rustique avec le confort moderne, offrant une expérience de séjour inoubliable.
        </p>
        <button className="text-[#3498DB] text-sm underline mt-2 hover:text-[#2980B9]">Voir plus</button>
      </div>
    </div>
  );
};

export default PropertyInfo;