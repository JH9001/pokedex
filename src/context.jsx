import {
  useState,
  useContext,
  useEffect,
  useCallback,
  createContext,
} from "react";

import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon/";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("a");
  const [pokemonList, setPokemonList] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const {
        data: { results },
      } = await axios(url);

      if (results) {
        const newPokemon = results.map((pokemon) => {
          const { name, url } = pokemon;
          return { name, url };
        });
        setPokemonList(newPokemon);
      } else {
        setPokemonList([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, pokemonList, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
