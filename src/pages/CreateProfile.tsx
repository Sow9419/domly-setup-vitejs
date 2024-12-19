import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Upload, User, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/back-button";
import { UserTypeSelection } from "@/components/workspace/UserTypeSelection";
import { NavBackButton } from "@/components/auth/NavBackButton";
import { AuthContent } from "@/components/auth/AuthContent";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });
  const [userType, setUserType] = useState<"client" | "owner" | null>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile data:", formData);
    console.log("User type:", userType);
    toast({
      title: "Profil créé",
      description: "Redirection vers la création de l'espace de travail...",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <NavBackButton />
      <div className="w-full md:w-1/2 relative">
        <div className="h-full overflow-y-auto pt-16">
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-md space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="w-12 h-12 text-gray-400" />
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        className="absolute bottom-0 right-0 rounded-full"
                      >
                        <Upload className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="relative">
                      <Input
                        name="fullName"
                        placeholder="Nom complet"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="pl-10"
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>

                    <div className="relative">
                      <Input
                        name="phone"
                        placeholder="Numéro de téléphone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10"
                      />
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>

                    <div className="relative">
                      <Input
                        name="address"
                        placeholder="Adresse complète"
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10"
                      />
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <div className="w-full">
                    <UserTypeSelection userType={userType} setUserType={setUserType} />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover"
                >
                  Continuer
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 fixed right-0 h-screen">
        <AuthContent
          title="Créez votre profil"
          subtitle="Personnalisez votre expérience"
          features={[
            {
              icon: <div className="w-6 h-6" />,
              text: "Profil personnalisé"
            },
            {
              icon: <div className="w-6 h-6" />,
              text: "Préférences de recherche"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default CreateProfile;
