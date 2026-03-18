import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function CharacterDetail() {
  const { id } = useParams(); // get character ID from URL

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://swapi.info/api/people/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch character");
        }

        const data = await response.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]); // re-run if URL param changes

  if (loading) return <p>Loading character...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        {/* Display character details */ }
      <h2>{character.name}</h2>
    <ul>
        <li>Height: {character.height}</li>
        <li>Mass: {character.mass}</li>
        <li>Hair Color: {character.hair_color}</li>
        <li>Eye Color: {character.eye_color}</li>
        <li>Birth Year: {character.birth_year}</li>
        <li>Gender: {character.gender}</li>
      </ul>
      {/* Link to go back to character list */ }
        <Link to="/">Back to Character List</Link>
    </div>
  );
}

export default CharacterDetail;
