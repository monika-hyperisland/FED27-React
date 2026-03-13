import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext';
import styles from './CharacterDetail.module.css';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(`https://swapi.info/api/people/${id}`);
        if (!response.ok) {
          throw new Error('Character not found');
        }
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch character');
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading character details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error: {error}</p>
        <Link to="/characters" className={styles.backLink}>
          ← Back to Characters
        </Link>
      </div>
    );
  }

  const favorite = isFavorite(id);

  return (
    <div className={styles.characterDetail}>
      <Link to="/characters" className={styles.backLink}>
        ← Back to Characters
      </Link>
      
      <div className={styles.header}>
        <h1 className={styles.name}>{character.name}</h1>
        <button
          onClick={() => toggleFavorite({ id, name: character.name })}
          className={`${styles.favoriteButton} ${favorite ? styles.favorited : ''}`}
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {favorite ? '★ Favorited' : '☆ Add to Favorites'}
        </button>
      </div>
      
      <div className={styles.details}>
        <div className={styles.detailCard}>
          <h3>Physical</h3>
          <p><strong>Height:</strong> {character.height} cm</p>
          <p><strong>Mass:</strong> {character.mass} kg</p>
          <p><strong>Hair Color:</strong> {character.hair_color}</p>
          <p><strong>Eye Color:</strong> {character.eye_color}</p>
          <p><strong>Skin Color:</strong> {character.skin_color}</p>
        </div>
        
        <div className={styles.detailCard}>
          <h3>Personal</h3>
          <p><strong>Birth Year:</strong> {character.birth_year}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
