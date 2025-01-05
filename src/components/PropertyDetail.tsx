import React, { useState } from 'react';
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
  Zap, 
  ShowerHead 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PropertyDetail = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/lovable-uploads/a3ad466a-492a-4fa0-97f6-73ae0d96d3e6.png',
    '/lovable-uploads/3335ba52-5fd0-46fe-865d-02f2c04eee06.png',
    '/lovable-uploads/a3ad466a-492a-4fa0-97f6-73ae0d96d3e6.png',
    '/lovable-uploads/3335ba52-5fd0-46fe-865d-02f2c04eee06.png'
  ];

  const amenities = [
    { icon: <Home className="w-5 h-5" />, text: "4 Chambres" },
    { icon: <ShowerHead className="w-5 h-5" />, text: "2 Douches" },
    { icon: <Thermometer className="w-5 h-5" />, text: "Climatisation" },
    { icon: <Droplet className="w-5 h-5" />, text: "Robinet" },
    { icon: <Zap className="w-5 h-5" />, text: "Electricité" }
  ];

  const features = [
    { icon: <Wifi className="w-4 h-4" />, text: "Wifi" },
    { icon: <Car className="w-4 h-4" />, text: "Parking" },
    { icon: <Home className="w-4 h-4" />, text: "Balcon" },
    { icon: <Compass className="w-4 h-4" />, text: "Jardin" },
    { icon: <Building2 className="w-4 h-4" />, text: "Piscine" },
    { icon: <CircleDot className="w-4 h-4" />, text: "Cuisine équipée" }
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-7xl mx-auto bg-white min-h-screen">
      {/* Mobile Gallery */}
      <div className="relative md:hidden">
        <div className="relative h-[300px] w-full">
          <img
            src={images[currentImageIndex]}
            alt="Property"
            className="w-full h-full object-cover"
          />
          <Button 
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <div className="absolute bottom-4 right-4">
            <Button 
              variant="secondary"
              size="sm"
              className="bg-white/90 backdrop-blur-sm hover:bg-white/95"
            >
              +16 photos
            </Button>
          </div>
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90"
              onClick={handleNextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Gallery */}
      <div className="hidden md:grid md:grid-cols-2 gap-4 p-4">
        <div className="relative h-[400px]">
          <img
            src={images[0]}
            alt="Main property view"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1, 4).map((img, idx) => (
            <div key={idx} className="relative h-[190px]">
              <img
                src={img}
                alt={`Property view ${idx + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              {idx === 2 && (
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <span className="text-white font-medium">+16 photos</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Cottages de Vacances Beach Farm
              </h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Wakefield, Angleterre</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-bold">4.95</span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {amenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  {amenity.icon}
                  <span className="text-sm text-gray-700 text-center">{amenity.text}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  {feature.icon}
                  <span className="text-sm text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="text-gray-600">
              <p>
                Situé dans un cadre pittoresque appelé Breckland dans le Norfolk Sud, Settle
                se trouve dans l'une des régions les plus ensoleillées du Royaume-Uni. Nos ciels sont souvent bleus et sans nuages.
              </p>
              <button className="text-primary hover:underline mt-2 text-sm font-medium">
                Voir plus
              </button>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:sticky lg:top-4">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-gray-900">100.000 FCFA</span>
                  <span className="text-gray-600 text-sm">/ Mois</span>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-bold">4.95</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Sélectionner la date de réservation
                  </label>
                  <div className="relative">
                    <Input 
                      type="date" 
                      className="w-full pl-10" 
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 md:static fixed bottom-0 left-0 right-0 z-50 md:z-auto md:rounded-md rounded-none"
                >
                  RÉSERVER MAINTENANT
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default PropertyDetail;