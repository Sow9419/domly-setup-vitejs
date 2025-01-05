interface PropertyFeature {
  icon: string;
  label: string;
}

const features: PropertyFeature[] = [
  { icon: "🛏️", label: "4 Chambres" },
  { icon: "🚿", label: "2 Douches" },
  { icon: "❄️", label: "Climatisation" },
  { icon: "💧", label: "Robinet" },
  { icon: "⚡", label: "Electricité" },
];

export const PropertyFeatures = () => {
  return (
    <div className="flex flex-wrap gap-6 py-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-2xl">{feature.icon}</span>
          <span className="text-gray-600">{feature.label}</span>
        </div>
      ))}
    </div>
  );
};