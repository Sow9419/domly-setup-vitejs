import NavFull from '@/components/layout/NavFull';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { Suspense } from 'react';

const Property = () => {
  const isMobile = window.innerWidth < 768;
  
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
          <NavFull title="Propriétés" />
        </div>

        {/* Row 2: Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Main content goes here */}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Property;