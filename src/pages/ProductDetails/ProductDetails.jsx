import React, { useEffect, useState } from "react";
import styles from "./ProductDetailsPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { getFoodById } from "../../api/foodAPI";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer/Footer";


export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    getFoodById(id).then(setFood);
  }, [id]);

  if (!food) return <p>Loading...</p>;

  const handleBuy = () => {
    addToCart(food);
    navigate("/success");
  };

  return (
    <div className={styles.container}>
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <p>{food.calories} calories</p>
      <p>${food.price}</p>
      <button onClick={handleBuy}>Buy Now</button>
      <Footer /> 
    </div>
  );
}
