import SearchPokemon from "../components/SearchPokemon";
import Pokedex from "../components/Pokedex";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <Box className={"bgHeight"}>
      <SearchPokemon />
      <Pokedex />
    </Box>
  );
};
export default Home;
