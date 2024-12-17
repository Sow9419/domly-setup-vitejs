import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail } from "lucide-react";

interface OTPFormProps {
  onSubmit: (otp: string) => void;
}

export const OTPForm = ({ onSubmit }: OTPFormProps) => {
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({
        title: "Code invalide",
        description: "Le code doit contenir 6 chiffres",
        variant: "destructive",
      });
      return;
    }
    onSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="relative">
          <Input
            type="text"
            placeholder="Entrez le code à 6 chiffres"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, "").slice(0, 6))}
            className="pl-10 text-center"
            maxLength={6}
          />
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Mail className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Vérifier
      </Button>
    </form>
  );
};