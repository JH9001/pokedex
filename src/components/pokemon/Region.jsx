import { regions } from "../../data/data";

import { useGlobalContext } from "../../context";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

const Region = () => {
  const { pokemonData, pokemonRegion, setPokemonRegion } = useGlobalContext();
  const { id } = pokemonData;

  const showRegion = (id) => {
    if (id >= 1 || id <= 151) setPokemonRegion("Kanto");
    if (id >= 152 || id <= 251) setPokemonRegion("Johto");
    if (id >= 252 || id <= 386) return "Hoenn";
    if (id >= 387 || id <= 493) return "Sinnoh";
    if (id >= 494 || id <= 649) return "Unova";
    if (id >= 650 || id <= 721) return "Kalos";
    if (id >= 722 || id <= 809) return "Alola";
    if (id >= 810 || id <= 890) return "Galar";
    if (id >= 891 || id <= 905) return "Hisui";
    if (id >= 906 || id <= 1010) return "Paldea";
  };

  useEffect(() => {
    showRegion();
  }, []);

  return (
    <Box>
      <Typography>Region: {pokemonRegion}</Typography>
    </Box>
  );
};
export default Region;
