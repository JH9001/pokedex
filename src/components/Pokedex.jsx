import Loading from "./Loading";
import Image from "./pokemon/Image";

import { Box, Container, Skeleton, Typography } from "@mui/material";
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
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          pt: "3rem",
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
        }}
      >
        {/* BIOMETRICS */}
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          sm={4}
          md={2}
          lg={2}
        >
          <Biometrics />
        </Grid>

        {/* IMAGE */}
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          sm={8}
          md={10}
          lg={6}
        >
          {image ? <Image /> : <Loading />}
        </Grid>

        {/* TYPES, STATS, ABILITIES */}
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          lg={4}
        >
          <Types />
          <Stats />
          <Abilities />
        </Grid>

        {/* REGION */}
        <Grid
          item
          sx={{ display: "flex", justifyContent: "center" }}
          xs={12}
          lg={8}
        >
          <Region />
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    </Box>
  );
};
export default Pokedex;
