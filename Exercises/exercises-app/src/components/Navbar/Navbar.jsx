import { Link } from "react-router";


const Navbar = () => {
    return (
        <nav>
            <h1>Nav</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/characters">Characters</Link></li>   
            </ul>       
        </nav>
    );
};

export default Navbar;