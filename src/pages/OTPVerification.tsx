import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Verifying OTP:", otp);
    toast({
      title: "Vérification en cours",
      description: "Veuillez patienter...",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 h-20 bg-white z-50 flex items-center px-8 border-b">
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-sm">
            <ArrowLeft className="w-5 h-5 text-white" />
          </div>
          <span>Retour</span>
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center p-8 mt-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Entrez votre code OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]">
            Vérifier
          </Button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerification;
