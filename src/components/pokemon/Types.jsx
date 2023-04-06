import { Box, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";

const Types = () => {
  const { pokemonData } = useGlobalContext();
  const { types } = pokemonData;

  return (
    <Box sx={{ display: "flex" }}>
      {types.map((type, index) => {
        return (
          <Box key={index} sx={{ margin: "1rem" }}>
            <Typography>{type.type.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
export default Types;
