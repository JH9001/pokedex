import Loading from "./Loading";
import Image from "./pokemon/Image";

import { Box, Skeleton, Typography } from "@mui/material";

import { useGlobalContext } from "../context";
import Biometrics from "./pokemon/Biometrics";
import Types from "./pokemon/Types";
import Stats from "./pokemon/Stats";
import Abilities from "./pokemon/Abilities";
import Region from "./pokemon/Region";

const Pokedex = () => {
  const { isLoading, pokemonData } = useGlobalContext();
  const { id, image } = pokemonData;

  if (isLoading) {
    return <Loading />;
  }
  if (id < 1) {
    return <Typography>no known Pokemon with this name</Typography>;
  }
  return (
    <Box>
      <Box sx={{ display: "flex", pt: "5rem" }}>
        <Box
          sx={{
            display: "flex",
            mr: "auto",
            pr: "5rem",
            flex: "1",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Biometrics />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", flex: "1" }}>
          {image ? <Image /> : <Loading />}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            ml: "auto",
            flex: "1",
          }}
        >
          <Types />
          <Stats />
          <Abilities />
        </Box>
      </Box>
    </Box>
  );
};
export default Pokedex;
