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
  const renderNavigation = () => {
    if (isMobile) {
      return <BottomNav />;
    }
    return <SideNav />;
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      {isMobile ? <SearchMobile /> : <NavDesktop />}
      
      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar for desktop */}
        {!isMobile && (
          <div className="w-[72px] overflow-y-auto border-r bg-white hide-scrollbar">
            <SideNav />
          </div>
        )}
        
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

      {/* Bottom navigation for mobile */}
      {isMobile && <BottomNav />}
    </div>
  );
  return renderNavigation();
};

export default Explorer;