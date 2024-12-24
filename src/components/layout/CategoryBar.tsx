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
  return (
    <div className="border-b sticky top-20 bg-white z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          <div className="flex gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="whitespace-nowrap flex flex-col items-center gap-1 h-auto py-2"
                >
                  <IconComponent className="h-6 w-6" />
                  <span className="text-xs">{category.label}</span>
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