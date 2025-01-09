import { lazy, Suspense, useState } from 'react';
import NavFull from '@/components/layout/NavFull';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CreditCard, Phone, User, Palette, Bell, Lock, ReceiptIcon as Payment, Settings } from 'lucide-react';
import { UploadDialog } from '@/components/profile/upload-dialog';
import { PaymentDialog } from '@/components/profile/payment-dialog';

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
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <h1 className="text-2xl font-bold text-gray-700 mb-6">Paramètres</h1>
              
              <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid grid-cols-3 lg:hidden mb-8">
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
                  <Card className="hidden lg:block p-2 h-fit">
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('profile')?.scrollIntoView()}>
                        <User className="mr-2 h-4 w-4" />
                        Profil
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('preferences')?.scrollIntoView()}>
                        <Palette className="mr-2 h-4 w-4" />
                        Préférences
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('notifications')?.scrollIntoView()}>
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('security')?.scrollIntoView()}>
                        <Lock className="mr-2 h-4 w-4" />
                        Sécurité
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('payment')?.scrollIntoView()}>
                        <Payment className="mr-2 h-4 w-4" />
                        Paiement
                      </Button>
                      <Button variant="ghost" className="w-full justify-start" onClick={() => document.getElementById('advanced')?.scrollIntoView()}>
                        <Settings className="mr-2 h-4 w-4" />
                        Avancé
                      </Button>
                    </div>
                  </Card>

                  <div className="space-y-6">
                    <TabsContent value="profile" className="m-0">
                      <div className="space-y-6">
                        <Card className="p-6" id="profile">
                          <h2 className="text-lg font-semibold mb-4">Profil</h2>
                          <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="relative">
                              <img
                                key={profileImage}
                                src={profileImage}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src = "/placeholder.svg?height=80&width=80";
                                }}
                              />
                              <UploadDialog onImageUpload={handleProfileImageUpdate} />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                              <h2 className="text-xl font-semibold">Jean Dupont</h2>
                              <p className="text-gray-500">jean.dupont@email.com</p>
                            </div>
                            <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600">
                              Modifier le profil
                            </Button>
                          </div>
                        </Card>

                        <Card className="p-6" id="preferences">
                          <h2 className="text-lg font-semibold mb-4">Personnalisation</h2>
                          <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                              <span>Thème</span>
                              <Select defaultValue="light">
                                <SelectTrigger className="w-full sm:w-[180px]">
                                  <SelectValue placeholder="Clair" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="light">Clair</SelectItem>
                                  <SelectItem value="dark">Sombre</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                              <span>Langue</span>
                              <Select defaultValue="fr">
                                <SelectTrigger className="w-full sm:w-[180px]">
                                  <SelectValue placeholder="Français" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="fr">Français</SelectItem>
                                  <SelectItem value="en">English</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                              <span>Taille du texte</span>
                              <Select defaultValue="small">
                                <SelectTrigger className="w-full sm:w-[180px]">
                                  <SelectValue placeholder="Petit" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="small">Petit</SelectItem>
                                  <SelectItem value="medium">Moyen</SelectItem>
                                  <SelectItem value="large">Grand</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </TabsContent>

                    <TabsContent value="preferences" className="m-0">
                      <Card className="p-6" id="notifications">
                        <h2 className="text-lg font-semibold mb-4">Notifications</h2>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Notifications push</span>
                            <Switch />
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Messages</span>
                            <Switch />
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Paiement de location</span>
                            <Switch />
                          </div>
                        </div>
                      </Card>
                    </TabsContent>

                    <TabsContent value="security" className="m-0 space-y-6">
                      <Card className="p-6" id="security">
                        <h2 className="text-lg font-semibold mb-4">Confidentialité et Sécurité</h2>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Profil public</span>
                            <Switch />
                          </div>
                          <Button variant="ghost" className="w-full justify-center text-gray-600">
                            Gérer les données personnelles
                          </Button>
                        </div>
                      </Card>

                      <Card className="p-6" id="payment">
                        <h2 className="text-lg font-semibold mb-4">Méthode de paiement</h2>
                        <div className="space-y-4">
                          {paymentMethods.map((method, index) => (
                            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-center gap-3 w-full sm:w-auto">
                                {method.type === 'card' ? <CreditCard className="w-6 h-6 shrink-0" /> : <Phone className="w-6 h-6 shrink-0" />}
                                <div className="flex-1">
                                  <div>{method.label}</div>
                                  {method.expiry && <div className="text-sm text-gray-500">Valide jusqu'au {method.expiry}</div>}
                                </div>
                              </div>
                              <span className="text-green-600 text-sm font-medium mt-2 sm:mt-0">Actif</span>
                            </div>
                          ))}
                          <PaymentDialog onAddPaymentMethod={handleAddPaymentMethod} />
                        </div>
                      </Card>

                      <Card className="p-6" id="advanced">
                        <h2 className="text-lg font-semibold mb-4">Options avancées</h2>
                        <div className="space-y-2">
                          <Button variant="ghost" className="w-full justify-center text-gray-600">
                            Aide et support
                          </Button>
                          <Button variant="ghost" className="w-full justify-center text-gray-600">
                            Conditions d'utilisation
                          </Button>
                          <Button variant="ghost" className="w-full justify-center text-red-600">
                            Réinitialiser les paramètres
                          </Button>
                          <div className="text-center text-sm text-gray-500 mt-4">
                            Version de l'application: 2.1.0
                          </div>
                        </div>
                      </Card>
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
