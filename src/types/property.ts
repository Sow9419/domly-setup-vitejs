// Types pour les propriétés immobilières
export interface PropertyImage {
  url: string;
  alt: string;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  rating: number;
  status: "Disponible" | "Occupé";
  category: string;
  size?: "small" | "medium" | "large";
  images: PropertyImage[];
}

// Types pour les props du composant PropertyCard
export interface PropertyCardProps {
  property: Property;
  className?: string;
  size?: "small" | "medium" | "large";
}