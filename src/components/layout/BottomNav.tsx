import { Search, Heart, Home, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link to="/explorer" className="flex flex-col items-center text-gray-500 hover:text-primary">
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">Explorer</span>
        </Link>
        <Link to="/favoris" className="flex flex-col items-center text-gray-500 hover:text-primary">
          <Heart className="h-6 w-6" />
          <span className="text-xs mt-1">Favoris</span>
        </Link>
        <Link to="/" className="flex flex-col items-center">
          <div className="bg-primary rounded-full p-3 -mt-6 shadow-lg">
            <Home className="h-6 w-6 text-white" />
          </div>
          <span className="text-xs mt-1 text-primary">Accueil</span>
        </Link>
        <Link to="/voyages" className="flex flex-col items-center text-gray-500 hover:text-primary">
          <Calendar className="h-6 w-6" />
          <span className="text-xs mt-1">Voyages</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-gray-500 hover:text-primary">
          <Settings className="h-6 w-6" />
          <span className="text-xs mt-1">Profil</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;