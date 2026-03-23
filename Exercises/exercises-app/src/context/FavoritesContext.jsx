import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(character) {
    setFavorites((prev) => [...prev, character]);
  }

  function removeFavorite(character) {
    setFavorites((prev) =>
      prev.filter((fav) => fav.id !== character.id)
    );
  }

  function isFavorite(character) {
    return favorites.some((fav) => fav.id === character.id);
  }

  function toggleFavorite(character) {
    if (isFavorite(character)) {
      removeFavorite(character);
    } else {
      addFavorite(character);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
}