import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const NavBackButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-1/2 bg-white/80 backdrop-blur-sm z-20 p-4">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour
      </button>
    </div>
  );
};