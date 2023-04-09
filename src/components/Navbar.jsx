import SearchPokemon from "./SearchPokemon";
import pokedexLogo from "../assets/images/pokedexLogo.svg";

import { Box, Container, Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        pt: "3rem",
        pl: "2rem",
        pr: "2rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            loading="lazy"
            src={pokedexLogo}
            alt="pokedex logo"
            height="5rem"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <SearchPokemon />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Navbar;
