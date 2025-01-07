import { type Property } from "@/data/properties";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

interface PropertyBookingProps {
  property: Property;
}

const PropertyBooking = ({ property }: PropertyBookingProps) => {
  const isMobile = useIsMobile();
  const mapImageUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+3498DB(2.3522,48.8566)/2.3522,48.8566,13,0/383x160?access_token=pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbHRweHgxeDQwMXB5MmptbGw3Z2JsMnB2In0.O8lasM04g4tQoqYS6P5UFw`;

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">{property.price}€</span>
            <span className="text-sm text-gray-500"> /nuit</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white px-8">
            Réserver
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[40%] min-w-[320px] lg:min-w-[383px]">
      <div className="sticky top-24 space-y-6 bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-16 md:mb-0">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-[#2C3E50]">
            {property.price}€ <span className="text-base font-normal">par nuit</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium">4.9</span>
            <span className="text-sm text-gray-500">(128 avis)</span>
          </div>
        </div>

        <div className="w-full h-[160px] mt-4 rounded-lg overflow-hidden">
          <img 
            src={mapImageUrl}
            alt="Location map"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col space-y-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium">
            Réserver
          </Button>
          <p className="text-center text-sm text-gray-500">
            Aucun montant ne vous sera débité pour le moment
          </p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-medium">Total</span>
            <span className="text-lg font-medium">{property.price}€</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBooking;