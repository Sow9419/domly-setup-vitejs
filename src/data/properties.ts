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
  category: "all" | "apartment" | "house" | "villa" | "workspace" | "office" | "store";
  images: PropertyImage[];
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Appartement de luxe à Paris",
    location: "Osamako, Bacadjicaronie Acie",
    rating: 4.9,
    status: "Occupé",
    category: "apartment",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
        alt: "Vue extérieure de l'appartement"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
        alt: "Salon spacieux"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
        alt: "Chambre principale"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
        alt: "Vue sur la terrasse"
      }
    ]
  },
  {
    id: 2,
    title: "Villa avec vue sur mer",
    location: "Saint-Tropez, Côte d'Azur",
    rating: 4.8,
    status: "Disponible",
    category: "villa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        alt: "Vue sur la mer"
      },
      {
        url: "https://images.unsplash.com/photo-1597266732667-006066625207?q=80&w=2070&auto=format&fit=crop",
        alt: "Piscine"
      }
    ]
  },
  {
    id: 3,
    title: "Penthouse moderne",
    location: "Lyon, Rhône-Alpes",
    rating: 4.7,
    status: "Occupé",
    category: "house",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        alt: "Vue panoramique"
      },
      {
        url: "https://images.unsplash.com/photo-1580926082266-22262226207a?q=80&w=2070&auto=format&fit=crop",
        alt: "Cuisine moderne"
      }
    ]
  },
  {
    id: 4,
    title: "Loft artistique",
    location: "Bordeaux, Nouvelle-Aquitaine",
    rating: 4.9,
    status: "Disponible",
    category: "workspace",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        alt: "Espace de travail"
      },
      {
        url: "https://images.unsplash.com/photo-1564093497595-593b96d80180?q=80&w=2070&auto=format&fit=crop",
        alt: "Salon lumineux"
      }
    ]
  },
  {
    id: 5,
    title: "Maison historique",
    location: "Strasbourg, Grand Est",
    rating: 4.6,
    status: "Occupé",
    category: "house",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop",
        alt: "Façade historique"
      },
      {
        url: "https://images.unsplash.com/photo-1571003123894-1f00f1d1fa61?q=80&w=2070&auto=format&fit=crop",
        alt: "Jardin intérieur"
      }
    ]
  },
  {
    id: 6,
    title: "Studio contemporain",
    location: "Nice, Provence-Alpes",
    rating: 4.8,
    status: "Disponible",
    category: "apartment",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop",
        alt: "Intérieur moderne"
      },
      {
        url: "https://images.unsplash.com/photo-1576535545292-e5660066660a?q=80&w=2070&auto=format&fit=crop",
        alt: "Vue sur la ville"
      }
    ]
  },
  {
    id: 7,
    title: "Appartement bohème",
    location: "Marseille, Bouches-du-Rhône",
    rating: 4.7,
    status: "Occupé",
    category: "apartment",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
        alt: "Décor bohème"
      },
      {
        url: "https://images.unsplash.com/photo-1574158635355-88f4651c30f7?q=80&w=2070&auto=format&fit=crop",
        alt: "Coin salon confortable"
      }
    ]
  }
]
