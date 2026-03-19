import { Link } from "react-router-dom";
import { useCharacters } from "../../context/CharacterContext"; 

const Navbar = () => {
    const { characters } = useCharacters();
    return (
        <nav>
            <h1>Nav</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/characters">Characters ({characters.length})</Link></li>   
            </ul>       
        </nav>
    );
};

export default Navbar;