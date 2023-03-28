import Pokemon from "./Pokemon";
import Loading from "./Loading";

import { useGlobalContext } from "../context";
import { Typography } from "@mui/material";

const Pokedex = () => {
  const { loading, pokemon } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (pokemon.length < 1) {
    return <Typography>this pokemon does not exist</Typography>;
  }
  return <div>Pokedex</div>;
};
export default Pokedex;
