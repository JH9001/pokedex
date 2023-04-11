import { useGlobalContext } from "../../context";
import { Box, Typography } from "@mui/material";

const Region = () => {
  const { pokemonRegion } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        transform: "rotate(-90deg) translateY(20px) translateX(30px)",
        transformOrigin: "0 50%",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mr: "10px" }}>
        Region:
      </Typography>

      <Typography sx={{ fontWeight: 500 }}>{pokemonRegion}</Typography>
    </Box>
  );
};
export default Region;
