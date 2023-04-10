import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../../context";

const Abilities = () => {
  const { pokemonData } = useGlobalContext();
  const { abilities } = pokemonData;

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: "1rem" }}>
        Abilities:
      </Typography>

      <Grid container spacing={2}>
        {abilities.map((ability, index) => {
          return (
            <Grid item key={index}>
              <Card sx={{ padding: "5px" }}>
                <Typography sx={{ fontWeight: 500 }}>
                  {ability.ability.name}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Abilities;
