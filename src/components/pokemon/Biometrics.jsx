import { Box, Typography } from "@mui/material";

import { useGlobalContext } from "../../context";

const Biometrics = () => {
  const { pokemonData } = useGlobalContext();
  const { height, weight } = pokemonData;

  return (
    <Box>
      <Typography>{height}</Typography>
      <Typography>{weight}</Typography>
    </Box>
  );
};
export default Biometrics;
