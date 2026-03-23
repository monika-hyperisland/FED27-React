import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

    if (favorites.length === 0) {
      return <p>No favorite characters.</p>;
    }   
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {favorites.map((character) => (
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>
                        {character.name}
                    </Link>
                    <button onClick={() => removeFavorite(character)} style={{marginLeft: "8px"}}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default Favorites;
