import React, { useState, useEffect } from "react";
import styles from "./AdminDashboard.module.css";
import { getFoods, addFood, deleteFood } from "../../api/foodAPI";
import Footer from "../../components/Footer/Footer";


export default function AdminDashboard() {
  const [foods, setFoods] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    getFoods().then(setFoods);
  }, []);

  const handleAdd = () => {
    const newFood = {
      id: Date.now(),
      name,
      calories: 100,
      price: 2.99,
      description: "New food item"
    };
    addFood(newFood);
    setFoods([...foods, newFood]);
    setName("");
  };

  const handleDelete = (id) => {
    deleteFood(id);
    setFoods(foods.filter((f) => f.id !== id));
  };

  return (
    <div className={styles.admin}>
      <h2>Admin Dashboard</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Food name"
      />
      <button onClick={handleAdd}>Add Food</button>
      <ul>
        {foods.map((f) => (
          <li key={f.id}>
            {f.name} <button onClick={() => handleDelete(f.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
