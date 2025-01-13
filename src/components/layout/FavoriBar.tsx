import { Button } from "@/components/ui/button";
import { Sliders } from "lucide-react";
import { 
  Home,
  Building2,
  Hotel,
  Castle,
  Briefcase,
  Building,
  Store
} from "lucide-react";
import { useState } from "react";
import { Property } from "@/data/properties";

export type FavoriFilterType = "all" | "available" | "apartment" | "house" | "villa" | "workspace" | "office" | "store";

const filters = [
  { id: "all", label: "Tous les hôtes", icon: Home },
  { id: "available", label: "Disponible", icon: Home },
  { id: "apartment", label: "Appartement", icon: Building2 },
  { id: "house", label: "Logement entier", icon: Hotel },
  { id: "villa", label: "Villas", icon: Castle },
  { id: "workspace", label: "Domaine de travail", icon: Briefcase },
  { id: "office", label: "Location Bureau", icon: Building },
  { id: "store", label: "Magasin", icon: Store },
] as const;

interface FavoriBarProps {
  onFilterChange: (filter: FavoriFilterType) => void;
  favorites: Property[];
}

const FavoriBar = ({ onFilterChange, favorites }: FavoriBarProps) => {
  const [selectedFilter, setSelectedFilter] = useState<FavoriFilterType>("all");

  const handleFilterSelect = (filterId: FavoriFilterType) => {
    setSelectedFilter(filterId);
    onFilterChange(filterId);
    console.log('Selected filter:', filterId);
  };

  const getFilterCount = (filterId: FavoriFilterType): number => {
    if (filterId === "all") return favorites.length;
    if (filterId === "available") return favorites.filter(f => f.status === "Disponible").length;
    return favorites.filter(f => f.category === filterId).length;
  };

  return (
    <div className="border-b bg-white shadow-sm">
      <div className="max-w-[2520px] mx-auto">
        <div className="flex items-center justify-between py-4 px-4 overflow-x-auto hide-scrollbar">
          <div className="flex gap-3">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              const isSelected = selectedFilter === filter.id;
              const count = getFilterCount(filter.id as FavoriFilterType);
              
              return (
                <Button
                  key={filter.id}
                  variant="ghost"
                  onClick={() => handleFilterSelect(filter.id as FavoriFilterType)}
                  className={`
                    flex flex-row items-center gap-2 h-10 px-4 py-2
                    border border-[#E5E7EB] rounded-full
                    hover:bg-gray-50 transition-colors
                    ${isSelected ? 'text-white bg-primary hover:bg-primary-hover' : 'text-gray-600'}
                    whitespace-nowrap
                  `}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium">{filter.label}</span>
                  <span className={`
                    text-xs px-2 py-0.5 rounded-full
                    ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}
                  `}>
                    {count}
                  </span>
                </Button>
              );
            })}
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 ml-4 whitespace-nowrap shrink-0"
          >
            <Sliders className="h-4 w-4" />
            Filtres
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FavoriBar;