import React from "react";
import styles from "./Hero.module.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Delicious Meals, <span className={styles.highlight}>Delivered Fresh</span>
        </h1>
        <p className={styles.subtitle}>
          Discover healthy, chef-crafted meals tailored to your taste — ready when you are.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/images/hero-meal.png"
          alt="Fresh meal delivery"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.backgroundGradient}></div>
    </section>
  );
}
