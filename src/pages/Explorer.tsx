import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Map from "@/components/map/Map";
import { Minus, Plus } from "lucide-react";

const Explorer = () => {
  const [guestCount, setGuestCount] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex flex-1 pl-16">
        <div className="w-80 bg-white p-4 border-r">
          <h2 className="text-xl font-semibold mb-6">Filtres</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Prix</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="De"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="À"
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Type de propriété
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="apartment">Appartement</SelectItem>
                  <SelectItem value="house">Maison</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Commodités
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Climatisation
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Piscine
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Parking
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Nombre d'invités
              </label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{guestCount}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setGuestCount(guestCount + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary-hover">
              APPLIQUER
            </Button>
          </div>
        </div>

        <div className="flex-1">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Explorer;