import React from 'react';
import styles from './LandingPageHero.module.css';
import heroImage from '../../assets/hero-image.png'; // Replace with your own hero image

const LandingPageHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Discover Delicious <span className={styles.highlight}>Meals</span> Every Day
        </h1>
        <p className={styles.subtitle}>
          Explore a world of recipes, order fresh ingredients, and enjoy home-cooked perfection.
        </p>
        <button className={styles.primaryButton}>Get Started</button>
      </div>
      <div className={styles.imageWrapper}>
        <img src={heroImage} alt="Delicious meals" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default LandingPageHero;
