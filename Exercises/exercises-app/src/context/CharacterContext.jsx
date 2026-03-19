import {createContext, useState, useEffect, useContext} from "react";
export const CharacterContext = createContext();


function CharacterProvider({children}) {
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
    
    return (
        <CharacterContext.Provider value={{characters}}>
            {children}
        </CharacterContext.Provider>
    );      

}  

export const useCharacters = () => {
    const context = useContext(CharacterContext);
    if (context === undefined) {
        throw new Error("useCharacters must be used within a CharacterProvider");
    }
    return context;
};  
export default CharacterProvider;