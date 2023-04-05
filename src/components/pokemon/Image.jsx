import { Box } from "@mui/material";

import { useGlobalContext } from "../../context";

const Image = () => {
  const { pokemonData } = useGlobalContext();
  const { name, image, shiny, color } = pokemonData;

  return (
    <Box>
      <img src={image} alt={name} loading="lazy" />
    </Box>
  );
};
export default Image;
