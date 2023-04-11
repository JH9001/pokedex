import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../../context";

const Abilities = () => {
  const { pokemonData } = useGlobalContext();
  const { abilities } = pokemonData;

  return (
    <Box sx={{ mt: "2rem" }}>
      <Typography
        variant="h4"
        color={"white"}
        sx={{
          fontWeight: 700,
          mb: "2rem",
          textShadow: "0 5px 30px rgba(0,0,0,.35)",
        }}
      >
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
