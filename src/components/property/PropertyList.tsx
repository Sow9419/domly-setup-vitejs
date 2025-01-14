import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { properties } from '@/data/properties';

const PropertyList = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Mes Propriétés</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {properties.slice(0, 6).map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={property.images[0].url}
              alt={property.images[0].alt}
              className="h-48 w-full object-cover"
            />
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{property.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{property.location}</p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  property.status === "Disponible" 
                    ? "bg-green-100 text-green-700" 
                    : "bg-orange-100 text-orange-700"
                }`}>
                  {property.status}
                </span>
                <p className="font-semibold">{property.price.toLocaleString()} FCFA</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;