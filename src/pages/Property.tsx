import NavFull from '@/components/layout/NavFull';
import SideNav from '@/components/layout/SideNav';
import BottomNav from '@/components/layout/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

const Property = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true); // État pour gérer le flash de rendu
  
    useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      checkIsMobile(); // Vérification initiale
  
      window.addEventListener('resize', checkIsMobile);
  
      // Désactivation de l'état de "chargement" après le premier calcul
      setIsLoading(false);
  
      return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
  
  

  // Layout Mobile
  const MobileLayout = () => (
    <div className="min-h-screen flex flex-col">
      <NavFull title="Propriétés"/>
      <main className="flex-1 overflow-y-auto pt-16 pb-16">
        {/* Main content goes here */}
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
        <NavFull title="Propriétés"/>
        <main className="flex-1 overflow-y-auto pt-16">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
  // Affichage conditionnel basé sur isMobile et isLoading
  if (isLoading) {
    return null; // Affichage vide pendant le calcul de la taille
  }
  return isMobile ? <MobileLayout /> : <DesktopLayout />;
  
};

export default Property;