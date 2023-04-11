import SearchPokemon from "../components/SearchPokemon";
import Pokedex from "../components/Pokedex";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Box className={"bgHeight"} sx={{ pl: "1rem", pt: "5vh" }}>
      <Grid container>
        <Grid item xs={12} sm={4} md={2} lg={2}></Grid>
        <Grid item xs={12} sm={8} md={10} lg={6}></Grid>
        <Grid item xs={12} lg={4}>
          <SearchPokemon />
        </Grid>
      </Grid>
      <Pokedex />
    </Box>
  );
};
export default Home;
