import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { HelpCircle, Mail } from "lucide-react";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleVerify = () => {
    console.log("Code OTP:", otp);
    toast({
      title: "Vérification en cours",
      description: "Fonctionnalité en cours de développement",
    });
  };

  const handleResend = () => {
    toast({
      title: "Code renvoyé",
      description: "Un nouveau code a été envoyé à votre adresse email",
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Vérification de votre compte</h1>
            <p className="text-sm text-gray-600 mt-2">
              Pour sécuriser votre compte, veuillez saisir le code reçu
            </p>
            <div className="flex items-center justify-center gap-2 mt-2 text-sm text-primary">
              <Mail className="w-4 h-4" />
              <span>Nous avons envoyé un code à j***@example.com</span>
            </div>
          </div>

          <div className="space-y-6">
            <InputOTP
              value={otp}
              onChange={setOtp}
              maxLength={6}
              render={({ slots }) => (
                <InputOTPGroup className="gap-2 justify-center">
                  {slots.map((slot, idx) => (
                    <InputOTPSlot key={idx} {...slot} index={idx} />
                  ))}
                </InputOTPGroup>
              )}
            />

            <Button
              onClick={handleVerify}
              className="w-full bg-primary hover:bg-primary-hover"
            >
              Vérifier
            </Button>

            <div className="text-center">
              <button
                onClick={handleResend}
                className="text-sm text-primary hover:text-primary-hover"
              >
                Renvoyer le code (59s)
              </button>
            </div>

            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm font-medium">Besoin d'aide ?</p>
                <div className="flex justify-center gap-4 mt-2">
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                  >
                    <HelpCircle className="w-4 h-4" />
                    FAQ
                  </Link>
                  <Link
                    to="#"
                    className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
                  >
                    <Mail className="w-4 h-4" />
                    Contacter le support
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 space-x-4">
            <Link to="#" className="hover:text-gray-700">
              Conditions d'utilisation
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:w-1/2 bg-gray-100 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">
            Trouvez votre chez-vous avec LocationMaison!
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

export default OTPVerification;