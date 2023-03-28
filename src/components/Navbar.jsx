import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <Link to="/">
        <Typography>Pokedex</Typography>
      </Link>
    </Box>
  );
};
export default Navbar;
