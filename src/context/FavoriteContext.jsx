import React, { createContext, useState } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (meal) => {
    setFavorites((prev) => {
      const isFav = prev.some((fav) => fav.idMeal === meal.idMeal);
      return isFav ? prev.filter((fav) => fav.idMeal !== meal.idMeal) : [...prev, meal];
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
