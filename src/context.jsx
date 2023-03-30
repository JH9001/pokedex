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
  const [pokemonID, setPokemonID] = useState(1);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonHeight, setPokemonHeight] = useState(0);
  const [pokemonWeight, setPokemonWeight] = useState(0);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  // const [pokemonImage, setPokemonImage] = useState([]);
  // const [pokemonColor,setPokemonColor] = useState("")
  // const [pokemonRegion, setPokemonRegion] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${url}${pokemonID}`);

      console.log(response);

      const {
        data: { id, name, height, weight, stats, types, abilities },
      } = response;

      console.log(id, name, height, weight, stats, types, abilities);

      if (response) {
        setPokemonID(id);
        setPokemonName(name);
        setPokemonHeight(height);
        setPokemonWeight(weight);
        setPokemonStats(stats);
        setPokemonTypes(types);
        setPokemonAbilities(abilities);
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
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        pokemonID,
        pokemonName,
        pokemonHeight,
        pokemonWeight,
        pokemonStats,
        pokemonTypes,
        pokemonAbilities,
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
