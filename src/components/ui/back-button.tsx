import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to: string;
  label?: string;
}

export const BackButton = ({ to, label = "Retour" }: BackButtonProps) => {
  return (
    <div className="fixed top-0 left-0 md:w-1/2 w-full h-14 bg-white z-50 flex items-center px-4">
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-white" />
        </div>
        <span className="font-medium">{label}</span>
      </Link>
    </div>
  );
};