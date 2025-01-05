import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Wifi, Trees, UtensilsCrossed, Car, Home, Waves } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { properties } from '@/data/properties';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [date, setDate] = useState<Date>();

  // Trouver la propriété correspondante
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return <div>Propriété non trouvée</div>;
  }

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

  const amenities = [
    { icon: <Wifi className="h-5 w-5" />, label: "Wifi" },
    { icon: <Car className="h-5 w-5" />, label: "Parking" },
    { icon: <Home className="h-5 w-5" />, label: "Balcon" },
    { icon: <Trees className="h-5 w-5" />, label: "Jardin" },
    { icon: <Waves className="h-5 w-5" />, label: "Piscine" },
    { icon: <UtensilsCrossed className="h-5 w-5" />, label: "Cuisine équipée" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Section mobile */}
      <div className="md:hidden">
        <div className="relative h-[50vh]">
          <img
            src={property.images[currentImageIndex].url}
            alt={property.images[currentImageIndex].alt}
            className="w-full h-full object-cover"
          />
          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {property.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentImageIndex === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-4 space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">{property.title}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{property.rating}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg"
              >
                {amenity.icon}
                <span className="text-sm mt-1">{amenity.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="text-gray-600">
              Situé dans un cadre pittoresque appelé Breckland dans le Norfolk Sud, Settle
              se trouve dans l'une des régions les plus ensoleillées du Royaume-Uni.
              Nos ciels sont souvent bleus et sans nuages.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-2xl font-bold">{property.price || "100.000"} FCFA</span>
                <span className="text-gray-600"> / Mois</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{property.rating}</span>
              </div>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  {date ? format(date, "PPP", { locale: fr }) : "Sélectionner une date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button className="w-full bg-primary hover:bg-primary/90">
              RÉSERVER MAINTENANT
            </Button>
          </div>
        </div>
      </div>

      {/* Section desktop */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{property.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">{property.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                  >
                    {amenity.icon}
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  Situé dans un cadre pittoresque appelé Breckland dans le Norfolk Sud, Settle
                  se trouve dans l'une des régions les plus ensoleillées du Royaume-Uni.
                  Nos ciels sont souvent bleus et sans nuages.
                </p>
              </div>

              <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-3xl font-bold">{property.price || "100.000"} FCFA</span>
                    <span className="text-gray-600"> / Mois</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg">{property.rating}</span>
                  </div>
                </div>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      {date ? format(date, "PPP", { locale: fr }) : "Sélectionner une date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <Button className="w-full bg-primary hover:bg-primary/90 text-lg">
                  RÉSERVER MAINTENANT
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={property.images[currentImageIndex].url}
                  alt={property.images[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
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
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;