import { DollarSign, Users, Home } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PropertyStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="flex items-center p-6">
          <div className="rounded-full bg-blue-500/10 p-3 mr-4">
            <DollarSign className="h-6 w-6 text-blue-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Revenus</p>
            <h4 className="text-2xl font-bold">444.000 FCFA</h4>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50 to-green-100">
        <CardContent className="flex items-center p-6">
          <div className="rounded-full bg-green-500/10 p-3 mr-4">
            <Users className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Locataires</p>
            <h4 className="text-2xl font-bold">125</h4>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
        <CardContent className="flex items-center p-6">
          <div className="rounded-full bg-purple-500/10 p-3 mr-4">
            <Home className="h-6 w-6 text-purple-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Propriétés</p>
            <h4 className="text-2xl font-bold">12</h4>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyStats;