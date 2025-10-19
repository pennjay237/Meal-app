import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MealCard.module.css';

const MealCard = ({ meal }) => {
  return (
    <div className={styles.card}>
      <img 
        src={meal.strMealThumb} 
        alt={meal.strMeal} 
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{meal.strMeal}</h3>
        <p className={styles.price}>${meal.price || Math.floor(Math.random() * 50) + 10}</p>
        <Link to={`/meal/${meal.idMeal}`} className={styles.button}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MealCard;