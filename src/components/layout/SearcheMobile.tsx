import { useState, useEffect, useRef } from "react";
import { Search, Globe, Menu, User, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchMobile = () => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle search input change
        console.log(event.target.value);
    };
    
    return (
        <header className="fixed top-0 w-full z-50 bg-white md:hidden">
           <div className="px-4 py-3">
              <div className="flex items-center gap-3 bg-white rounded-full border border-gray-200 p-3 shadow-lg">
                <Search className="h-5 w-5 text-gray-600" />
                <input
                  type="text"
                  placeholder="Rechercher une destination..."
                  className="flex-1 border-none focus:outline-none focus:ring-0 text-sm"
                  onChange={handleSearch}
                />
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full border-gray-300"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
              </div>
           </div> 
        </header>
    );
};

export default SearchMobile;