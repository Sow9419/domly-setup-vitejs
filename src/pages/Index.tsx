import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Sidebar } from "@/components/layout/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="pl-16">
        <div className="relative h-[600px] bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80')`
        }}>
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
              <h1 className="text-5xl font-bold mb-4">
                Trouvez votre lieu de séjour idéal
              </h1>
              <p className="text-xl mb-8">
                Les meilleurs prix pour des milliers de propriétés dans le monde
              </p>
              
              <div className="w-full max-w-4xl bg-white rounded-lg p-4 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Select>
                    <option>Tout les hébergements</option>
                    <option>Villa</option>
                    <option>Hôtel</option>
                    <option>Appartement</option>
                  </Select>
                  
                  <input
                    type="text"
                    placeholder="Destination"
                    className="rounded-md border border-gray-300 px-4 py-2"
                  />
                  
                  <Select>
                    <option>2 chambres salon</option>
                  </Select>
                  
                  <Button className="bg-primary hover:bg-primary-hover text-white">
                    <Search className="w-4 h-4 mr-2" />
                    Rechercher un hébergement
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Recommandations pour vous</h2>
            <Button variant="outline">Filtres</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
                  alt="Property"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Appartement de luxe à Paris</h3>
                  <p className="text-gray-600">150.000FCFA par mois</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;