import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function SecurityCard() {
  return (
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
  );
}