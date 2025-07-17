import React from "react";
import styles from "./CheckoutSuccessPage.module.css";
import { useCart } from "../../context/CartContext";
import Footer from "../../components/Footer/Footer";


export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();

  React.useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className={styles.success}>
      <h1>Thank you for your purchase!</h1>
       <Footer /> 
    </div>
  );
}
