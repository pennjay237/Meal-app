import React, { createContext, useState } from 'react';

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState(null);
  const [orders, setOrders] = useState([]);

  const fetchMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(res => res.json())
      .then(data => setMeals(data.meals));
  };

  const fetchMealById = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setCurrentMeal(data.meals[0]));
  };

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const addMeal = (meal) => {
    setMeals([...meals, {
      idMeal: Date.now().toString(),
      strMeal: meal.name,
      strMealThumb: meal.image,
      price: meal.price
    }]);
  };

  const updateMeal = (id, updatedMeal) => {
    setMeals(meals.map(meal => 
      meal.idMeal === id ? {...meal, ...updatedMeal} : meal
    ));
  };

  const deleteMeal = (id) => {
    setMeals(meals.filter(meal => meal.idMeal !== id));
  };

  return (
    <MealContext.Provider value={{
      meals,
      currentMeal,
      orders,
      fetchMeals,
      fetchMealById,
      addOrder,
      addMeal,
      updateMeal,
      deleteMeal
    }}>
      {children}
    </MealContext.Provider>
  );
};