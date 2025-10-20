import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MealContext } from '../../context/MealContext';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import styles from './ProductDetail.module.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentMeal, fetchMealById, addOrder } = useContext(MealContext);

  if (!currentMeal || currentMeal.idMeal !== id) {
    fetchMealById(id);
    return <div className={styles.loading}>Loading meal details...</div>;
  }

  const handleCheckout = (orderDetails) => {
    addOrder({
      ...orderDetails,
      mealId: currentMeal.idMeal,
      mealName: currentMeal.strMeal,
      price: Math.floor(Math.random() * 50) + 10,
    });
    navigate('/checkout-success');
  };

  const calories = Math.floor(Math.random() * 1000) + 300;
  const protein = Math.floor(Math.random() * 50) + 10;
  const carbs = Math.floor(Math.random() * 100) + 30;
  const fat = Math.floor(Math.random() * 40) + 10;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={currentMeal.strMealThumb}
          alt={currentMeal.strMeal}
          className={styles.image}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{currentMeal.strMeal}</h1>
          <p className={styles.category}>
            {currentMeal.strCategory} • {currentMeal.strArea}
          </p>
          <p className={styles.price}>
            ${Math.floor(Math.random() * 50) + 10}
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Description</h2>
          <p>{currentMeal.strInstructions}</p>
        </div>

        <div className={styles.section}>
          <h2>Nutritional Information</h2>
          <div className={styles.nutritionGrid}>
            {[
              { label: 'Calories', value: `${calories} kcal` },
              { label: 'Protein', value: `${protein}g` },
              { label: 'Carbs', value: `${carbs}g` },
              { label: 'Fat', value: `${fat}g` },
            ].map((item, idx) => (
              <div key={idx} className={styles.nutritionItem}>
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Ingredients</h2>
          <ul className={styles.ingredients}>
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = currentMeal[`strIngredient${i + 1}`];
              const measure = currentMeal[`strMeasure${i + 1}`];
              return ingredient ? (
                <li key={i}>
                  <span>{ingredient}</span>
                  <span>{measure}</span>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </div>

      <div className={styles.checkoutSection}>
        <h2>Place Your Order</h2>
        <CheckoutForm onSubmit={handleCheckout} />
      </div>
    </div>
  );
};

export default ProductDetails;
