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
  const [pokemonSearch, setPokemonSearch] = useState("1");
  const [pokemonData, setPokemonData] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    stats: [],
    types: [],
    abilities: [],
    image: "",
    color: "",
    region: "",
  });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${url}${pokemonSearch}`);

      const {
        data: { id, name, height, weight, stats, types, abilities },
      } = response;

      if (response) {
        setPokemonSearch(id);
        setPokemonData({ id, name, height, weight, stats, types, abilities });
      } else {
        console.log("FIX ME!");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pokemonSearch]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        pokemonSearch,
        pokemonData,
        setIsLoading,
        setPokemonSearch,
        setPokemonData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
