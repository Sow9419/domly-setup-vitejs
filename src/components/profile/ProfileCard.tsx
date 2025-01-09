import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UploadDialog } from './upload-dialog';

interface ProfileCardProps {
  profileImage: string;
  onImageUpload: (url: string) => void;
}

export function ProfileCard({ profileImage, onImageUpload }: ProfileCardProps) {
  return (
    <Card className="p-6" id="profile">
      <h2 className="text-lg font-semibold mb-4">Profil</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="relative">
          <img
            key={profileImage}
            src={profileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg?height=80&width=80";
            }}
          />
          <UploadDialog onImageUpload={onImageUpload} />
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-xl font-semibold">Jean Dupont</h2>
          <p className="text-gray-500">jean.dupont@email.com</p>
        </div>
        <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600">
          Modifier le profil
        </Button>
      </div>
    </Card>
  );
}