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

  console.log('Explorer rendered, isMobile:', isMobile);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      {isMobile ? <SearchMobile /> : <NavDesktop />}
      
      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* SideNav will only render on desktop */}
        <SideNav />
        
        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <CategoryBar 
            onCategoryChange={(category) => setSelectedCategory(category)}
            onSearch={(term) => setSearchTerm(term)}
          />
          
          {/* Map component with bottom padding on mobile */}
          <div className={`flex-1 relative ${isMobile ? 'pb-16' : ''}`}>
            <Map />
          </div>
        </div>
      </div>

      {/* BottomNav will only render on mobile */}
      <BottomNav />
    </div>
  );
};

export default Explorer;