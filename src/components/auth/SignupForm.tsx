import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { FcGoogle } from "react-icons/fc";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt with:", { email, password });
    toast({
      title: "Tentative d'inscription",
      description: "Fonctionnalité en cours de développement",
    });
  };

  return (
    <div className="w-full max-w-md space-y-8 p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Créer un compte</h2>
        <p className="text-sm text-gray-600 mt-2">Créez votre compte DomHyn</p>
      </div>

      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => toast({
            title: "Google Sign Up",
            description: "Fonctionnalité en cours de développement",
          })}
        >
          <FcGoogle className="w-5 h-5" />
          Continuer avec Google
        </Button>

        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
          onClick={() => toast({
            title: "Phone Sign Up",
            description: "Fonctionnalité en cours de développement",
          })}
        >
          <Phone className="w-5 h-5" />
          Continuer avec Téléphone
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              ou
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" id="terms" />
            <label htmlFor="terms" className="text-sm">
              J'accepte les conditions générales et la politique de confidentialité
            </label>
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
            S'inscrire
          </Button>
        </form>

        <p className="text-center text-sm">
          Vous avez déjà un compte?{" "}
          <Link to="/login" className="text-primary hover:text-primary-hover font-semibold">
            Se connecter
          </Link>
        </p>
      </div>

      <div className="text-center text-xs text-gray-500 space-x-4">
        <Link to="#" className="hover:text-gray-700">Conditions d'utilisation</Link>
        <Link to="#" className="hover:text-gray-700">Politique de confidentialité</Link>
        <Link to="#" className="hover:text-gray-700">Aide</Link>
      </div>
    </div>
  );
};