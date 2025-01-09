import { lazy, Suspense, useState } from 'react';
import NavFull from '@/components/layout/NavFull';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Palette, Bell, Lock, ReceiptIcon as Payment, Settings } from 'lucide-react';
import { ProfileCard } from '@/components/profile/ProfileCard';
import { PreferencesCard } from '@/components/profile/PreferencesCard';
import { NotificationsCard } from '@/components/profile/NotificationsCard';
import { SecurityCard } from '@/components/profile/SecurityCard';
import { PaymentMethodsCard } from '@/components/profile/PaymentMethodsCard';
import { AdvancedOptionsCard } from '@/components/profile/AdvancedOptionsCard';

const SideNav = lazy(() => import('@/components/layout/SideNav'));
const BottomNav = lazy(() => import('@/components/layout/BottomNav'));

export default function Profile() {
  const isMobile = window.innerWidth < 768;
  const [profileImage, setProfileImage] = useState("/placeholder.svg?height=80&width=80");
  const [paymentMethods, setPaymentMethods] = useState<Array<{
    type: string;
    label: string;
    expiry: string;
    isActive: boolean;
  }>>([
    { type: 'card', label: 'Carte Bancaire', expiry: '31/12/2024', isActive: true }
  ]);

  const handleProfileImageUpdate = (newImageUrl: string) => {
    setProfileImage(newImageUrl);
  };

  const handleAddPaymentMethod = (newMethod: { type: string; label: string; expiry: string }) => {
    setPaymentMethods([...paymentMethods, { ...newMethod, isActive: true }]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavFull title="Profil" className="fixed top-0 left-0 right-0 z-50" />
      
      <div className="flex-1 flex overflow-hidden pt-16">
        <Suspense fallback={null}>
          {!isMobile && (
            <div className="w-[72px] fixed left-0 top-16 bottom-0 overflow-hidden border-r bg-white">
              <SideNav />
            </div>
          )}
        </Suspense>
        
        <div className="flex-1 flex flex-col overflow-hidden ml-0 md:ml-[72px]">
          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <h1 className="text-2xl font-bold text-gray-700 mb-6">Paramètres</h1>
              
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid grid-cols-3 lg:hidden mb-8 sticky top-0 bg-white z-10">
                  <TabsTrigger value="profile" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="hidden sm:inline">Profil</span>
                  </TabsTrigger>
                  <TabsTrigger value="preferences" className="flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    <span className="hidden sm:inline">Préférences</span>
                  </TabsTrigger>
                  <TabsTrigger value="security" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    <span className="hidden sm:inline">Sécurité</span>
                  </TabsTrigger>
                </TabsList>

                <div className="grid lg:grid-cols-[200px_1fr] gap-8">
                  <Card className="hidden lg:block p-2 h-fit sticky top-4">
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}>
                        <User className="mr-2 h-4 w-4" />
                        Profil
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('preferences')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Palette className="mr-2 h-4 w-4" />
                        Préférences
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('notifications')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('security')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Lock className="mr-2 h-4 w-4" />
                        Sécurité
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Payment className="mr-2 h-4 w-4" />
                        Paiement
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('advanced')?.scrollIntoView({ behavior: 'smooth' })}>
                        <Settings className="mr-2 h-4 w-4" />
                        Avancé
                      </Button>
                    </div>
                  </Card>

                  <div className="space-y-6">
                    <TabsContent value="profile" className="m-0">
                      <div className="space-y-6">
                        <ProfileCard 
                          profileImage={profileImage}
                          onImageUpload={handleProfileImageUpdate}
                        />
                        <PreferencesCard />
                      </div>
                    </TabsContent>

                    <TabsContent value="preferences" className="m-0">
                      <NotificationsCard />
                    </TabsContent>

                    <TabsContent value="security" className="m-0 space-y-6">
                      <SecurityCard />
                      <PaymentMethodsCard 
                        paymentMethods={paymentMethods}
                        onAddPaymentMethod={handleAddPaymentMethod}
                      />
                      <AdvancedOptionsCard />
                    </TabsContent>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        {isMobile && <BottomNav />}
      </Suspense>
    </div>
  );
}
