import { useState, useEffect, useRef } from "react";
import { Search, Globe, Menu, User, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavDesktop = ({ className }: { className?: string }) => {
  
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle search input change
    console.log(event.target.value);
  };

  return (
    <header 
      className={`
        w-full bg-white
        transition-all duration-300 
        hidden md:block
        ${className || ''}
      `}
    >
      <div className="max-w-[calc(100%-72px)] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              LOGO
            </span>
          </Link>

          {/* Barre de recherche - Visible uniquement lors du scroll */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="flex items-center bg-white rounded-full border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-200">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Rechercher une destination"
                    className="w-full pl-10 pr-4 py-2 border-none bg-transparent focus:ring-0 focus:outline-none placeholder-gray-500"
                    onChange= {handleSearch}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <div className="pr-1">
                  <Button size="sm" className="rounded-full bg-primary hover:bg-primary-hover h-8 w-8">
                    <Search className="h-4 w-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Menu de droite */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hover:text-gray-600 text-gray-800"
            >
              Mettre mon logement sur Airbnb
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className= "text-gray-800"
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
  );
};

export default NavDesktop;
