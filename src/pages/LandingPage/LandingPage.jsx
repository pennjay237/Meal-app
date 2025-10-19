import React, { useContext } from 'react';
import { MealContext } from '../../context/MealContext';
import MealCard from '../../components/MealCard/MealCard';
import styles from './LandingPage.module.css';

const Landing = () => {
  const { meals, fetchMeals } = useContext(MealContext);

  if (!meals.length) {
    fetchMeals();
    return <div className={styles.loading}>Loading meals...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Delicious Meals</h1>
      <div className={styles.grid}>
        {meals.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Landing;