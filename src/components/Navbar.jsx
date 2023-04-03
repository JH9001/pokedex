import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import SearchPokemon from "./SearchPokemon";

const Navbar = () => {
  return (
    <Box>
      <SearchPokemon />
    </Box>
  );
};
export default Navbar;
