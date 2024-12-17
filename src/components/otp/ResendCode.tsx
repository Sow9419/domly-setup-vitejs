import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { HelpCircle } from "lucide-react";

export const ResendCode = () => {
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Code renvoyé",
        description: "Veuillez vérifier votre boîte mail",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="text-center space-y-4">
      <button
        type="button"
        onClick={handleResendCode}
        disabled={isResending}
        className="text-sm text-primary hover:text-primary-hover disabled:opacity-50"
      >
        {isResending ? "Envoi en cours..." : "Renvoyer le code"}
      </button>

      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
        <HelpCircle className="w-4 h-4" />
        <span>Besoin d'aide ?</span>
      </div>
    </div>
  );
};