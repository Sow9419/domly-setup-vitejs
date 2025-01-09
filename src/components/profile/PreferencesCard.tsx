import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PreferencesCard() {
  return (
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
  );
}