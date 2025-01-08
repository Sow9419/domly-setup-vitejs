import { useState } from "react";
import { User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NavFull = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  console.log("NavFull rendering, menu state:", isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              LOGO
            </span>
          </Link>

          {/* Menu de droite */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden md:flex hover:text-gray-600 text-gray-800"
            >
              Mettre mon logement
            </Button>
            
            <Button 
              variant="outline" 
              className="flex items-center gap-2 rounded-full border border-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <User className="h-5 w-5" />
              <Settings className="h-5 w-5 md:hidden" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavFull;