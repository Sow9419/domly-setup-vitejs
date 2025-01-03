import { Property } from '@/types/property'
import PropertyCard from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
}

const PropertyGrid = ({ properties }: PropertyGridProps) => {
  // Function to determine card height based on index
  const getCardHeight = (index: number): string => {
    const heights = [
      'h-[300px]', 'h-[400px]', 'h-[350px]', 
      'h-[450px]', 'h-[380px]', 'h-[420px]',
      'h-[360px]', 'h-[440px]', 'h-[320px]', 'h-[400px]'
    ];
    return heights[index % heights.length];
  }

  return (
    <div className="w-full p-4 bg-gray-100">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <div 
            key={property.id} 
            className={`mb-4 break-inside-avoid transform transition-all duration-300 hover:-translate-y-1 ${getCardHeight(index)}`}
          >
            <PropertyCard 
              property={property}
              size={index % 3 === 0 ? 'large' : index % 2 === 0 ? 'medium' : 'small'}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertyGrid