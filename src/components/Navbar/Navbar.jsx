import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <NavLink to="/" onClick={closeMenu}>
          🍽️ MealApp
        </NavLink>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <button className={styles.menuToggle} onClick={toggleMenu}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Links */}
      <div className={`${styles.links} ${menuOpen ? styles.active : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          onClick={closeMenu}
        >
          <Heart size={18} />
          Favorites
        </NavLink>
        {/* <NavLink
          to="/admin"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.activeLink}` : styles.link
          }
          onClick={closeMenu}
        >
          Admin
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
