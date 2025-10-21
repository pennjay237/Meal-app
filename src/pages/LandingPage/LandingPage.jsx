import React, { useContext } from 'react';
import { MealContext } from '../../context/MealContext';
import MealCard from '../../components/MealCard/MealCard';
import FavoriteBasket from '../../components/FavoriteBasket/FavoriteBasket';
import styles from './LandingPage.module.css';

const Landing = () => {
  const { meals, fetchMeals } = useContext(MealContext);

  if (!meals.length) {
    fetchMeals();
    return <div className={styles.loading}>Loading meals...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Delicious Meals</h1>
          <p className={styles.heroSubtitle}>
            Discover tasty recipes and enjoy cooking from the comfort of your home.
          </p>
        </div>
      </section>

      {/* Favorites Section */}
      <section className={styles.favoritesSection}>
        <h2 className={styles.sectionTitle}>Your Favorite Meals</h2>
        <FavoriteBasket />
      </section>

      {/* Meals Section */}
      <h2 className={styles.title}>Delicious Meals</h2>
      <div className={styles.grid}>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
