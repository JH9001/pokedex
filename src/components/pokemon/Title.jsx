import { Box, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";

const Title = () => {
  const { pokemonData } = useGlobalContext();
  const { id, name } = pokemonData;

  return (
    <Box>
      <Typography>#{id}</Typography>
      <Typography>{name}</Typography>
    </Box>
  );
};
export default Title;
