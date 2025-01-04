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
              className={index % 2 === 0 ? 'h-[280px]' : 'h-[380px]'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}