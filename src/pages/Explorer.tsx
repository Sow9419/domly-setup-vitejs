import { useIsMobile } from "@/hooks/use-mobile";
import NavDesktop from "@/components/layout/property-detail/NavDesktop";
import SearchMobile from "@/components/layout/SearcheMobile";
import CategoryBar from "@/components/layout/CategoryBar";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";
import Map from "@/components/Map";

export default function Explorer() {
  const isMobile = useIsMobile();

  const handleSearch = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
  };

  const handleCategoryChange = (category: string) => {
    console.log("Category changed to:", category);
  };

  return (
    <div className="min-h-screen bg-white">
      {isMobile ? <SearchMobile /> : <NavDesktop />}
      
      <div className="flex h-[calc(100vh-80px)] mt-20">
        {!isMobile && (
          <div className="w-20 border-r border-gray-200">
            <SideNav />
          </div>
        )}
        
        <div className="flex-1 overflow-hidden">
          <CategoryBar 
            onCategoryChange={handleCategoryChange}
            onSearch={handleSearch}
          />
          <div className="h-[calc(100vh-160px)]">
            <Map />
          </div>
        </div>
      </div>

      {isMobile && <BottomNav />}
    </div>
  );
}