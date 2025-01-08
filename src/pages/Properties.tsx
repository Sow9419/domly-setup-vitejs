import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import NavFull from "@/components/layout/NavFull";
import PropertyCard from "@/components/layout/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";

const Properties = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavFull title="Mes Propriétés" />
      <SideNav />
      
      <main className="pt-20 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        <Link 
          to="/dashboard" 
          className="fixed right-4 bottom-20 md:bottom-8"
        >
          <Button 
            size="lg"
            className="rounded-full shadow-lg bg-primary hover:bg-primary-hover"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </Link>
      </main>

      <BottomNav />
    </div>
  );
};

export default Properties;