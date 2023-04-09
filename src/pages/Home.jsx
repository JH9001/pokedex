import SearchPokemon from "../components/SearchPokemon";
import Pokedex from "../components/Pokedex";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ pl: "2rem", pr: "2rem" }}>
      <Pokedex />
    </Box>
  );
};
export default Home;
