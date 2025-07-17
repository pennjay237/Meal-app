import React from "react";
import styles from "./FoodCard.module.css";
import { Link } from "react-router-dom";

export default function FoodCard({ food }) {
  return (
    <div className={styles.card}>
      <h3>{food.name}</h3>
      <p>{food.calories} calories</p>
      <p>${food.price}</p>
      <Link to={`/product/${food.id}`}>View</Link>
    </div>
  );
}
