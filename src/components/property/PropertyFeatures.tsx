import { Bed, Shower, Wind, Droplet, Zap } from 'lucide-react';

interface PropertyFeature {
  icon: React.ReactNode;
  label: string;
}

const features: PropertyFeature[] = [
  { icon: <Bed className="h-5 w-5" />, label: "4 Chambres" },
  { icon: <Shower className="h-5 w-5" />, label: "2 Douches" },
  { icon: <Wind className="h-5 w-5" />, label: "Climatisation" },
  { icon: <Droplet className="h-5 w-5" />, label: "Robinet" },
  { icon: <Zap className="h-5 w-5" />, label: "Electricité" },
];

export const PropertyFeatures = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 py-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-secondary">{feature.icon}</span>
          <span className="font-roboto text-sm text-[#333333]">{feature.label}</span>
        </div>
      ))}
    </div>
  );
};