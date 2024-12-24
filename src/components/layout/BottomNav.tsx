import { Home, Search, Heart, Calendar, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link to="/" className={`flex flex-col items-center ${isActive("/") ? "text-primary" : "text-gray-500 hover:text-primary"}`}>
          <Search className="h-6 w-6" />
          <span className="text-xs">Explorer</span>
        </Link>
        <Link to="/favorites" className={`flex flex-col items-center ${isActive("/favorites") ? "text-primary" : "text-gray-500 hover:text-primary"}`}>
          <Heart className="h-6 w-6" />
          <span className="text-xs">Favoris</span>
        </Link>
        <Link to="/" className={`flex flex-col items-center ${isActive("/") ? "text-primary" : "text-gray-500 hover:text-primary"}`}>
          <Home className="h-6 w-6" />
          <span className="text-xs">Accueil</span>
        </Link>
        <Link to="/trips" className={`flex flex-col items-center ${isActive("/trips") ? "text-primary" : "text-gray-500 hover:text-primary"}`}>
          <Calendar className="h-6 w-6" />
          <span className="text-xs">Voyages</span>
        </Link>
        <Link to="/profile" className={`flex flex-col items-center ${isActive("/profile") ? "text-primary" : "text-gray-500 hover:text-primary"}`}>
          <User className="h-6 w-6" />
          <span className="text-xs">Profil</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;