'use client'

import { useState } from 'react'
import { Star, Heart, ChevronLeft, ChevronRight, ArrowUpRight, MapPin } from 'lucide-react'
import { Card } from "@/components/ui/card"

interface PropertyImage {
  url: string
  alt: string
}

interface Property {
  id: number
  title: string
  location: string
  rating: number
  status: string
  images: PropertyImage[]
}

interface PropertyCardProps {
  property: Property
  className?: string
}

const PropertyCard = ({ property, className = '' }: PropertyCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    )
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    )
  }

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
  }

  return (
    <Card
      className={`relative group overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 ${className} h-full`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full">
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            previousImage();
          }}
        >
          <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full z-10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          onClick={(e) => {
            e.preventDefault();
            nextImage();
          }}
        >
          <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
        </button>

        <img
          src={property.images[currentImageIndex].url}
          alt={property.images[currentImageIndex].alt}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.02]"
        />

        <div className="absolute top-0 left-0 right-0 p-2 sm:p-3 flex justify-between items-center">
          <div className="flex items-center gap-1 sm:gap-2 bg-white/80 px-2 py-1 rounded-full">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">{property.rating}</span>
            <span className="text-xs sm:text-sm">• {property.status}</span>
          </div>
          <button 
            className={`bg-white/80 p-1.5 sm:p-2 rounded-full transition-colors duration-300 ${isFavorite ? 'bg-blue-500' : ''}`}
            onClick={toggleFavorite}
          >
            <Heart className={`h-3 w-3 sm:h-4 sm:w-4 ${isFavorite ? 'text-white fill-current' : ''}`} />
          </button>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-white/70 backdrop-blur-[20px] transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <h3 className="font-medium text-black/80 text-xs sm:text-sm line-clamp-1">{property.title}</h3>
              <div className="flex items-center gap-1 text-black/80">
                <MapPin className="h-3 w-3" />
                <p className="text-xs line-clamp-1">{property.location}</p>
              </div>
            </div>
            <button className="bg-black p-1.5 rounded-full w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex items-center justify-center -translate-y-2 translate-x-2">
              <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-1">
          {property.images.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;