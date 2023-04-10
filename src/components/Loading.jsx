import { Box, Grid } from "@mui/material";
import pokeball from "../assets/images/pokeball.png";

const Loading = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        component="img"
        className="rotating"
        loading="lazy"
        alt="pokeball"
        src={pokeball}
        sx={{
          width: "25rem",
        }}
      />
    </Box>
  );
};
export default Loading;
