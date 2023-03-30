import Pokemon from "./Pokemon";
import Loading from "./Loading";

import { useGlobalContext } from "../context";
import { Box, Typography } from "@mui/material";

const Pokedex = () => {
  const {
    isLoading,
    pokemonID,
    pokemonName,
    pokemonHeight,
    pokemonWeight,
    pokemonStats,
    pokemonTypes,
    pokemonAbilities,
  } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  if (pokemonID < 1) {
    return <Typography>no known Pokemon with this name</Typography>;
  }
  return (
    <Box>
      <Typography>id: {pokemonID}</Typography>
      <Typography>name: {pokemonName}</Typography>
      <Typography>height: {pokemonHeight}</Typography>
      <Typography>weight: {pokemonWeight}</Typography>
      {pokemonStats.map((stat, index) => {
        return (
          <Box key={index}>
            <Typography>{stat.stat.name}</Typography>
            <Typography>{stat.base_stat}</Typography>
          </Box>
        );
      })}
      {pokemonTypes.map((type, index) => {
        return (
          <Box key={index}>
            <Typography>{type.type.name}</Typography>
          </Box>
        );
      })}
      {pokemonAbilities.map((ability, index) => {
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
