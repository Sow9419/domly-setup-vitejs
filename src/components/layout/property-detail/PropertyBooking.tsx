import { Star, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Property } from '@/data/properties';

interface PropertyBookingProps {
  property: Property;
}

const PropertyBooking = ({ property }: PropertyBookingProps) => {
  return (
    <>
      <div className="w-full md:w-[40%] min-w-[320px] lg:min-w-[383px]">
        <div className="sticky top-6 space-y-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-16 md:mb-0">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl font-bold text-[#2C3E50]">
              100.000 FCFA
              <span className="text-base font-normal text-[#777777]"> / Mois</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="font-semibold">{property.rating}</span>
            </div>
          </div>

          <div className="w-full h-[160px] mt-4 rounded-lg overflow-hidden">
            <img 
              src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+3498DB(-1.4157,52.6643)/-1.4157,52.6643,13,0/383x160@2x?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJja2V5czB1b3EwMW9zMnJxcXg2NW51aWc3In0.q8qo6tM7UesXxm7moqIxlA"
              alt="Location map"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[#2C3E50]">
                Date d'arrivée
              </label>
              <div className="relative">
                <Input
                  type="date"
                  className="w-full pl-10 border-[#3498DB] focus:ring-[#3498DB]"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#777777]" />
              </div>
            </div>

            <Button className="w-full bg-[#3498DB] hover:bg-[#2980B9] text-white py-3 rounded-md transition-colors duration-200 hidden md:block">
              RÉSERVER MAINTENANT
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <Button className="w-full bg-[#3498DB] hover:bg-[#2980B9] text-white py-3 rounded-md transition-colors duration-200">
          RÉSERVER MAINTENANT
        </Button>
      </div>
    </>
  );
};

export default PropertyBooking;