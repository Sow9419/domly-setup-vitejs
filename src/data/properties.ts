/**
 * Interface définissant la structure d'une propriété
 */
export interface Property {
  id: number;
  title: string;
  location: string;
  rating: number;
  status: "Occupé" | "Disponible";
  images: string[];
}

/**
 * Données des propriétés avec leurs images
 */
export const properties: Property[] = [
  {
    id: 1,
    title: "Appartement Vue Fleuve",
    location: "Bamako, Bacodjicoroni ACI",
    rating: 4.9,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
  },
  {
    id: 2,
    title: "Appartement Luxueux avec Vue Panoramique sur la Ville",
    location: "Bamako, Hamdallaye ACI 2000",
    rating: 4.8,
    status: "Occupé",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    ],
  },
  {
    id: 3,
    title: "Villa Moderne avec Piscine",
    location: "Bamako, Badalabougou Est",
    rating: 4.7,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    ],
  },
  {
    id: 4,
    title: "Studio Contemporain",
    location: "Bamako, Magnambougou",
    rating: 4.6,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
  },
  {
    id: 5,
    title: "Penthouse de Luxe",
    location: "Bamako, ACI 2000",
    rating: 4.9,
    status: "Occupé",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    ],
  },
  {
    id: 6,
    title: "Maison Familiale",
    location: "Bamako, Kalaban Coura",
    rating: 4.5,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    ],
  },
  {
    id: 7,
    title: "Loft Industriel",
    location: "Bamako, Zone Industrielle",
    rating: 4.7,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
  },
  {
    id: 8,
    title: "Résidence Sécurisée",
    location: "Bamako, Sotuba ACI",
    rating: 4.8,
    status: "Occupé",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    ],
  },
  {
    id: 9,
    title: "Duplex Moderne",
    location: "Bamako, Torokorobougou",
    rating: 4.6,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
  },
  {
    id: 10,
    title: "Studio Étudiant",
    location: "Bamako, Quartier du Fleuve",
    rating: 4.4,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    ],
  },
  {
    id: 11,
    title: "Appartement Cosy",
    location: "Bamako, Hippodrome",
    rating: 4.7,
    status: "Occupé",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    ],
  },
  {
    id: 12,
    title: "Villa avec Jardin",
    location: "Bamako, Cité du Niger",
    rating: 4.9,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    ],
  },
  {
    id: 13,
    title: "Appartement Rénové",
    location: "Bamako, Point G",
    rating: 4.5,
    status: "Disponible",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    ],
  }
];