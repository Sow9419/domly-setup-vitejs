import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  console.log("Rendering Index page"); // Adding console log to track page render

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur LocationMaison</h1>
        <p className="text-xl text-gray-600 mb-8">Trouvez la maison de vos rêves!</p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/login">Se connecter</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/signup">S'inscrire</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;