import Pokemon from "./Pokemon";
import Loading from "./Loading";

import { useGlobalContext } from "../context";
import { Box, Typography } from "@mui/material";

const Pokedex = () => {
  const { isLoading, pokemonID, pokemonData } = useGlobalContext();
  const { id, name, height, weight, stats, types, abilities } = pokemonData;

  if (isLoading) {
    return <Loading />;
  }
  if (pokemonID < 1) {
    return <Typography>no known Pokemon with this name</Typography>;
  }
  return (
    <Box>
      <Typography>id: {id}</Typography>
      <Typography>name: {name}</Typography>
      <Typography>height: {height}</Typography>
      <Typography>weight: {weight}</Typography>
      {stats.map((stat, index) => {
        return (
          <Box key={index}>
            <Typography>{stat.stat.name}</Typography>
            <Typography>{stat.base_stat}</Typography>
          </Box>
        );
      })}
      {types.map((type, index) => {
        return (
          <Box key={index}>
            <Typography>{type.type.name}</Typography>
          </Box>
        );
      })}
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
export default Pokedex;
