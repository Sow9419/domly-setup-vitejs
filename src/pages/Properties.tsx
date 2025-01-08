import NavFull from "@/components/layout/NavFull";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import PropertyGrid from "@/components/layout/PropertyGrid";

const Properties = () => {
  const isMobile = useIsMobile();
  
  console.log("Properties page rendering, isMobile:", isMobile);

  return (
    <div className="h-screen flex flex-col">
      <NavFull />
      
      <div className="flex-1 flex overflow-hidden pt-20">
        {/* Sidebar for desktop */}
        {!isMobile && (
          <div className="w-[72px] overflow-y-auto border-r bg-white hide-scrollbar">
            <SideNav />
          </div>
        )}
        
        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className={`container mx-auto py-6 ${isMobile ? 'pb-24' : ''}`}>
            <h1 className="text-2xl font-bold mb-6">Mes Propriétés</h1>
            <PropertyGrid />
          </div>
        </main>
      </div>

      {/* Bottom navigation for mobile */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Properties;