import { useIsMobile } from "@/hooks/use-mobile";
import NavDesktop from "@/components/layout/property-detail/NavDesktop";
import SearchMobile from "@/components/layout/SearcheMobile";
import CategoryBar from "@/components/layout/CategoryBar";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";
import Map from "@/components/Map";
import { useState } from "react";

const Explorer = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    console.log("Search term in Explorer:", term);
  };

  return (
    <div className="min-h-screen bg-white">
      {isMobile ? (
        <SearchMobile onSearch={handleSearch} />
      ) : (
        <NavDesktop />
      )}
      
      <div className="flex h-screen pt-[60px] md:pt-[80px]">
        {!isMobile && (
          <div className="w-[72px] border-r border-gray-100">
            <SideNav />
          </div>
        )}
        
        <div className="flex-1 flex flex-col">
          <CategoryBar onCategoryChange={() => {}} onSearch={handleSearch} />
          <div className="flex-1 relative">
            <Map />
          </div>
        </div>
      </div>

      {isMobile && <BottomNav />}
    </div>
  );
};

export default Explorer;