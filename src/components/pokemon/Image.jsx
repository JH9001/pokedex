import { Box, Grid } from "@mui/material";

import { useGlobalContext } from "../../context";

import Shiny from "./Shiny";

const Image = () => {
  const { pokemonData, pokemonShiny } = useGlobalContext();
  const { name, image, shiny } = pokemonData;

  return (
    <Grid container>
      <Grid item>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Shiny />
        </Box>
        <Box
          component="img"
          loading="lazy"
          alt={name}
          src={pokemonShiny ? shiny : image}
          sx={{ width: "100%" }}
        />
      </Grid>
    </Grid>
  );
};
export default Image;
