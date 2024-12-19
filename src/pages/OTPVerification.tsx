import { useToast } from "@/components/ui/use-toast";
import { NavBackButton } from "@/components/auth/NavBackButton";
import { OTPForm } from "@/components/otp/OTPForm";
import { ResendCode } from "@/components/otp/ResendCode";
import { AuthContent } from "@/components/auth/AuthContent";

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
      <div className="w-full md:w-1/2 relative">
        <NavBackButton />
        <div className="h-full overflow-y-auto pt-16">
          <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-md space-y-8">
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
        </div>
      </div>
      <div className="hidden md:block md:w-1/2 fixed right-0 h-screen">
        <AuthContent
          title="Sécurisez votre compte"
          subtitle="Une étape de plus vers votre espace sécurisé"
          features={[
            {
              icon: <div className="w-6 h-6" />,
              text: "Vérification en deux étapes"
            },
            {
              icon: <div className="w-6 h-6" />,
              text: "Protection de vos données"
            }
          ]}
        />
      </div>
    </div>
  );
};

export default OTPVerification;