import React, { useContext, useState } from 'react';
import { MealContext } from '../../context/MealContext';
import { AuthContext } from '../../context/AuthContext';
import AdminForm from '../../components/AdminForm/AdminForm';
import styles from './AdminDashboard.module.css';

const Admin = () => {
  const { isAdmin, login, logout } = useContext(AuthContext);
  const { meals, addMeal, deleteMeal } = useContext(MealContext);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(password) || setError('Invalid password');
  };

  if (!isAdmin) {
    return (
      <div className={styles.loginContainer}>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <h2>Admin Login</h2>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Admin Dashboard</h1>
        <button onClick={logout} className={styles.logoutButton}>Logout</button>
      </div>
      
      <div className={styles.adminForm}>
        <AdminForm onSubmit={addMeal} />
      </div>
      
      <div className={styles.mealList}>
        <h2>Manage Meals</h2>
        <div className={styles.grid}>
          {meals.map(meal => (
            <div key={meal.idMeal} className={styles.mealCard}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <div className={styles.details}>
                <h3>{meal.strMeal}</h3>
                <p>${meal.price || 'N/A'}</p>
                <button 
                  onClick={() => deleteMeal(meal.idMeal)} 
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;