import { Box, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";

const Title = () => {
  const { pokemonData } = useGlobalContext();
  const { id, name } = pokemonData;

  return (
    <Box sx={{ mb: "1rem" }}>
      <Typography
        variant="h4"
        color={"white"}
        sx={{
          fontWeight: 700,
          textShadow: "0 5px 30px rgba(0,0,0,.35)",
        }}
      >
        #{id}
      </Typography>

      <Typography
        variant="h4"
        color={"white"}
        sx={{
          fontWeight: 700,
          textShadow: "0 5px 30px rgba(0,0,0,.35)",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};
export default Title;
