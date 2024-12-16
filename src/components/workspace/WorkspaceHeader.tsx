import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const WorkspaceHeader = () => (
  <div className="text-center">
    <Link
      to="/create-profile"
      className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 absolute left-8 top-8"
    >
      <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
        <ArrowLeft className="w-5 h-5" />
      </div>
      <span>Retour</span>
    </Link>
    <h1 className="text-2xl font-bold">Créez votre espace de travail</h1>
    <p className="text-sm text-gray-600 mt-2">
      Configurez votre profil en moins de 2 minutes
    </p>
  </div>
);