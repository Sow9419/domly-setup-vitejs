import NavFull from '@/components/layout/NavFull';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
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
      <NavFull title="Propriétés" />
      <div className="flex-1 flex overflow-hidden">
        {!isMobile && (
          <div className="w-[72px] overflow-x-auto border-r bg-white hide-scrollbar">
            <SideNav />
          </div>
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Main content area */}
          <div className="flex-1 p-4">
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
