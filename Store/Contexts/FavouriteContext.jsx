import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext();

function FavouriteProvider({ children }) {
  const [favourite, setFavourite] = useState([]);

  function addFavourite(item) {
    setFavourite((favourite) => [...favourite, item]);
  }

  function removeFavourite(id) {
    setFavourite((favourite) => favourite.filter((mealId) => mealId !== id));
  }

  return (
    <FavouriteContext.Provider
      value={{ favourite, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavourite() {
  const context = useContext(FavouriteContext);
  if (context === undefined) {
    throw new Error("useFavourite must be used within a FavouriteProvider");
  }
  return context;
}

export default FavouriteProvider;
