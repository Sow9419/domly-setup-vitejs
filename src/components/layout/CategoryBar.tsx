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

const categories = [
  { id: 1, label: "Tous les hôtes", icon: Home },
  { id: 2, label: "Appartement", icon: Building2 },
  { id: 3, label: "Logement entier", icon: Hotel },
  { id: 4, label: "Villas", icon: Castle },
  { id: 5, label: "Domaine de travail", icon: Briefcase },
  { id: 6, label: "Location Bureau", icon: Building },
  { id: 7, label: "Magasin", icon: Store },
];

const CategoryBar = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const handleCategorySelect = (categoryId: number) => {
    setSelectedCategory(categoryId);
    console.log('Selected category:', categoryId);
  };

  return (
    <div className="border-b sticky top-20 bg-white z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          <div className="flex gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  onClick={() => handleCategorySelect(category.id)}
                  className={`
                    flex flex-row items-center gap-3 h-10 px-4 py-2 
                    border border-[#E5E7EB] rounded-full
                    hover:bg-gray-50 transition-colors
                    ${isSelected ? 'text-[#0EA5E9] border-[#0EA5E9]' : 'text-gray-600'}
                  `}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="text-sm font-medium">{category.label}</span>
                </Button>
              );
            })}
          </div>
          <Button variant="outline" className="flex items-center gap-2 ml-4">
            <Sliders className="h-4 w-4" />
            Filtres
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;