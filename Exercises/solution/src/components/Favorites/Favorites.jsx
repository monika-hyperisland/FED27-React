import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import styles from './Favorites.module.css';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className={styles.favorites}>
        <h1 className={styles.title}>My Favorites</h1>
        <div className={styles.emptyState}>
          <p>No favorites yet!</p>
          <p className={styles.hint}>
            Go to the <Link to="/characters">Characters</Link> page and click the star icon to add favorites.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.favorites}>
      <h1 className={styles.title}>My Favorites</h1>
      <p className={styles.subtitle}>You have {favorites.length} favorite character{favorites.length !== 1 ? 's' : ''}</p>
      
      <ul className={styles.list}>
        {favorites.map((character) => (
          <li key={character.id} className={styles.listItem}>
            <Link to={`/characters/${character.id}`} className={styles.characterLink}>
              {character.name}
            </Link>
            <button
              onClick={() => removeFavorite(character.id)}
              className={styles.removeButton}
              aria-label="Remove from favorites"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
