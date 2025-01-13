import NavFull from '@/components/layout/NavFull';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { Suspense } from 'react';
const Property = () => {
  const isMobile = window.innerWidth < 768;
  const renderNavigation = () => {
    if (isMobile) {
      return <BottomNav />;
    }
    return <SideNav />;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavFull title="Propriétés"/>
      <div className="flex-1 flex overflow-hidden">
        <Suspense fallback={null}>
        {!isMobile && (
          <div className="w-[72px] overflow-x-auto border-r bg-white hide-scrollbar">
            <SideNav />
          </div>
        )}
        </Suspense>

        <div className="flex-1 flex flex-col overflow-hidden ml-0 md:ml-[72px]">
          {/* Main content area */}
          <div className="flex-1 overflow-y-auto">
            {/* Main content goes here */}
          </div>
        </div>
      </div>

      {isMobile && <BottomNav />}
    </div>
  );
  return renderNavigation();
};

export default Property;
