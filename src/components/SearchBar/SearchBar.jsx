import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ searchTerm, setSearchTerm, placeholder = "Search meals..." }) => {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBar;
