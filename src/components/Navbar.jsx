import SearchPokemon from "./SearchPokemon";

import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <Container sx={{ pt: "3rem" }}>
      <SearchPokemon />
    </Container>
  );
};
export default Navbar;
