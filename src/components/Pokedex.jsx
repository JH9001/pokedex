import Loading from "./Loading";
import Image from "./pokemon/Image";

import { Box, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../context";
import Biometrics from "./pokemon/Biometrics";
import Types from "./pokemon/Types";
import Stats from "./pokemon/Stats";
import Abilities from "./pokemon/Abilities";
import Region from "./pokemon/Region";
import Navbar from "./Navbar";

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
      <Navbar />
      <Grid container spacing={2}>
        <Grid
          item
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
        </Grid>

        <Grid
          item
          sx={{ display: "flex", justifyContent: "center", flex: "1" }}
        >
          <Box>{image ? <Image /> : <Loading />}</Box>
        </Grid>

        <Grid
          item
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
        </Grid>
      </Grid>
    </Box>
  );
};
export default Pokedex;
