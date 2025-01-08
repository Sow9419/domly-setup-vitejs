import { Search, Heart, MapPinHouse, Home, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const BottomNav = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isActive = (path: string) => location.pathname === path;

  // Ne rendre qu'en mobile et ajouter une classe pour masquer explicitement en desktop
  if (!isMobile) {
    return null;
  }

  console.log('BottomNav rendered, isMobile:', isMobile);

  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white border-t z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/explorer" 
          className={`flex flex-col items-center justify-center ${
            isActive("/explorer") ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <Search className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs mt-1">Explorer</span>
        </Link>

        <Link 
          to="/favorites" 
          className={`flex flex-col items-center justify-center ${
            isActive("/favorites") ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <Heart className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs mt-1">Favoris</span>
        </Link>

        <Link 
          to="/" 
          className="flex flex-col items-center justify-center"
        >
          <div className={`relative flex items-center justify-center drop-shadow-2xl ${
            isActive("/") ? "bg-blue-500 rounded-full p-2.5" : ""
          }`}>
            <Home 
              className={`h-6 w-6 ${isActive("/") ? "text-white" : "text-gray-500"}`} 
              strokeWidth={1.5}
            />
          </div>
        </Link>

        <Link 
          to="/voyages" 
          className={`flex flex-col items-center justify-center ${
            isActive("/voyages") ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <MapPinHouse className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs mt-1">Propriétés</span>
        </Link>

        <Link 
          to="/profile" 
          className={`flex flex-col items-center justify-center ${
            isActive("/profile") ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <Settings className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs mt-1">Profil</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;