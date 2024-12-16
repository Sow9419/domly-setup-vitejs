import { Check, Home, User } from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "client" | "owner" | null;

interface UserTypeSelectionProps {
  userType: UserType;
  setUserType: (type: UserType) => void;
}

export const UserTypeSelection = ({ userType, setUserType }: UserTypeSelectionProps) => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Choisissez votre type d'utilisateur</h2>
    <div className="grid grid-cols-2 gap-4">
      <button
        type="button"
        onClick={() => setUserType("client")}
        className={cn(
          "p-4 rounded-lg border relative flex items-start",
          userType === "client"
            ? "border-primary bg-primary/5"
            : "border-gray-200 hover:border-primary",
          "transition-colors"
        )}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              userType === "client" ? "bg-primary" : "bg-gray-100"
            )}>
              <User className={cn(
                "w-4 h-4",
                userType === "client" ? "text-white" : "text-gray-500"
              )} />
            </div>
            <h3 className="font-medium">Client</h3>
          </div>
          <p className="text-sm text-gray-600">Je cherche un logement à louer</p>
        </div>
        <div className={cn(
          "w-5 h-5 border rounded-full absolute top-4 right-4 flex items-center justify-center",
          userType === "client" 
            ? "border-primary bg-primary" 
            : "border-gray-300"
        )}>
          {userType === "client" && <Check className="w-3 h-3 text-white" />}
        </div>
      </button>

      <button
        type="button"
        onClick={() => setUserType("owner")}
        className={cn(
          "p-4 rounded-lg border relative flex items-start",
          userType === "owner"
            ? "border-primary bg-primary/5"
            : "border-gray-200 hover:border-primary",
          "transition-colors"
        )}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              userType === "owner" ? "bg-primary" : "bg-gray-100"
            )}>
              <Home className={cn(
                "w-4 h-4",
                userType === "owner" ? "text-white" : "text-gray-500"
              )} />
            </div>
            <h3 className="font-medium">Propriétaire</h3>
          </div>
          <p className="text-sm text-gray-600">
            Je souhaite mettre en location mon bien
          </p>
        </div>
        <div className={cn(
          "w-5 h-5 border rounded-full absolute top-4 right-4 flex items-center justify-center",
          userType === "owner" 
            ? "border-primary bg-primary" 
            : "border-gray-300"
        )}>
          {userType === "owner" && <Check className="w-3 h-3 text-white" />}
        </div>
      </button>
    </div>
  </div>
);