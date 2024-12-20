import { SignupForm } from "@/components/auth/SignupForm";
import { AuthContent } from "@/components/auth/AuthContent";
import { NavBackButton } from "@/components/auth/NavBackButton";
import { Search, Users, Clock } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 relative">
        <NavBackButton />
        <div className="h-full overflow-y-auto pt-16">
          <div className="flex items-center justify-center">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 fixed right-0 h-screen">
        <AuthContent
          title="Trouvez votre chez-vous avec DomHyn!"
          subtitle="La meilleure plateforme pour trouver votre logement idéal"
          features={[
            {
              icon: <Search />,
              text: "Plus de 50.000+ propriétés disponibles"
            },
            {
              icon: <Users />,
              text: "Des agents immobiliers à votre service"
            },
            {
              icon: <Clock />,
              text: "Support client 24/7"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Signup;