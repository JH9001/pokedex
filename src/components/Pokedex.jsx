import Pokemon from "./Pokemon";
import Loading from "./Loading";

import { useGlobalContext } from "../context";
import { Typography } from "@mui/material";

const Pokedex = () => {
  const { isLoading, pokemonList } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  if (pokemonList.length < 1) {
    return <Typography>this pokemon does not exist</Typography>;
  }
  return <div>Pokedex</div>;
};
export default Pokedex;
