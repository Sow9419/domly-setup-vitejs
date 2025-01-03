import PropertyCard from './PropertyCard'
import { properties } from '../../data/properties'

export default function PropertyGrid() {
  return (
    <div className="p-4 bg-gray-100">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <div key={property.id} className={`mb-4 break-inside-avoid ${getCardHeight(index)}`}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  )
}

function getCardHeight(index: number): string {
  const heights = [
    'h-[300px]', 'h-[400px]', 'h-[350px]', 
    'h-[450px]', 'h-[380px]', 'h-[420px]',
    'h-[360px]', 'h-[440px]', 'h-[320px]', 'h-[400px]'
  ];
  return heights[index % heights.length];
}

