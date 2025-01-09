import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function AdvancedOptionsCard() {
  return (
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
  );
}