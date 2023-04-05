import { Box, Typography } from "@mui/material";

import { IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useGlobalContext } from "../../context";

const Biometrics = () => {
  const { pokemonData } = useGlobalContext();
  const { height, weight, image, shiny } = pokemonData;

  return (
    <Box>
      <Box>
        <Typography>{height}</Typography>
        <Typography>{weight}</Typography>
      </Box>
      <IconButton>{<AutoAwesomeIcon />}</IconButton>
      <img src={image} alt={name} loading="lazy" />
    </Box>
  );
};
export default Biometrics;
