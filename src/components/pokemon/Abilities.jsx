import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../../context";

const Abilities = () => {
  const { pokemonData } = useGlobalContext();
  const { abilities } = pokemonData;

  return (
    <Box
      sx={{
        display: "Flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: "1rem" }}>
        Abilities:
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          display: "Flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {abilities.map((ability, index) => {
          return (
            <Grid item key={index}>
              <Box>
                <Card sx={{ padding: "5px" }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    {ability.ability.name}
                  </Typography>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default Abilities;
