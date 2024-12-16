import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const WorkspaceHeader = () => (
  <div className="text-center">
    <Link
      to="/create-profile"
      className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8"
    >
      <ArrowLeft className="w-4 h-4 mr-2" />
      Retour
    </Link>
    <h1 className="text-2xl font-bold">Créez votre espace de travail</h1>
    <p className="text-sm text-gray-600 mt-2">
      Configurez votre profil en moins de 2 minutes
    </p>
  </div>
);