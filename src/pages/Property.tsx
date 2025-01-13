import NavFull from '@/components/layout/NavFull';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { Suspense } from 'react';

const Property = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="min-h-screen flex">
      {/* Column 1: Fixed Sidebar (Desktop only) */}
      {!isMobile && (
        <div className="w-[72px] fixed left-0 top-0 bottom-0 overflow-hidden border-r bg-white">
          <SideNav />
        </div>
      )}

      {/* Column 2: Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-[72px]">
        {/* Fixed Header Section */}
        <div className="sticky top-0 z-50 bg-white">
          <NavFull title="Propriétés" />
        </div>

        {/* Scrollable Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Main content goes here */}
          <div className="container mx-auto px-4 py-6">
            {/* Your main content components */}
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        {isMobile && <BottomNav />}
      </div>
    </div>
  );
};

export default Property;