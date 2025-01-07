import { useState } from 'react';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
import SearchMobile from '@/components/layout/SearcheMobile';
import CategoryBar from '@/components/layout/CategoryBar';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import Map from '@/components/Map';

const Explorer = () => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      {isMobile ? <SearchMobile /> : <NavDesktop />}
      
      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar for desktop */}
        {!isMobile && (
          <div className="w-[72px] border-r">
            <SideNav />
          </div>
        )}
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <CategoryBar 
            onCategoryChange={(category) => setSelectedCategory(category)}
            onSearch={(term) => setSearchTerm(term)}
          />
          
          {/* Map component */}
          <div className="flex-1 relative">
            <Map />
          </div>
        </div>
      </div>

      {/* Bottom navigation for mobile */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Explorer;