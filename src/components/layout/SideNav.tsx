import { Search, Heart, MapPinHouse, Home, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col items-center justify-center min-h-full gap-7">
      <Link 
        to="/explorer" 
        className={`p-3 rounded-full hover:bg-gray-50 transition-colors ${
          isActive("/explorer") ? "text-blue-500" : "text-gray-500"
        }`}
      >
        <Search className="h-6 w-6" strokeWidth={1.5} />
      </Link>

      <Link 
        to="/favorites" 
        className={`p-3 rounded-full hover:bg-gray-50 transition-colors ${
          isActive("/favorites") ? "text-blue-500" : "text-gray-500"
        }`}
      >
        <Heart className="h-6 w-6" strokeWidth={1.5} />
      </Link>

      <Link 
        to="/" 
        className={`p-3 rounded-full transition-colors ${
          isActive("/") ? "bg-blue-500 text-white" : "text-gray-500 hover:bg-gray-50"
        }`}
      >
        <Home className="h-6 w-6" strokeWidth={1.5} />
      </Link>

      <Link 
        to="/voyages" 
        className={`p-3 rounded-full hover:bg-gray-50 transition-colors ${
          isActive("/voyages") ? "text-blue-500" : "text-gray-500"
        }`}
      >
        <MapPinHouse className="h-6 w-6" strokeWidth={1.5} />
      </Link>

      <Link 
        to="/profile" 
        className={`p-3 rounded-full hover:bg-gray-50 transition-colors ${
          isActive("/profile") ? "text-blue-500" : "text-gray-500"
        }`}
      >
        <Settings className="h-6 w-6" strokeWidth={1.5} />
      </Link>
    </div>
  );
};

export default SideNav; 