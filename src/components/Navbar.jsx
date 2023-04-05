import SearchPokemon from "./SearchPokemon";

import { useGlobalContext } from "../context";
import { Box, Container, Typography } from "@mui/material";

const Navbar = () => {
  const { pokemonData } = useGlobalContext();
  const { id, name } = pokemonData;
  return (
    <Container sx={{ display: "flex" }}>
      <Box>
        <Typography>#{id}</Typography>
        <Typography>{name}</Typography>
      </Box>
      <SearchPokemon />
    </Container>
  );
};
export default Navbar;
