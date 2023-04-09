import { Box } from "@mui/material";
import pokeball from "../assets/images/pokeball.svg";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        component="img"
        className="rotating"
        sx={{
          height: 450,
          width: 450,
        }}
        src={pokeball}
        alt="pokeball"
      />
    </Box>
  );
};
export default Loading;
