import Loading from "./Loading";
import Title from "./pokemon/Title";
import Image from "./pokemon/Image";

import { Box, Container, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../context";
import Biometrics from "./pokemon/Biometrics";
import Types from "./pokemon/Types";
import Stats from "./pokemon/Stats";
import Abilities from "./pokemon/Abilities";
import Region from "./pokemon/Region";
import Shiny from "./pokemon/Shiny";

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
      <Grid container spacing={2}>
        {/* BIOMETRICS */}
        <Grid item xs={12} sm={4} md={2} lg={2}>
          <Title />
          <Biometrics />
          <Region />
        </Grid>

        {/* IMAGE */}
        <Grid
          item
          xs={12}
          sm={8}
          md={10}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {image ? <Image /> : <Loading />}
        </Grid>

        {/* TYPES, STATS, ABILITIES */}
        <Grid item xs={12} lg={4}>
          <Types />
          <Stats />
          <Abilities />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Pokedex;
