import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MealCard.module.css';

const MealCard = ({ meal }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/meal/${meal.idMeal}`);
  };

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
        <button 
          className={styles.button} 
          onClick={handleViewDetails}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MealCard;
