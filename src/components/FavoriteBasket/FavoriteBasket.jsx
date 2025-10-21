import React, { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { useNavigate } from 'react-router-dom';
import styles from './FavoriteBasket';

const FavoriteBasket = () => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const navigate = useNavigate();

  if (!favorites.length)
    return <p className={styles.empty}>No favorites yet!</p>;

  return (
    <div className={styles.basket}>
      <h2 className={styles.title}>Your Favorites</h2>
      <div className={styles.grid}>
        {favorites.map((meal) => (
          <div key={meal.idMeal} className={styles.card}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className={styles.image}
              onClick={() => navigate(`/meal/${meal.idMeal}`)}
            />
            <div className={styles.info}>
              <h3>{meal.strMeal}</h3>
              <p>${meal.price || Math.floor(Math.random() * 50) + 10}</p>
              <button
                className={styles.removeBtn}
                onClick={() => toggleFavorite(meal)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteBasket;
