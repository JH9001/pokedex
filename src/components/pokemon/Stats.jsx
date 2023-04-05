import { Box, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";

const Stats = () => {
  const { pokemonData } = useGlobalContext();
  const { stats } = pokemonData;

  return (
    <Box>
      <Typography variant="h6">Base Stats</Typography>
      <Box sx={{ display: "flex" }}>
        {stats.map((stat, index) => {
          return (
            <Box key={index}>
              <Typography>{stat.stat.name}</Typography>
              <Typography>{stat.base_stat}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default Stats;
