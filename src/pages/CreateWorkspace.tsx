import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { WorkspaceHeader } from "@/components/workspace/WorkspaceHeader";
import { UserTypeSelection } from "@/components/workspace/UserTypeSelection";
import { ThemeSelection } from "@/components/workspace/ThemeSelection";
import { InterfaceCustomization } from "@/components/workspace/InterfaceCustomization";

const CreateWorkspace = () => {
  const [userType, setUserType] = useState<"client" | "owner" | null>(null);
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Workspace settings:", { userType, theme });
    toast({
      title: "Espace de travail créé",
      description: "Redirection vers le tableau de bord...",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <WorkspaceHeader />

          <form onSubmit={handleSubmit} className="space-y-8">
            <UserTypeSelection userType={userType} setUserType={setUserType} />
            <ThemeSelection theme={theme} setTheme={setTheme} />
            <InterfaceCustomization />

            <Button
              type="submit"
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
            >
              Finaliser l'inscription
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">
            Trouvez votre chez-vous avec DomHyn!
          </h1>
          <p className="text-xl mb-8">Plus de 50.000+ propriétés disponibles</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80"
          alt="Luxury home interior"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default CreateWorkspace;