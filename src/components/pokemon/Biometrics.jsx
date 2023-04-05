import { Box, Typography } from "@mui/material";

import { useGlobalContext } from "../../context";

const Biometrics = () => {
  const { pokemonData } = useGlobalContext();
  const { height, weight } = pokemonData;

  return (
    <Box>
      <Typography variant="h5">{height}</Typography>
      <Typography variant="h5">{weight}</Typography>
    </Box>
  );
};
export default Biometrics;
