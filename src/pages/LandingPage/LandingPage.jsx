import React, { useContext } from 'react';
import { MealContext } from '../../context/MealContext';
import MealCard from '../../components/MealCard/MealCard';
import styles from './LandingPage.module.css';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Landing = () => {
  const { meals, fetchMeals } = useContext(MealContext);

  if (!meals.length) {
    fetchMeals();
    return <div className={styles.loading}>Loading meals...</div>;
  }

  return (
    <div className={styles.container}>
      {/* --- HERO SECTION --- */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Delicious Meals, <span className={styles.highlight}>Delivered Fresh</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discover chef-crafted dishes tailored to your taste — healthy, fast, and fresh.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.primary}>
              <FaApple /> App Store
            </button>
            <button className={styles.secondary}>
              <FaGooglePlay /> Google Play
            </button>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <img
            src="/images/hero-meal.png"
            alt="Delicious meal"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* --- MEAL GRID --- */}
      <h2 className={styles.sectionTitle}>Popular Meals</h2>
      <div className={styles.grid}>
        {meals.map(meal => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
