import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getFoods } from "../../api/foodAPI";
import FoodCard from "../../components/FoodCard/FoodCard";

export default function LandingPage() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then(setFoods);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Food Menu</h1>
      <div className={styles.grid}>
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
      <Footer /> 
    </div>
  );
}
