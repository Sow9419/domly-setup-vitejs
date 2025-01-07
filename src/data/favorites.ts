import { Property } from './properties';

export interface Favorites {
  properties: Property[];
}

export const favorites: Favorites = {
  properties: []
};

export const addToFavorites = (property: Property) => {
  const exists = favorites.properties.some(p => p.id === property.id);
  if (!exists) {
    favorites.properties.push({...property, isFavorite: true});
    console.log('Added to favorites:', property.title);
  }
};

export const removeFromFavorites = (propertyId: number) => {
  const index = favorites.properties.findIndex(p => p.id === propertyId);
  if (index !== -1) {
    favorites.properties.splice(index, 1);
    console.log('Removed from favorites:', propertyId);
  }
};