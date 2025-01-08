import { ArrowLeft, Menu, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavFullProps {
  showBackButton?: boolean;
  title?: string;
}

const NavFull = ({ showBackButton, title }: NavFullProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate(-1)}
                className="md:hidden"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            )}
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">LOGO</span>
            </Link>
            {title && (
              <span className="text-lg font-semibold hidden md:block">
                {title}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2 rounded-full border border-gray-300"
            >
              <Menu className="h-5 w-5" />
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavFull;