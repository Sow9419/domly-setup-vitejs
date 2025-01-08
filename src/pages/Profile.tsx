import NavFull from "@/components/layout/NavFull";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { User, Settings } from "lucide-react";

const Profile = () => {
  const isMobile = useIsMobile();
  
  console.log("Profile page rendering, isMobile:", isMobile);

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
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-gray-500" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-gray-500">Membre depuis 2024</p>
                </div>
              </div>

              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <User className="mr-2 h-5 w-5" />
                  Informations personnelles
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Settings className="mr-2 h-5 w-5" />
                  Paramètres du compte
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom navigation for mobile */}
      {isMobile && <BottomNav />}
    </div>
  );
};

export default Profile;