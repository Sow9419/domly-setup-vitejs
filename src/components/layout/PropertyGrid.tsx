'use client'

import PropertyCard from './PropertyCard'
import { properties } from '@/data/properties'

type CardSize = 'sm' | 'md' | 'lg';

const getCardSize = (index: number): CardSize => {
  // Create a pattern of sizes that repeats
  const pattern: CardSize[] = ['sm', 'lg', 'md', 'sm', 'md', 'lg', 'md', 'sm', 'lg'];
  return pattern[index % pattern.length];
}

export default function PropertyGrid() {
  console.log('Rendering PropertyGrid with', properties.length, 'properties');
  
  return (
    <div className="p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {properties.map((property, index) => {
          const size = getCardSize(index);
          console.log(`Rendering property ${property.id} with size ${size}`);
          
          return (
            <div 
              key={property.id} 
              className={`
                transform transition-transform duration-300 hover:scale-[1.02]
                ${size === 'lg' ? 'row-span-2' : ''}
                ${size === 'sm' ? 'row-span-1' : ''}
                ${size === 'md' ? 'row-span-1.5' : ''}
              `}
            >
              <PropertyCard property={property} size={size} />
            </div>
          );
        })}
      </div>
    </div>
  );
}