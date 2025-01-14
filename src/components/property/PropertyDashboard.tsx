import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 150000, expenses: 65000 },
  { name: 'Fév', revenue: 180000, expenses: 70000 },
  { name: 'Mar', revenue: 160000, expenses: 68000 },
  { name: 'Avr', revenue: 200000, expenses: 75000 },
  { name: 'Mai', revenue: 190000, expenses: 72000 },
  { name: 'Jun', revenue: 220000, expenses: 80000 },
];

const PropertyDashboard = () => {
  return (
    <div className="space-y-6 py-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <p className="text-muted-foreground">
          Optimisez vos revenus et suivez la performance de vos biens
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Aperçu des Revenus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#0EA5E9"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="expenses"
                  stroke="#F43F5E"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Prochain Paiement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">111.000 FCFA</div>
            <p className="text-xs text-muted-foreground mt-1">
              +2.5% par rapport au mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total des Dettes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">111.000 FCFA</div>
            <p className="text-xs text-muted-foreground mt-1">
              4 locataires en retard
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PropertyDashboard;