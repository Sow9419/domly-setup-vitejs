import PropertyCard from './PropertyCard'
import { properties } from '../../data/properties'

export default function PropertyGrid() {
  return (
    <div className="p-4 bg-gray-100">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-7xl mx-auto">
        {properties.map((property, index) => (
          <div key={property.id} className="mb-4 break-inside-avoid">
            <PropertyCard 
              property={property} 
              className={getCardHeight(index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function getCardHeight(index: number): string {
  // Hauteurs ajustées pour un effet cascade plus naturel
  const heights = [
    'h-[240px]', // Plus petit pour un meilleur équilibre
    'h-[280px]',
    'h-[260px]',
    'h-[300px]', // Réduit de 350px
    'h-[270px]',
    'h-[290px]', // Réduit de 330px
    'h-[250px]',
    'h-[310px]', // Réduit de 340px
    'h-[280px]'
  ];
  return heights[index % heights.length];
}