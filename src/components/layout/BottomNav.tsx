import { Search, Heart, MapPinHouse, Home, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Version Mobile - Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t md:hidden">
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
            <span className={`text-xs mt-1 ${isActive("/") ? "text-blue-500" : "text-gray-500"}`}>
              Accueil
            </span>
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

      {/* Version Desktop - Side Navigation */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-[72px] bg-white border-r border-gray-100 z-40">
        <div className="flex flex-col items-center pt-8 gap-7">
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
      </nav>
    </>
  );
};

export default BottomNav;