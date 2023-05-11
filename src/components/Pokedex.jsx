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
import JapaneseName from "./pokemon/JapaneseName";

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
    <Box
      sx={{
        mt: "10vh",
        mb: "5vh",
        ml: "1vw",
        mr: "2vw",
      }}
    >
      <Grid container>
        {/* BIOMETRICS */}
        <Grid item xs={12} sm={4} md={2} lg={2}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "100%",
            }}
          >
            <Grid
              item
              sx={{
                display: "flex",
              }}
            >
              <Title />
            </Grid>

            <Grid
              item
              sx={{
                display: "flex",
                ml: "3.5rem",
                mt: "2rem",
                mb: "5rem",
                flexGrow: "0.8",
              }}
            >
              <Biometrics />
            </Grid>

            <Grid item>
              <Region />
            </Grid>
          </Grid>
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
          <JapaneseName />
        </Grid>

        {/* TYPES, STATS, ABILITIES */}
        <Grid
          item
          xs={12}
          lg={4}
          sx={{
            pt: "5vh",
            pl: "7px",
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
