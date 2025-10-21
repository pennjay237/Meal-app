import React, { useContext, useState } from 'react';
import { MealContext } from '../../context/MealContext';
import MealCard from '../../components/MealCard/MealCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './LandingPage.module.css';

const Landing = () => {
  const { meals, fetchMeals } = useContext(MealContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (!meals.length) {
    fetchMeals();
    return <div className={styles.loading}>Loading meals...</div>;
  }

  const filteredMeals = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to Delicious Meals</h1>
          <p className={styles.heroSubtitle}>
            Discover tasty recipes and enjoy cooking from the comfort of your home.
          </p>
        </div>
      </section>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h2 className={styles.title}>Delicious Meals</h2>
      <div className={styles.grid}>
        {filteredMeals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
