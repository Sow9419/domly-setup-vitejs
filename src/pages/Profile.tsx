import { useState } from "react";
import NavFull from "@/components/layout/NavFull";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SideNav from "@/components/layout/SideNav";
import BottomNav from "@/components/layout/BottomNav";

const Profile = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [messages, setMessages] = useState(true);
  const [rentPayments, setRentPayments] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavFull title="Paramètres" />
      <SideNav />

      <main className="pt-20 pb-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Profile Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-xl font-semibold">Jean Dupont</h2>
                <p className="text-gray-500">jean.dupont@email.com</p>
              </div>
            </div>
            <Button className="mt-4" variant="outline">
              Modifier le profil
            </Button>
          </div>

          {/* Personalization */}
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Personnalisation</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Thème</span>
                <Select defaultValue="light">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Thème" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Clair</SelectItem>
                    <SelectItem value="dark">Sombre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-between items-center">
                <span>Langue</span>
                <Select defaultValue="fr">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Notifications</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Notifications push</span>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>

              <div className="flex justify-between items-center">
                <span>Messages</span>
                <Switch
                  checked={messages}
                  onCheckedChange={setMessages}
                />
              </div>

              <div className="flex justify-between items-center">
                <span>Paiement de location</span>
                <Switch
                  checked={rentPayments}
                  onCheckedChange={setRentPayments}
                />
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
            <h3 className="text-lg font-semibold">Confidentialité et Sécurité</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Profil public</span>
                <Switch
                  checked={publicProfile}
                  onCheckedChange={setPublicProfile}
                />
              </div>

              <Button variant="ghost" className="w-full justify-start text-gray-600">
                Gérer les données personnelles
              </Button>
            </div>
          </div>

          {/* Advanced Options */}
          <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold">Options avancées</h3>
            
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              Aide et support
            </Button>
            
            <Button variant="ghost" className="w-full justify-start text-gray-600">
              Conditions d'utilisation
            </Button>
            
            <Button variant="ghost" className="w-full justify-start text-destructive">
              Réinitialiser les paramètres
            </Button>

            <div className="pt-4 text-center text-sm text-gray-500">
              Version de l'application: 2.1.0
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;