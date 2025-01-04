import PropertyCard from './PropertyCard'
import { properties } from '../../data/properties'

export default function PropertyGrid() {
  return (
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <div key={property.id} className={`${getCardHeight(index)}`}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  )
}

function getCardHeight(index: number): string {
  // Adjusted heights to create a more balanced staggered effect
  const heights = [
    'h-[260px]', // Reduced from 280px
    'h-[320px]', // Reduced from 350px
    'h-[290px]', // Reduced from 320px
    'h-[350px]', // Reduced from 400px
    'h-[310px]', // Reduced from 340px
    'h-[330px]', // Reduced from 380px
    'h-[280px]', // Reduced from 300px
    'h-[340px]', // Reduced from 360px
    'h-[270px]'  // Reduced from 290px
  ];
  return heights[index % heights.length];
}