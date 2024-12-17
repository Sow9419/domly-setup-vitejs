import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/back-button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    toast({
      title: "Connexion en cours",
      description: "Redirection vers votre espace...",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 pt-20">
        <div className="w-full max-w-md space-y-8">
          <BackButton to="/" />
          <div className="text-center">
            <h1 className="text-2xl font-bold">Connexion à votre compte</h1>
            <p className="text-sm text-gray-600 mt-2">
              Entrez vos identifiants pour accéder à votre espace
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Entrez votre email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              <div className="relative">
                <Input
                  type="password"
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-[#9b87f5] focus:ring-[#7E69AB]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Se souvenir de moi
                </label>
              </div>

              <Link
                to="/forgot-password"
                className="text-sm text-[#9b87f5] hover:text-[#7E69AB]"
              >
                Mot de passe oublié?
              </Link>
            </div>

            <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
              Se connecter
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Pas encore de compte ?{" "}
                <Link to="/signup" className="text-[#9b87f5] hover:text-[#7E69AB]">
                  S'inscrire
                </Link>
              </p>
            </div>
          </form>

          <div className="text-center text-xs text-gray-500 space-x-4">
            <Link to="#" className="hover:text-gray-700">
              Conditions d'utilisation
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Politique de confidentialité
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Aide
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">
            Trouvez votre chez-vous avec DomHyn!
          </h1>
          <p className="text-xl mb-8">Plus de 50.000+ propriétés disponibles</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury home interior"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Login;