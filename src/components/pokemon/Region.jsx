import { useGlobalContext } from "../../context";
import { Box, Skeleton, Typography } from "@mui/material";

const Region = () => {
  const { pokemonRegion } = useGlobalContext();

  return (
    <Box>
      <Typography
        color={"white"}
        sx={{
          textShadow: "0 0 12px rgba(0,0,0,.25)",
          fontSize: "1.4rem",
          fontWeight: 500,
        }}
      >
        Region: {pokemonRegion}
      </Typography>
    </Box>
  );
};
export default Region;
