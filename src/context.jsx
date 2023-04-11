import { useState, useContext, useEffect, createContext } from "react";

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
    shiny: "",
    color: "",
  });
  const [pokemonID, setPokemonID] = useState(1);
  const [pokemonShiny, setPokemonShiny] = useState(false);
  const [pokemonRegion, setPokemonRegion] = useState("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await Promise.all([
        axios(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`),
        axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemonSearch}`),
        axios(`https://pokeapi.co/api/v2/pokemon-species/${pokemonSearch}`),
      ]);

      const {
        data: {
          id,
          name,
          height,
          weight,
          stats,
          types,
          abilities,
          sprites: {
            other: {
              "official-artwork": { front_default: image },
            },
          },
          sprites: {
            other: {
              "official-artwork": { front_shiny: shiny },
            },
          },
        },
      } = response[0];

      const {
        data: {
          color: { name: color },
        },
      } = response[1];

      const {
        data: {
          names: {
            0: { name: japaneseName },
          },
        },
      } = response[2];

      if (response) {
        setPokemonSearch(id);
        setPokemonData({
          id,
          name: name[0].toUpperCase() + name.slice(1),
          height: height / 10,
          weight: weight / 10,
          stats,
          types,
          abilities,
          image,
          shiny,
          color,
          japaneseName,
        });
        setPokemonID(id);
      } else {
        console.log("FIX ME!");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  const showRegion = (id) => {
    if (id >= 1 && id <= 151) setPokemonRegion("Kanto");
    if (id >= 152 && id <= 251) setPokemonRegion("Johto");
    if (id >= 252 && id <= 386) setPokemonRegion("Hoenn");
    if (id >= 387 && id <= 493) setPokemonRegion("Sinnoh");
    if (id >= 494 && id <= 649) setPokemonRegion("Unova");
    if (id >= 650 && id <= 721) setPokemonRegion("Kalos");
    if (id >= 722 && id <= 809) setPokemonRegion("Alola");
    if (id >= 810 && id <= 890) setPokemonRegion("Galar");
    if (id >= 891 && id <= 905) setPokemonRegion("Hisui");
    if (id >= 906 && id <= 1010) setPokemonRegion("Paldea");
  };

  useEffect(() => {
    fetchData();
    showRegion(pokemonID);
  }, [pokemonSearch]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        pokemonSearch,
        pokemonData,
        pokemonShiny,
        pokemonRegion,
        setIsLoading,
        setPokemonSearch,
        setPokemonData,
        setPokemonShiny,
        setPokemonRegion,
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
