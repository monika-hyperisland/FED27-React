import { useEffect, useState } from "react";
import { Link } from "react-router";


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch("https://swapi.info/api/people");
                if (!response.ok) {
                    throw new Error("Failed to fetch characters");
                }
                const data = await response.json();
                setCharacters(data.results??data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

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

        return (
        <li key={character.name}>
         <Link to={`/characters/${id}`}>
            {character.name}
         </Link>
        </li>
        );
        })}

    </ul>
    );
};

export default CharacterList;