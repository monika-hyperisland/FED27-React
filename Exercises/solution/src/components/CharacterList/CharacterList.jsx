import { Link } from 'react-router-dom';
import { useCharacters } from '../../context/CharacterContext';
import { useFavorites } from '../../context/FavoritesContext';
import styles from './CharacterList.module.css';

function CharacterList() {
  const { characters, loading, error } = useCharacters();
  const { toggleFavorite, isFavorite } = useFavorites();

  const getIdFromUrl = (url) => {
    const segments = url.split('/');
    return segments[segments.length - 1] || segments[segments.length - 2];
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading characters...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.characterList}>
      <h1 className={styles.title}>Star Wars Characters</h1>
      <p className={styles.subtitle}>Click on a character to see more details</p>
      
      <ul className={styles.list}>
        {characters.map((character) => {
          const id = getIdFromUrl(character.url);
          const favorite = isFavorite(id);
          
          return (
            <li key={id} className={styles.listItem}>
              <Link to={`/characters/${id}`} className={styles.characterLink}>
                {character.name}
              </Link>
              <button
                onClick={() => toggleFavorite({ id, name: character.name })}
                className={`${styles.favoriteButton} ${favorite ? styles.favorited : ''}`}
                aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                {favorite ? '★' : '☆'}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CharacterList;
