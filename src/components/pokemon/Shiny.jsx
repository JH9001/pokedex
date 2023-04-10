import { Box } from "@mui/material";

import { IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useGlobalContext } from "../../context";

const Shiny = () => {
  const { pokemonShiny, setPokemonShiny } = useGlobalContext();

  return (
    <Box>
      {pokemonShiny ? (
        <IconButton
          onClick={() => setPokemonShiny(!pokemonShiny)}
          sx={{ color: "#e8b923" }}
        >
          {<AutoAwesomeIcon style={{ fontSize: 45 }} />}
        </IconButton>
      ) : (
        <IconButton
          onClick={() => setPokemonShiny(!pokemonShiny)}
          sx={{ "& :hover": { color: "#e8b923" } }}
        >
          {<AutoAwesomeIcon style={{ fontSize: 45 }} />}
        </IconButton>
      )}
    </Box>
  );
};
export default Shiny;
