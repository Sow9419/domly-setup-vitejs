import { useState } from "react";
import NavFull from "@/components/layout/NavFull";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const data = [
  { name: 'Jan', value: 100000 },
  { name: 'Feb', value: 150000 },
  { name: 'Mar', value: 80000 },
  { name: 'Apr', value: 120000 },
  { name: 'May', value: 200000 },
];

const Dashboard = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [selectedProperty] = useState("Appartement Moderne - Paris 16eme");

  return (
    <div className="min-h-screen bg-gray-50">
      <NavFull />
      
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4">
            <h3 className="text-sm text-gray-500 mb-2">Total Revenue</h3>
            <p className="text-2xl font-bold">11.000 FCFA</p>
            <div className="h-[50px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <Line type="monotone" dataKey="value" stroke="#9b87f5" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-4">
            <h3 className="text-sm text-gray-500 mb-2">Prochaine paiement</h3>
            <p className="text-2xl font-bold">125</p>
          </Card>

          <Card className="p-4">
            <h3 className="text-sm text-gray-500 mb-2">Total Client</h3>
            <p className="text-2xl font-bold">2</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#9b87f5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Effectuer un Paiement</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Propriété
                </label>
                <div className="border rounded-md p-3">
                  {selectedProperty}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Montant
                </label>
                <input
                  type="number"
                  className="w-full border rounded-md p-3"
                  placeholder="0.00"
                />
              </div>

              <Button className="w-full">
                Payer Maintenant
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;