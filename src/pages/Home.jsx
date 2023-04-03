import SearchPokemon from "../components/SearchPokemon";
import Pokedex from "../components/Pokedex";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box>
      <SearchPokemon />
      <Pokedex />
    </Box>
  );
};
export default Home;
