import NavFull from '@/components/layout/NavFull';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { Suspense } from 'react';

const Property = () => {
  const isMobile = window.innerWidth < 768;
  
  return (
    <div className="min-h-screen flex">
      {/* Mobile Layout */}
      {isMobile ? (
        <div className="flex flex-col w-full">
          <NavFull title="Propriétés" />
          <div className="flex-1 overflow-y-auto">
            {/* Main content goes here */}
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
              <NavFull title="Propriétés" />
            </div>

            {/* Scrollable Main Content */}
            <div className="pt-16">
              {/* Main content goes here */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Property;