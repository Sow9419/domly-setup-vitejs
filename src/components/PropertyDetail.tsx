import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Wifi, 
  Car, 
  Home, 
  Compass, 
  Building2, 
  CircleDot, 
  MapPin, 
  Star, 
  Calendar, 
  Bath, 
  Thermometer, 
  Droplet, 
  Zap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PropertyDetail = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80'
  ];

  const amenities = [
    { icon: <Home className="w-6 h-6 text-primary" />, text: "4 Chambres" },
    { icon: <Bath className="w-6 h-6 text-primary" />, text: "2 Douches" },
    { icon: <Thermometer className="w-6 h-6 text-primary" />, text: "Climatisation" },
    { icon: <Droplet className="w-6 h-6 text-primary" />, text: "Robinet" },
    { icon: <Zap className="w-6 h-6 text-primary" />, text: "Electricité" }
  ];

  const features = [
    { icon: <Wifi className="w-5 h-5 text-primary" />, text: "Wifi" },
    { icon: <Car className="w-5 h-5 text-primary" />, text: "Parking" },
    { icon: <Home className="w-5 h-5 text-primary" />, text: "Balcon" },
    { icon: <Compass className="w-5 h-5 text-primary" />, text: "Jardin" },
    { icon: <Building2 className="w-5 h-5 text-primary" />, text: "Piscine" },
    { icon: <CircleDot className="w-5 h-5 text-primary" />, text: "Cuisine équipée" }
  ];

  return (
    <div className="max-w-[1200px] mx-auto bg-background min-h-screen font-roboto">
      {/* Image Gallery Section */}
      <div className="p-4">
        <div className="grid md:grid-cols-[70%_30%] gap-4 md:gap-2">
          {/* Main Image */}
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden w-full">
            <img
              src={images[currentImageIndex]}
              alt="Main property view"
              className="object-cover w-full h-full"
            />
            <Button 
              variant="ghost"
              size="icon"
              className="absolute left-4 top-4 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all z-10 md:hidden"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Thumbnails */}
          <div className="flex md:grid md:grid-cols-2 gap-2 overflow-x-auto md:overflow-x-hidden md:h-[400px] md:overflow-y-auto pb-2 md:pb-0">
            {images.map((img, idx) => (
              <div 
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={cn(
                  "relative w-[120px] h-[90px] md:w-full md:h-[190px] flex-shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all",
                  currentImageIndex === idx ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100",
                  "md:aspect-[4/3] md:h-auto"
                )}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="grid lg:grid-cols-[60%_40%] gap-8">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="font-montserrat font-bold text-2xl md:text-3xl text-foreground mb-2">
                Cottages de Vacances Beach Farm
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="font-montserrat text-sm md:text-base">Wakefield, Angleterre</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-montserrat font-bold text-lg">4.95</span>
                </div>
              </div>
            </div>

            {/* Primary Amenities */}
            <div>
              <h2 className="font-montserrat font-bold text-lg text-foreground mb-4">
                Équipements principaux
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-3 rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
                    <div className="mb-2">{amenity.icon}</div>
                    <span className="text-sm text-card-foreground">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-montserrat font-bold text-lg text-foreground mb-4">
                Caractéristiques
              </h2>
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-sm hover:shadow-md transition-shadow border border-border"
                  >
                    {feature.icon}
                    <span className="text-sm text-card-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="text-sm text-muted-foreground">
              <p>
                Situé dans un cadre pittoresque appelé Breckland dans le Norfolk Sud, Settle
                se trouve dans l'une des régions les plus ensoleillées du Royaume-Uni. Nos ciels sont souvent bleus et sans nuages.
              </p>
              <button className="text-primary hover:underline mt-2 text-xs">
                Voir plus
              </button>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:sticky lg:top-4">
            <Card className="p-6 border-border rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-montserrat font-bold text-xl text-foreground">100.000 FCFA</span>
                  <span className="text-muted-foreground text-sm">/ Mois</span>
                </div>
                <div className="flex items-center gap-1 bg-secondary px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-montserrat font-bold">4.95</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Sélectionner la date de réservation
                  </label>
                  <div className="relative">
                    <Input 
                      type="date" 
                      className="w-full pl-10 border-input rounded-md" 
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat py-3 rounded-md transition-colors md:static fixed bottom-0 left-0 right-0 z-50 md:z-auto md:rounded-md rounded-none shadow-lg md:shadow-none"
                >
                  RÉSERVER MAINTENANT
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="h-16 md:hidden"></div>
    </div>
  );
};

export default PropertyDetail;