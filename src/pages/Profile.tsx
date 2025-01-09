import { lazy, Suspense } from 'react';
import NavFull from '@/components/layout/NavFull';
import { useIsMobile } from '@/hooks/use-mobile';

// Lazy load navigation components
const SideNav = lazy(() => import('@/components/layout/SideNav'));
const BottomNav = lazy(() => import('@/components/layout/BottomNav'));

const Profile = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col">
      <NavFull title="Profil" />
      
      <div className="flex-1 flex overflow-hidden">
        <Suspense fallback={null}>
          {!isMobile && (
            <div className="w-[72px] overflow-x-auto border-r bg-white hide-scrollbar">
              <SideNav />
            </div>
          )}
        </Suspense>
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 p-4">
            {/* Main content goes here */}
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        {isMobile && <BottomNav />}
      </Suspense>
    </div>
  );
};

export default Profile;