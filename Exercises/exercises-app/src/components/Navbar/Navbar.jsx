import { Link } from "react-router-dom";
import { useCharacters } from "../../context/CharacterContext";
import { useFavorites } from "../../context/FavoritesContext";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { characters } = useCharacters();
  const { favorites } = useFavorites();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <h1>Nav</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/characters">
            Characters ({characters.length})
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites ({favorites.length})
          </Link>
        </li>
        <li>
          <button onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
