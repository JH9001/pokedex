import { Box } from "@mui/material";

import { useGlobalContext } from "../../context";

const Image = () => {
  const { pokemonData } = useGlobalContext();
  const { name, image, shiny } = pokemonData;

  return (
    <Box>
      <img src={image} alt={name} />
    </Box>
  );
};
export default Image;
