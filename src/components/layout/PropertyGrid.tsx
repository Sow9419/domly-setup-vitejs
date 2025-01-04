import PropertyCard from './PropertyCard'
import { properties } from '../../data/properties'

export default function PropertyGrid() {
  return (
    <div className="p-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => {
            // Calculer le décalage vertical pour chaque carte
            const marginTop = index % 2 === 0 ? 'mt-0' : 'mt-8';
            const height = index % 3 === 0 ? 'h-[320px]' : (index % 3 === 1 ? 'h-[280px]' : 'h-[360px]');
            
            console.log(`Card ${index}: marginTop=${marginTop}, height=${height}`);
            
            return (
              <div 
                key={property.id} 
                className={`transition-all duration-300 ease-in-out ${marginTop}`}
              >
                <PropertyCard 
                  property={property} 
                  className={height}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}