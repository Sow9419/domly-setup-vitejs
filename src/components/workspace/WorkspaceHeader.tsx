import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/back-button";

export const WorkspaceHeader = () => (
  <div className="text-center pt-20">
    <BackButton to="/create-profile" />
    <h1 className="text-2xl font-bold">Créez votre espace de travail</h1>
    <p className="text-sm text-gray-600 mt-2">
      Configurez votre profil en moins de 2 minutes
    </p>
  </div>
);

export default WorkspaceHeader;