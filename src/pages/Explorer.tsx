import { useState } from 'react';
import NavDesktop from '@/components/layout/property-detail/NavDesktop';
import SearchMobile from '@/components/layout/SearcheMobile';
import CategoryBar from '@/components/layout/CategoryBar';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';

const Explorer = () => {
  const isMobile = useIsMobile();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    console.log("Searching for:", term);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log("Category changed to:", category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      {isMobile ? (
        <SearchMobile />
      ) : (
        <NavDesktop />
      )}

      {/* Main Content */}
      <div className="flex flex-1 relative mt-16">
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="w-20 border-r h-[calc(100vh-4rem)] fixed left-0">
            <SideNav />
          </div>
        )}

        {/* Main Content Area */}
        <main className={`flex-1 ${!isMobile ? 'ml-20' : ''}`}>
          <CategoryBar 
            onCategoryChange={handleCategoryChange} 
            onSearch={handleSearch}
          />
          
          <div className="h-[calc(100vh-8rem)] bg-gray-100">
            {/* Map will be added here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              Map Component Will Be Here
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Explorer;