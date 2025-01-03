import { Property } from '@/types/property'
import PropertyCard from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
}

// Composant de grille Bento pour afficher les propriétés avec effet StaggeredView
const PropertyGrid = ({ properties }: PropertyGridProps) => {
  // Fonction pour déterminer la taille de la carte en fonction de son index
  const getCardSize = (index: number): "small" | "medium" | "large" => {
    // Pattern Bento : variation des tailles pour créer un effet StaggeredView
    const pattern = [
      "medium", "large", "small",
      "large", "small", "medium",
      "small", "medium", "large"
    ]
    return pattern[index % pattern.length] as "small" | "medium" | "large"
  }

  return (
    <div className="w-full p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <div 
            key={property.id} 
            className={`
              transform transition-all duration-300 hover:-translate-y-1
              ${index % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
              ${index % 5 === 0 ? 'md:row-span-2' : ''}
            `}
          >
            <PropertyCard 
              property={property}
              size={getCardSize(index)}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyGrid