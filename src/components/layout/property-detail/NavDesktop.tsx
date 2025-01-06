import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NavDesktop = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 hidden md:block">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <div className="flex items-center bg-white rounded-full border border-gray-300 shadow-md hover:shadow-xl transition-shadow duration-200">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Rechercher une destination"
                    className="w-full pl-10 pr-4 py-2 border-none bg-transparent focus:ring-0 focus:outline-none placeholder-gray-500"
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
        </div>
      </div>
    </header>
  );
};

export default NavDesktop;