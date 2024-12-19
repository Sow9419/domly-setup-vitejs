import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NavBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full md:w-1/2 bg-white/80 backdrop-blur-sm z-20 p-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <ArrowLeft className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-medium text-gray-900">Retour</span>
      </button>
    </div>
  );
};