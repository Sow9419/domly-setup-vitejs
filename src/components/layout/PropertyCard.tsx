'use client'

import { useState } from 'react'
import { Star, Heart, ChevronLeft, ChevronRight, ArrowUpRight, MapPin } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { PropertyCardProps } from '@/types/property'

// Composant PropertyCard avec gestion de la taille et du style Bento
const PropertyCard = ({ property, className = '', size = 'medium' }: PropertyCardProps) => {
  // États pour gérer l'interaction utilisateur
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  // Fonction pour obtenir les classes en fonction de la taille
  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'aspect-[4/3]';
      case 'large':
        return 'aspect-[3/4]';
      default:
        return 'aspect-[3/2.5]';
    }
  }

  // Navigation des images
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

  // Gestion des favoris
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
  }

  return (
    <Card
      className={`relative group overflow-hidden bg-gray-50 hover:bg-white transition-all duration-300 ${className} ${getSizeClasses()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container principal avec ratio d'aspect dynamique */}
      <div className="relative h-full w-full">
        {/* Boutons de navigation des images */}
        <button
          className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full z-10 transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={(e) => {
            e.preventDefault();
            previousImage();
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full z-10 transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          onClick={(e) => {
            e.preventDefault();
            nextImage();
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Image principale avec effet de zoom au survol */}
        <img
          src={property.images[currentImageIndex].url}
          alt={property.images[currentImageIndex].alt}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* Barre supérieure avec rating et favoris */}
        <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span className="text-sm font-medium">{property.rating}</span>
            <span className="text-sm text-gray-600">• {property.status}</span>
          </div>
          <button 
            className="bg-white p-2 rounded-full transition-colors duration-300 hover:bg-gray-50"
            onClick={toggleFavorite}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'text-primary fill-current' : ''}`} />
          </button>
        </div>

        {/* Overlay d'informations avec effet de flou */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 bg-white/80 backdrop-blur-sm transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-gray-800 line-clamp-1">{property.title}</h3>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="h-4 w-4" />
                <p className="text-sm line-clamp-1">{property.location}</p>
              </div>
            </div>
            <button className="bg-black/90 p-2 rounded-full flex items-center justify-center transform -translate-y-2 translate-x-2 transition-transform duration-300 hover:scale-105">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>

        {/* Indicateurs de navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
          {property.images.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                currentImageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}

export default PropertyCard