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
        className={`p-4 rounded-lg border ${
          userType === "client"
            ? "border-primary bg-primary/5"
            : "border-gray-200"
        } hover:border-primary transition-colors`}
      >
        <div className="text-left">
          <h3 className="font-medium">Client</h3>
          <p className="text-sm text-gray-600">Je cherche un logement à louer</p>
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
);