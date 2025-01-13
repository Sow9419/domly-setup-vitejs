import { useState } from 'react';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
import SearchMobile from '@/components/layout/SearcheMobile';
import CategoryBar from '@/components/layout/CategoryBar';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import Map from '@/components/Map';

const Explorer = () => {
  const isMobile = window.innerWidth < 768;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="h-screen flex">
      {/* Mobile Layout */}
      {isMobile ? (
        <div className="flex flex-col h-full w-full">
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
      ) : (
        <>
          {/* Column 1: Fixed Sidebar */}
          <div className="w-72 fixed left-0 top-0 bottom-0 border-r border-gray-200 bg-white">
            <SideNav />
          </div>

          {/* Column 2: Main Content */}
          <div className="flex-1 ml-72">
            {/* Fixed Header Section */}
            <div className="fixed top-0 right-0 left-72 bg-white z-50">
              <NavDesktop />
              <CategoryBar 
                onCategoryChange={(category) => setSelectedCategory(category)}
                onSearch={(term) => setSearchTerm(term)}
              />
            </div>

            {/* Scrollable Main Content */}
            <div className="pt-32 h-full">
              <Map />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Explorer;