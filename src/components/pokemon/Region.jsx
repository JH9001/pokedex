import { useGlobalContext } from "../../context";
import { Box, Card, Grid, Skeleton, Typography } from "@mui/material";

const Region = () => {
  const { pokemonRegion } = useGlobalContext();

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Region:
      </Typography>
      <Typography sx={{ fontWeight: 500 }}>{pokemonRegion}</Typography>
    </Box>
  );
};
export default Region;
