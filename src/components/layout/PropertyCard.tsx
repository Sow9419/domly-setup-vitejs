'use client'

import { useState } from 'react'
import { Star, Heart, ChevronLeft, ChevronRight, ArrowUpRight, MapPin } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Property } from '@/data/properties'
import { useNavigate } from 'react-router-dom'

const PropertyCard = ({ property }: { property: Property }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const handleCardClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <Card
      className="relative group overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Container principal avec ratio d'aspect augmenté */}
      <div className="relative aspect-[3/2.5]">
        {/* Boutons de navigation des images */}
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={previousImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Image principale */}
        <img
          src={property.images[currentImageIndex].url}
          alt={property.images[currentImageIndex].alt}
          className="object-cover w-full h-full transition-transform duration-300"
        />

        {/* Barre supérieure avec rating et favoris */}
        <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center">
          <div className="flex items-center gap-2 bg-white/80 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{property.rating}</span>
            <span className="text-sm">| {property.status}</span>
          </div>
          <button 
            className={`bg-white p-2 rounded-full transition-colors duration-300`}
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'text-primary fill-current' : ''}`} />
          </button>
        </div>

        {/* Barre d'information inférieure */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-white/70 backdrop-blur-[20px] rounded-t-[12px] transform transition-transform duration-300 ${
            isHovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-black/80 truncate max-w-[200px]">{property.title}</h3>
              <div className="flex items-center gap-1 text-black/80">
                <MapPin className="h-4 w-4" />
                <p className="text-sm truncate max-w-[180px]">{property.location}</p>
              </div>
            </div>
            <button 
              className="bg-black p-2 rounded-full w-[35px] h-[35px] flex items-center justify-center -translate-y-2 translate-x-2"
              onClick={handleCardClick}
            >
              <ArrowUpRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Indicateurs de navigation */}
        <div className="absolute bottom-14 left-0 right-0 flex justify-center gap-1.5">
          {property.images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? "bg-primary" : "bg-white/50"
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default PropertyCard