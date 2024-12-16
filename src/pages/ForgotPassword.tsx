import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    toast({
      title: "Email envoyé",
      description: "Vérifiez votre boîte mail pour réinitialiser votre mot de passe",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-50 flex items-center px-8 border-b">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </div>
          <span>Retour</span>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center p-8 mt-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Réinitialiser le mot de passe</h1>
            <p className="text-sm text-gray-600 mt-2">
              Entrez votre email pour recevoir un lien de réinitialisation
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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

            <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
              Envoyer le lien de réinitialisation
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Vous avez déjà un compte ?{" "}
                <Link to="/login" className="text-[#9b87f5] hover:text-[#7E69AB]">
                  Se connecter
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
