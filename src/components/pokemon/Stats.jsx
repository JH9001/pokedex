import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../../context";

const Stats = () => {
  const { pokemonData } = useGlobalContext();
  const { stats } = pokemonData;

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
        Base Stats:
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
        {stats.map((stat, index) => {
          return (
            <Grid item key={index}>
              <Box sx={{ mb: "1rem" }}>
                <Card sx={{ padding: "5px" }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    {stat.stat.name}: {stat.base_stat}
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

export default Stats;
