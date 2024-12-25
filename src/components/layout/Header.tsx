import { useState, useEffect } from "react";
import { Search, Globe, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`
          fixed top-0 w-full z-50 
          transition-all duration-300 
          ${isScrolled ? 
            "bg-white shadow-md border-b border-gray-200" : 
            "bg-transparent"
          }
        `}
      >
        {/* Top Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-primary'}`}>
                LOGO
              </span>
            </Link>

            {/* Search Bar - Only visible when scrolled */}
            {isScrolled && (
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Rechercher une destination"
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:border-primary focus:ring-primary"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>
            )}

            {/* Center Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`hover:text-gray-600 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                Logement
              </Link>
              <Link 
                to="/experiences" 
                className={`hover:text-gray-600 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                Expérience
              </Link>
            </div>

            {/* Right Menu */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="ghost" 
                className={`hover:text-gray-600 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                Mettre mon logement sur Airbnb
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={isScrolled ? 'text-gray-800' : 'text-gray-800'}
              >
                <Globe className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 rounded-full border border-gray-300"
              >
                <Menu className="h-5 w-5" />
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar - Positioned between Header and CategoryBar */}
      {!isScrolled && (
        <div className="w-full bg-transparent" style={{ marginTop: "80px" }}>
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="flex items-center bg-white rounded-full border border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <div className="flex-1 px-6 py-3">
                    <Input
                      type="text"
                      placeholder="Trouver une location n'importe où"
                      className="border-0 bg-transparent focus:ring-0 focus:outline-none w-full placeholder-gray-500"
                    />
                  </div>
                  <div className="pr-2">
                    <Button size="icon" className="rounded-full bg-primary hover:bg-primary-hover">
                      <Search className="h-5 w-5 text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;