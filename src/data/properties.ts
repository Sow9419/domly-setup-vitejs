export interface PropertyImage {
  url: string;
  alt: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  rating: number;
  status: string;
  isFavorite: boolean;
  images: PropertyImage[];
}