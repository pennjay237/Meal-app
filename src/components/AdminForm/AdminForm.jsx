import React, { useState } from 'react';
import styles from './AdminForm.module.css';

const AdminForm = ({ onSubmit }) => {
  const [meal, setMeal] = useState({
    name: '',
    image: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeal(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(meal);
    setMeal({ name: '', image: '', price: '', description: '' });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Add New Meal</h2>
      
      <div className={styles.formGroup}>
        <label>Meal Name</label>
        <input
          type="text"
          name="name"
          value={meal.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label>Image URL</label>
        <input
          type="text"
          name="image"
          value={meal.image}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label>Price ($)</label>
        <input
          type="number"
          name="price"
          value={meal.price}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className={styles.formGroup}>
        <label>Description</label>
        <textarea
          name="description"
          value={meal.description}
          onChange={handleChange}
          rows="4"
        />
      </div>
      
      <button type="submit" className={styles.submitButton}>
        Add Meal
      </button>
    </form>
  );
};

export default AdminForm;