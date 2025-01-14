import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Функция для обработки изменения текста в поле ввода
  const handleSearchChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  // Функция для выполнения поиска с задержкой
  const search = async (searchQuery) => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    setLoading(true);

  };

  // Создаем задержку для поиска
 
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Введите запрос..."
        className={styles.searchInput}
      />
      {loading && <p className={styles.loadingMessage}>Загрузка...</p>}
      <ul className={styles.resultsList}>
        {results.map((result) => (
          <li key={result.id} className={styles.resultItem}>
            {result.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
