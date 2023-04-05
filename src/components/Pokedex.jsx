import Loading from "./Loading";
import Biometrics from "./pokemon/Biometrics";
import Types from "./pokemon/Types";
import Stats from "./pokemon/Stats";
import Abilities from "./pokemon/Abilities";

import { Box, Typography } from "@mui/material";

import { useGlobalContext } from "../context";

const Pokedex = () => {
  const { isLoading, pokemonData } = useGlobalContext();
  const { id } = pokemonData;

  if (isLoading) {
    return <Loading />;
  }
  if (id < 1) {
    return <Typography>no known Pokemon with this name</Typography>;
  }
  return (
    <Box>
      <Biometrics />
      <Types />
      <Stats />
      <Abilities />
    </Box>
  );
};
export default Pokedex;
