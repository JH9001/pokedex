import Loading from "./Loading";
import Image from "./pokemon/Image";

import { Box, Typography } from "@mui/material";

import { useGlobalContext } from "../context";
import Biometrics from "./pokemon/Biometrics";
import Types from "./pokemon/Types";
import Stats from "./pokemon/Stats";
import Abilities from "./pokemon/Abilities";
import Region from "./pokemon/Region";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Biometrics />
        <Image />
        <Box>
          <Types />
          <Stats />
          <Abilities />
        </Box>
      </Box>
    </Box>
  );
};
export default Pokedex;
