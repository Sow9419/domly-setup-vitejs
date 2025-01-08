import { useState } from "react";
import NavFull from "@/components/layout/NavFull";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { DollarSign, Users, Home, ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";

const data = [
  { name: "Jan", individual: 4000, business: 2400 },
  { name: "Feb", individual: 3000, business: 1398 },
  { name: "Mar", individual: 2000, business: 9800 },
  { name: "Apr", individual: 2780, business: 3908 },
  { name: "May", individual: 1890, business: 4800 },
  { name: "Jun", individual: 2390, business: 3800 },
];

const Dashboard = () => {
  const [selectedProperty] = useState(properties[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavFull showBackButton title="Dashboard" />

      <main className="pt-20 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-2xl font-bold">11.000 FCFA</h3>
                </div>
              </div>
              <div className="mt-4 h-[60px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line 
                      type="monotone" 
                      dataKey="individual" 
                      stroke="#3b82f6" 
                      strokeWidth={2} 
                      dot={false} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Prochaine paiement</p>
                  <h3 className="text-2xl font-bold">125</h3>
                </div>
              </div>
              <div className="mt-4 h-[60px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar dataKey="business" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Users className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Client</p>
                  <h3 className="text-2xl font-bold">2</h3>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Home className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total logement</p>
                  <h3 className="text-2xl font-bold">2</h3>
                </div>
              </div>
            </Card>
          </div>

          {/* Properties Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Mes Propriétés</h2>
              <Button variant="ghost" className="text-primary">
                See all <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[selectedProperty].map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <img
                    src={property.images[0].url}
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-sm text-gray-500">{property.location}</p>
                      </div>
                      <div className="bg-green-100 px-2 py-1 rounded-full">
                        <span className="text-sm text-green-600">Paiement à jour</span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Loyer mensuel: {property.price.toLocaleString()} FCFA
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Revenue Chart */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Overview</h2>
              <Button variant="outline">Export</Button>
            </div>

            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="individual" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    name="Individuals"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="business" 
                    stroke="#22c55e" 
                    strokeWidth={2}
                    name="Businesses"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;