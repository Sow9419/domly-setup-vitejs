import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchForm = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full space-y-4">
      <h2 className="text-2xl font-bold mb-6">DISCOVER THE NEW WORLD</h2>
      <p className="text-gray-600 mb-4">Compare prices here 20% booking sites to help you find the lowest price on the right hotel for you.</p>
      
      <div className="space-y-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Type de logement"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="number"
            placeholder="Guests"
            min="1"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <Button className="w-full">SUBMIT</Button>
      </div>
    </div>
  );
};

export default SearchForm;