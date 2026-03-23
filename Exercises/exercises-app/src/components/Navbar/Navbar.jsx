import { Link } from "react-router-dom";
import { useCharacters } from "../../context/CharacterContext"; 
import { useFavorites } from "../../context/FavoritesContext";  


const Navbar = () => {
    const { characters } = useCharacters();
    const { favorites } = useFavorites();

    return (
        <nav>
            <h1>Nav</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/characters">Characters ({characters.length})</Link></li>   
                <li><Link to="/favorites">Favorites ({favorites.length})</Link></li>
            </ul>       
        </nav>
    );
};

export default Navbar;