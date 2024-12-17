import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/back-button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    toast({
      title: "Email envoyé",
      description: "Si un compte existe avec cette adresse, vous recevrez un email de réinitialisation.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <BackButton to="/login" />
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 pt-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center relative">
            <h1 className="text-2xl font-bold mt-16">Mot de passe oublié ?</h1>
            <p className="text-sm text-gray-600 mt-2">
              Entrez votre email pour réinitialiser votre mot de passe
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
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
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
              Envoyer les instructions
            </Button>
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
            Retrouvez l'accès à votre compte LocationMaison
          </h1>
          <p className="text-xl mb-8">
            Nous vous aiderons à récupérer votre compte en toute sécurité
          </p>
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

export default ForgotPassword;
