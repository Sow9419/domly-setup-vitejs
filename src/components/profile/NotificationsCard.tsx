import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function NotificationsCard() {
  return (
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
  );
}