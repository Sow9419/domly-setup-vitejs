import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WorkspaceHeader = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-50 flex items-center px-8 border-b">
      <Link
        to="/create-profile"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
      >
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
          <ArrowLeft className="w-5 h-5 text-white" />
        </div>
        <span>Retour</span>
      </Link>
    </nav>
  );
};

export default WorkspaceHeader;