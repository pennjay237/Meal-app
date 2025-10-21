import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FavoriteContext } from '../../context/FavoriteContext';
import styles from './MealCard.module.css';

const MealCard = ({ meal }) => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  const isFavorite = favorites.some(item => item.idMeal === meal.idMeal);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={meal.strMealThumb} 
          alt={meal.strMeal} 
          className={styles.image}
        />
        <div 
          className={styles.favoriteIcon} 
          onClick={() => toggleFavorite(meal)}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FaStar color={isFavorite ? "#ff7b00" : "#ccc"} size={22} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{meal.strMeal}</h3>
        <p className={styles.price}>${meal.price || Math.floor(Math.random() * 50) + 10}</p>
        <button 
          className={styles.button} 
          onClick={() => navigate(`/meal/${meal.idMeal}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default MealCard;
