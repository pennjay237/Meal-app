import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutSuccessPage.module.css';

const CheckoutSuccess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.checkmark}>✓</div>
        <h1 className={styles.title}>Order Successful!</h1>
        <p className={styles.message}>
          Thank you for your purchase. Your order is being prepared and will be 
          delivered soon.
        </p>
        <Link to="/" className={styles.button}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;