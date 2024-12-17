import { Home, Search, Heart, Building2, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { icon: Search, path: "/explorer", label: "Explorer" },
    { icon: Heart, path: "/favoris", label: "Favoris" },
    { icon: Home, path: "/", label: "Accueil" },
    { icon: Building2, path: "/activites", label: "Activités" },
    { icon: Settings, path: "/parametres", label: "Paramètres" },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-white shadow-sm flex flex-col items-center py-4 space-y-8">
      <Link to="/" className="mb-8">
        <img src="/logo.png" alt="Logo" className="w-8 h-8" />
      </Link>
      
      {links.map(({ icon: Icon, path, label }) => (
        <Link
          key={path}
          to={path}
          className={`p-2 rounded-lg transition-colors ${
            isActive(path)
              ? "text-primary bg-primary/5"
              : "text-gray-500 hover:text-primary hover:bg-primary/5"
          }`}
          title={label}
        >
          <Icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};