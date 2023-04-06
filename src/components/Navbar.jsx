import SearchPokemon from "./SearchPokemon";

import { Container } from "@mui/material";

const Navbar = () => {
  return (
    <Container sx={{ display: "flex", pt: "4rem", justifyContent: "flex-end" }}>
      <SearchPokemon />
    </Container>
  );
};
export default Navbar;
