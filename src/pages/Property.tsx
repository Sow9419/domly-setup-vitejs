import NavFull from '@/components/layout/NavFull';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PieChart } from 'lucide-react';
import PropertyDashboard from '@/components/property/PropertyDashboard';
import PropertyStats from '@/components/property/PropertyStats';
import PropertyList from '@/components/property/PropertyList';
import { useEffect, useState } from 'react';

const Property = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    setIsLoading(false);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Layout Mobile
  const MobileLayout = () => (
    <div className="min-h-screen flex flex-col">
      <NavFull title="Propriétés" />
      <main className="flex-1 overflow-y-auto pt-16 pb-16 px-4">
        <PropertyStats />
        <PropertyList />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="fixed bottom-20 right-4 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
            >
              <PieChart className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
            <PropertyDashboard />
          </SheetContent>
        </Sheet>
      </main>
      <BottomNav />
    </div>
  );

  // Layout Desktop
  const DesktopLayout = () => (
    <div className="min-h-screen flex">
      <div className="w-[72px] fixed left-0 top-0 bottom-0 overflow-hidden border-r bg-white">
        <SideNav />
      </div>
      <div className="flex-1 flex flex-col ml-[72px]">
        <NavFull title="Propriétés" />
        <main className="flex-1 overflow-y-auto pt-16 px-6">
          <PropertyStats />
          <PropertyList />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
              >
                <PieChart className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[600px] sm:w-[540px] overflow-y-auto">
              <PropertyDashboard />
            </SheetContent>
          </Sheet>
        </main>
      </div>
    </div>
  );

  if (isLoading) {
    return null;
  }

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Property;