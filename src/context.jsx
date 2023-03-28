import {
  useState,
  useContext,
  useEffect,
  useCallback,
  createContext,
} from "react";

const url = "https://pokeapi.co/api/v2/pokemon/";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("a");
  const [pokemon, setPokemon] = useState([]);

  return (
    <AppContext.Provider value={(loading, pokemon, setSearch)}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
