import React from "react";
import { Search, Users, Clock } from "lucide-react";
import { AuthContent } from "./AuthContent";

export const AuthRightSection = () => (
  <div className="relative h-full">
    <AuthContent
      title="Trouvez votre chez-vous avec LocationMaison!"
      subtitle="Plus de 50,000+ propriétés disponibles"
      features={[
        {
          icon: <Search className="w-6 h-6 text-white" />,
          text: "Recherche personnalisée"
        },
        {
          icon: <Users className="w-6 h-6 text-white" />,
          text: "Des agents immobiliers à votre service"
        },
        {
          icon: <Clock className="w-6 h-6 text-white" />,
          text: "Support client 24/7"
        }
      ]}
    />
  </div>
);