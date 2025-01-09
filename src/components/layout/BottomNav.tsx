import { Search, Heart, MapPinHouse, Home, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t md:hidden nav-transition bottom-nav">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/explorer" 
          className={`flex flex-col items-center justify-center transition-colors ${
            isActive("/explorer") ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <Search className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs mt-1">Explorer</span>
        </Link>

        <Link 
          to="/favorites" 
          className={`flex flex-col items-center justify-center transition-colors ${
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
          <div className={`relative flex items-center justify-center drop-shadow-2xl transition-colors ${
            isActive("/") ? "bg-blue-500 rounded-full p-2.5" : ""
          }`}>
            <Home 
              className={`h-6 w-6 ${isActive("/") ? "text-white" : "text-gray-500"}`} 
              strokeWidth={1.5}
            />
          </div>
        </Link>

        <Link 
          to="/property" 
          className={`flex flex-col items-center justify-center transition-colors ${
            isActive("/property") ? "text-blue-500" : "text-gray-500"
          }`}
        >
          <MapPinHouse className="h-6 w-6" strokeWidth={1.5} />
          <span className="text-xs mt-1">Propriétés</span>
        </Link>

        <Link 
          to="/profile" 
          className={`flex flex-col items-center justify-center transition-colors ${
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