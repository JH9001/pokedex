import { Box, Typography } from "@mui/material";

import { useGlobalContext } from "../../context";

const Biometrics = () => {
  const { pokemonData } = useGlobalContext();
  const { height, weight } = pokemonData;

  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Height:
        </Typography>

        <Typography sx={{ fontWeight: 500 }}>{height} meters</Typography>
      </Box>

      <Box>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Weight:
        </Typography>

        <Typography sx={{ fontWeight: 500 }}>{weight} kilograms</Typography>
      </Box>
    </Box>
  );
};
export default Biometrics;
