import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../../context/CharacterContext";
import { useFavorites } from "../../context/FavoritesContext";





const CharacterList = () => {
    const { characters, loading, error } = useCharacters();
    const { favorites, toggleFavorite, isFavorite } = useFavorites();   
    // const [characters, setCharacters] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchCharacters = async () => {
    //         try {
    //             const response = await fetch("https://swapi.info/api/people");
    //             if (!response.ok) {
    //                 throw new Error("Failed to fetch characters");
    //             }
    //             const data = await response.json();
    //             setCharacters(data.results??data);
    //         } catch (err) {
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchCharacters();
    // }, []);

    
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
    <ul>
      {characters.map((character) => {
        const id = character.url.split("/").filter(Boolean).pop();
        const characterWithId = { ...character, id };

        return (
        <li key={id}>
         <Link to={`/characters/${id}`}>
            {character.name}
         </Link>
            <button onClick={() => toggleFavorite(characterWithId)} 
            style={{marginLeft: "8px"}}      >

                {isFavorite(characterWithId) ? "⭐" : "☆"}
            </button>
            
        </li>
        );
        })
        }

    </ul>
    );
}


export default CharacterList;