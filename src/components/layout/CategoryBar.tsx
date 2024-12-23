import { Button } from "@/components/ui/button";
import { Sliders } from "lucide-react";

const categories = [
  { id: 1, label: "Tous les hôtes", icon: "🏠" },
  { id: 2, label: "Appartement", icon: "🏢" },
  { id: 3, label: "Logement entier", icon: "🏡" },
  { id: 4, label: "Villas", icon: "🏰" },
  { id: 5, label: "Domaine de travail", icon: "💼" },
  { id: 6, label: "Location Bureau", icon: "🏢" },
  { id: 7, label: "Magasin", icon: "🏪" },
];

const CategoryBar = () => {
  return (
    <div className="border-b sticky top-20 bg-white z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 overflow-x-auto">
          <div className="flex gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant="ghost"
                className="whitespace-nowrap"
              >
                {category.icon} {category.label}
              </Button>
            ))}
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Sliders className="h-4 w-4" />
            Filtres
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;