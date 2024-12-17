import { useToast } from "@/components/ui/use-toast";
import { BackButton } from "@/components/ui/back-button";
import { OTPForm } from "@/components/otp/OTPForm";
import { ResendCode } from "@/components/otp/ResendCode";
import { RightSideImage } from "@/components/otp/RightSideImage";
import { Mail } from "lucide-react";

const OTPVerification = () => {
  const { toast } = useToast();

  const handleVerification = (otp: string) => {
    console.log("Verifying OTP:", otp);
    toast({
      title: "Vérification en cours",
      description: "Redirection vers votre espace...",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 pt-20">
        <div className="w-full max-w-md space-y-8">
          <BackButton to="/signup" />
          <div className="text-center">
            <h1 className="text-2xl font-bold">Vérification de votre compte</h1>
            <p className="text-sm text-gray-600 mt-2">
              Pour sécuriser votre compte, veuillez saisir le code reçu
            </p>
          </div>

          <OTPForm onSubmit={handleVerification} />
          <ResendCode />
        </div>
      </div>
      <RightSideImage />
    </div>
  );
};

export default OTPVerification;