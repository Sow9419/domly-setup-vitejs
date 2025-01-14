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

  // Layout Mobile
  const MobileLayout = () => (
    <div className="h-screen flex flex-col">
      <SearchMobile />
      <CategoryBar 
        onCategoryChange={(category) => setSelectedCategory(category)}
        onSearch={(term) => setSearchTerm(term)}
      />
      
      <div className="flex-1 relative pb-16">
        <Map />
      </div>

      <BottomNav />
    </div>
  );

  // Layout Desktop
  const DesktopLayout = () => (
    <div className="h-screen flex">
      <div className="w-[72px] fixed left-0 top-0 bottom-0 overflow-hidden border-r bg-white">
        <SideNav />
      </div>
      
      <div className="flex-1 flex flex-col ml-[72px]">
        <NavDesktop className="max-w-[calc(100%-72px)] mx-auto" />
        <CategoryBar 
          onCategoryChange={(category) => setSelectedCategory(category)}
          onSearch={(term) => setSearchTerm(term)}
        />
        
        <div className="flex-1 relative">
          <Map />
        </div>
      </div>
    </div>
  );

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Explorer;