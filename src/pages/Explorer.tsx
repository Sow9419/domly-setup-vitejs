import { useState } from 'react';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
import SearchMobile from '@/components/layout/SearcheMobile';
import CategoryBar from '@/components/layout/CategoryBar';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import Map from '@/components/Map';

const Explorer = () => {
  const isMobile = window.innerWidth < 768;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="h-screen flex">
      {/* Column 1: Fixed Sidebar */}
      {!isMobile && (
        <div className="w-[72px] h-screen flex-shrink-0 border-r bg-white">
          <SideNav />
        </div>
      )}
      
      {/* Column 2: Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Row 1: Fixed Header Section */}
        <div className="flex-shrink-0">
          {isMobile ? <SearchMobile /> : <NavDesktop />}
          <CategoryBar 
            onCategoryChange={(category) => setSelectedCategory(category)}
            onSearch={(term) => setSearchTerm(term)}
          />
        </div>
        
        {/* Row 2: Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative">
          <Map />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Explorer;