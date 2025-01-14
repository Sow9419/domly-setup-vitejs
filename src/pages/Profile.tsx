import { lazy, Suspense, useEffect, useState } from 'react';
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
import { useIsMobile } from '@/hooks/use-mobile';

const SideNav = lazy(() => import('@/components/layout/SideNav'));
const BottomNav = lazy(() => import('@/components/layout/BottomNav'));

export default function Profile() {
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

  // Layout Mobile
  const MobileLayout = () => (
    <div className="min-h-screen flex flex-col">
      <NavFull title="Profil" />
      
      <main className="flex-1 overflow-y-auto pt-16 pb-16">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-700 mb-6">Paramètres</h1>
          
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid grid-cols-5 mb-8 sticky top-0 bg-white">
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
                  {/* Onglet Avancé */}
                  {/* <TabsTrigger value="advanced" className={`flex items-center gap-2 ${activeSection === 'advanced' ? 'text-blue-500' : 'text-gray-500'}`}>
                    <Settings className={`h-6 w-6 ${activeSection === 'advanced' ? 'text-blue-500' : 'text-gray-500'}`} />
                    <span className="hidden sm:inline">Avancé</span>
                  </TabsTrigger>*/}
            </TabsList>

            <div className="space-y-6">
              <TabsContent value="profile">
                <ProfileCard profileImage={profileImage} onImageUpload={setProfileImage} />
              </TabsContent>
              <TabsContent value="preferences">
                <PreferencesCard />
              </TabsContent>
              <TabsContent value="notifications">
                <NotificationsCard />
              </TabsContent>
              <TabsContent value="security">
                <SecurityCard />
              </TabsContent>
              <TabsContent value="payment">
                <PaymentMethodsCard 
                  paymentMethods={paymentMethods}
                  onAddPaymentMethod={(method) => setPaymentMethods([...paymentMethods, { ...method, isActive: true }])}
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>

      <BottomNav />
    </div>
  );

  // Layout Desktop
  const DesktopLayout = () => (
    <div className="min-h-screen flex">
      <Suspense fallback={null}>
        <div className="w-[72px] fixed left-0 top-0 bottom-0 overflow-hidden border-r bg-white">
          <SideNav />
        </div>
      </Suspense>
      
      <div className="flex-1 flex flex-col ml-[72px]">
        <NavFull title="Profil" />
        
        <main className="flex-1 overflow-y-auto pt-16">
          <div className="container mx-auto px-8 py-6">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">Paramètres</h1>
            
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <div className="grid lg:grid-cols-[200px_1fr] gap-8">
                <Card className="p-2 h-fit sticky top-4">
                  <div className="space-y-1">
                    <Button 
                      variant="ghost" 
                      className={`w-full justify-start ${activeSection === 'profile' ? 'text-blue-500 bg-blue-50' : ''}`}
                      onClick={() => setActiveSection('profile')}
                    >
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
                      {/* Bouton Avancé */}
                      {/*<Button variant="ghost" className={`w-full justify-start ${activeSection === 'advanced' ? 'text-blue-500 bg-blue-50' : ''}`} onClick={() => setActiveSection('advanced')}>
                        <Settings className="mr-2 h-4 w-4" />
                        Avancé
                      </Button>*/}
                  </div>
                </Card>

                <div className="space-y-6">
                  <TabsContent value="profile">
                    <ProfileCard profileImage={profileImage} onImageUpload={setProfileImage} />
                  </TabsContent>
                  <TabsContent value="preferences">
                    <PreferencesCard />
                  </TabsContent>
                  <TabsContent value="notifications">
                    <NotificationsCard />
                  </TabsContent>
                  <TabsContent value="security">
                    <SecurityCard />
                  </TabsContent>
                  <TabsContent value="payment">
                    <PaymentMethodsCard 
                      paymentMethods={paymentMethods}
                      onAddPaymentMethod={(method) => setPaymentMethods([...paymentMethods, { ...method, isActive: true }])}
                    />
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
  // Affichage conditionnel basé sur isMobile et isLoading
  if (isLoading) {
    return null; // Affichage vide pendant le calcul de la taille
  }

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
}
