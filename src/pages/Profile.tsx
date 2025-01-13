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
  const [activeSection, setActiveSection] = useState('profile');

  const handleProfileImageUpdate = (newImageUrl: string) => {
    setProfileImage(newImageUrl);
  };

  const handleAddPaymentMethod = (newMethod: { type: string; label: string; expiry: string }) => {
    setPaymentMethods([...paymentMethods, { ...newMethod, isActive: true }]);
  };

  return (
    <div className="h-screen flex">
      {/* Column 1: Fixed Sidebar */}
      <Suspense fallback={null}>
        {!isMobile && (
          <div className="w-[72px] h-screen flex-shrink-0 border-r bg-white">
            <SideNav />
          </div>
        )}
      </Suspense>

      {/* Column 2: Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Row 1: Fixed Header Section */}
        <div className="flex-shrink-0">
          <NavFull title="Profil" className="border-b" />
        </div>

        {/* Row 2: Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Paramètres</h1>
            
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <TabsList className="grid grid-cols-5 lg:hidden mb-8 sticky top-0 bg-white">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"></div>
                <div className={`absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300`} style={{ width: `${100 / 5}%`, transform: `translateX(${activeSection === 'profile' ? 0 : activeSection === 'preferences' ? 1 : activeSection === 'notifications' ? 2 : activeSection === 'security' ? 3 : activeSection === 'payment' ? 4 : 5}00%)` }}></div>
                {/* Onglet Profil */}
                <TabsTrigger value="profile" className={`flex items-center gap-2 ${activeSection === 'profile' ? 'text-blue-500' : 'text-gray-500'}`}>
                  <User className={`h-6 w-6 ${activeSection === 'profile' ? 'text-blue-500' : 'text-gray-500'}`} />
                  <span className="hidden sm:inline">Profil</span>
                </TabsTrigger>
                {/* Onglet Préférences */}
                <TabsTrigger value="preferences" className={`flex items-center gap-2 ${activeSection === 'preferences' ? 'text-blue-500' : 'text-gray-500'}`}>
                  <Palette className={`h-6 w-6 ${activeSection === 'preferences' ? 'text-blue-500' : 'text-gray-500'}`} />
                  <span className="hidden sm:inline">Préférences</span>
                </TabsTrigger>
                {/* Onglet Notifications */}
                <TabsTrigger value="notifications" className={`flex items-center gap-2 ${activeSection === 'notifications' ? 'text-blue-500' : 'text-gray-500'}`}>
                  <Bell className={`h-6 w-6 ${activeSection === 'notifications' ? 'text-blue-500' : 'text-gray-500'}`} />
                  <span className="hidden sm:inline">Notifications</span>
                </TabsTrigger>
                {/* Onglet Sécurité */}
                <TabsTrigger value="security" className={`flex items-center gap-2 ${activeSection === 'security' ? 'text-blue-500' : 'text-gray-500'}`}>
                  <Lock className={`h-6 w-6 ${activeSection === 'security' ? 'text-blue-500' : 'text-gray-500'}`} />
                  <span className="hidden sm:inline">Sécurité</span>
                </TabsTrigger>
                {/* Onglet Paiement */}
                <TabsTrigger value="payment" className={`flex items-center gap-2 ${activeSection === 'payment' ? 'text-blue-500' : 'text-gray-500'}`}>
                  <Payment className={`h-6 w-6 ${activeSection === 'payment' ? 'text-blue-500' : 'text-gray-500'}`} />
                  <span className="hidden sm:inline">Paiement</span>
                </TabsTrigger>
              </TabsList>

              <div className="grid lg:grid-cols-[200px_1fr] gap-8">
                <Card className="hidden lg:block p-2 h-fit sticky top-4">
                  <div className="space-y-1">
                    {/* Bouton Profil */}
                    <Button variant="ghost" className={`w-full justify-start ${activeSection === 'profile' ? 'text-blue-500 bg-blue-50' : ''}`} onClick={() => setActiveSection('profile')}>
                      <User className="mr-2 h-4 w-4" />
                      Profil
                    </Button>
                    {/* Bouton Préférences */}
                    <Button variant="ghost" className={`w-full justify-start ${activeSection === 'preferences' ? 'text-blue-500 bg-blue-50' : ''}`} onClick={() => setActiveSection('preferences')}>
                      <Palette className="mr-2 h-4 w-4" />
                      Préférences
                    </Button>
                    {/* Bouton Notifications */}
                    <Button variant="ghost" className={`w-full justify-start ${activeSection === 'notifications' ? 'text-blue-500 bg-blue-50' : ''}`} onClick={() => setActiveSection('notifications')}>
                      <Bell className="mr-2 h-4 w-4" />
                      Notifications
                    </Button>
                    {/* Bouton Sécurité */}
                    <Button variant="ghost" className={`w-full justify-start ${activeSection === 'security' ? 'text-blue-500 bg-blue-50' : ''}`} onClick={() => setActiveSection('security')}>
                      <Lock className="mr-2 h-4 w-4" />
                      Sécurité
                    </Button>
                    {/* Bouton Paiement */}
                    <Button variant="ghost" className={`w-full justify-start ${activeSection === 'payment' ? 'text-blue-500 bg-blue-50' : ''}`} onClick={() => setActiveSection('payment')}>
                      <Payment className="mr-2 h-4 w-4" />
                      Paiement
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
                    </div>
                  </TabsContent>

                  <TabsContent value="preferences" className="m-0">
                    <PreferencesCard />
                  </TabsContent>

                  <TabsContent value="notifications" className="m-0">
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

                  <TabsContent value="payment" className="m-0">
                    <PaymentMethodsCard 
                      paymentMethods={paymentMethods}
                      onAddPaymentMethod={handleAddPaymentMethod}
                    />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <Suspense fallback={null}>
        {isMobile && <BottomNav />}
      </Suspense>
    </div>
  );
}
