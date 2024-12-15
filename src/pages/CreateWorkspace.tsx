import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ArrowLeft, Sun, Moon, Plus, Upload } from "lucide-react";
import { Link } from "react-router-dom";

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

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                Choisissez votre type d'utilisateur
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setUserType("client")}
                  className={`p-4 rounded-lg border ${
                    userType === "client"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200"
                  } hover:border-primary transition-colors`}
                >
                  <div className="text-left">
                    <h3 className="font-medium">Client</h3>
                    <p className="text-sm text-gray-600">
                      Je cherche un logement à louer
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setUserType("owner")}
                  className={`p-4 rounded-lg border ${
                    userType === "owner"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200"
                  } hover:border-primary transition-colors`}
                >
                  <div className="text-left">
                    <h3 className="font-medium">Propriétaire</h3>
                    <p className="text-sm text-gray-600">
                      Je souhaite mettre en location mon bien
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                Choisissez votre thème
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setTheme("system")}
                  className={`p-4 rounded-lg border ${
                    theme === "system"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200"
                  } hover:border-primary transition-colors`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Système</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className={`p-4 rounded-lg border ${
                    theme === "light"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200"
                  } hover:border-primary transition-colors`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Sun className="w-6 h-6" />
                    <span className="text-sm">Clair</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  className={`p-4 rounded-lg border ${
                    theme === "dark"
                      ? "border-primary bg-primary/5"
                      : "border-gray-200"
                  } hover:border-primary transition-colors`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Moon className="w-6 h-6" />
                    <span className="text-sm">Sombre</span>
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold">
                Personnalisez votre interface
              </h2>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-purple-500"
                />
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-blue-500"
                />
                <button
                  type="button"
                  className="w-8 h-8 rounded-full bg-green-500"
                />
                <button
                  type="button"
                  className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center"
                >
                  <Plus className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary-hover"
            >
              Finaliser l'inscription
            </Button>
          </form>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">
            Personnalisez votre espace LocationMaison
          </h1>
          <p className="text-xl mb-8">
            Créez un environnement qui vous correspond
          </p>
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