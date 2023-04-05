import { Box, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";

const Abilities = () => {
  const { pokemonData } = useGlobalContext();
  const { abilities } = pokemonData;

  return (
    <Box sx={{ display: "flex" }}>
      {abilities.map((ability, index) => {
        return (
          <Box key={index}>
            <Typography>{ability.ability.name}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};
export default Abilities;
