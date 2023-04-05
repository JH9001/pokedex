import SearchPokemon from "./SearchPokemon";

import { useGlobalContext } from "../context";
import { Box, Container, Typography } from "@mui/material";

const Navbar = () => {
  const { pokemonData } = useGlobalContext();
  const { id, name } = pokemonData;
  return (
    <Container sx={{ display: "flex", pt: "4rem" }}>
      <SearchPokemon />
    </Container>
  );
};
export default Navbar;
