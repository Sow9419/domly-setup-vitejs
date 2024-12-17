import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Upload, User, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/ui/back-button";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile data:", formData);
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
      <BackButton to="/signup" />
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 pt-20">
        <div className="w-full max-w-md space-y-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
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

              <div className="space-y-2">
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
              </div>

              <div className="space-y-2">
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
              </div>

              <div className="space-y-2">
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
      <div className="hidden md:flex md:w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">
            Personnalisez votre expérience LocationMaison
          </h1>
          <p className="text-xl mb-8">
            Créez un profil qui correspond à vos besoins
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

export default CreateProfile;
