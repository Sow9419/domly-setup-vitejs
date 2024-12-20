import { NavBackButton } from "@/components/auth/NavBackButton";
import { AuthContent } from "@/components/auth/AuthContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Shield } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset password for:", email);
    toast({
      title: "Email envoyé",
      description: "Vérifiez votre boîte de réception pour réinitialiser votre mot de passe",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative">
        <NavBackButton />
        <div className="h-full overflow-y-auto pt-16">
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <h1 className="text-2xl font-bold">Mot de passe oublié ?</h1>
                <p className="text-sm text-gray-600 mt-2">
                  Entrez votre email pour réinitialiser votre mot de passe
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Réinitialiser le mot de passe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 fixed right-0 h-screen">
        <AuthContent
          title="Récupérez votre compte"
          subtitle="Nous vous aidons à récupérer l'accès"
          features={[
            {
              icon: <Lock />,
              text: "Processus simple et rapide"
            },
            {
              icon: <Shield />,
              text: "Sécurité renforcée"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default ForgotPassword;