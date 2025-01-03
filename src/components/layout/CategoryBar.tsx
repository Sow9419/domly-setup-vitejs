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

// Types pour les catégories
export type CategoryType = "all" | "apartment" | "house" | "villa" | "workspace" | "office" | "store";

const categories = [
  { id: "all", label: "Tous les hôtes", icon: Home },
  { id: "apartment", label: "Appartement", icon: Building2 },
  { id: "house", label: "Logement entier", icon: Hotel },
  { id: "villa", label: "Villas", icon: Castle },
  { id: "workspace", label: "Domaine de travail", icon: Briefcase },
  { id: "office", label: "Location Bureau", icon: Building },
  { id: "store", label: "Magasin", icon: Store },
] as const;

interface CategoryBarProps {
  onCategoryChange: (category: CategoryType) => void;
  onSearch: (searchTerm: string) => void;
}

const CategoryBar = ({ onCategoryChange, onSearch }: CategoryBarProps) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (categoryId: CategoryType) => {
    setSelectedCategory(categoryId);
    onCategoryChange(categoryId);
    console.log('Selected category:', categoryId);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="border-b sticky top-20 bg-white z-40 drop-shadows-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-3"> {/* Reduced gap from 6 to 3 */}
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  onClick={() => handleCategorySelect(category.id as CategoryType)}
                  className={`
                    flex flex-row items-center gap-2 h-10 px-2 py-2 
                    border border-[#E5E7EB] rounded-full
                    hover:bg-gray-50 transition-colors
                    ${isSelected ? 'text-white bg-primary hover:bg-primary-hover' : 'text-gray-600'}
                  `}
                >
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm font-medium whitespace-nowrap">{category.label}</span>
                </Button>
              );
            })}
          </div>
          <Button variant="outline" className="flex items-center gap-2 ml-4 whitespace-nowrap">
            <Sliders className="h-4 w-4" />
            Filtres
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;