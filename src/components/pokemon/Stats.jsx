import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../../context";

const Stats = () => {
  const { pokemonData } = useGlobalContext();
  const { stats } = pokemonData;

  return (
    <Box sx={{ mt: "1rem" }}>
      <Typography
        variant="h4"
        color={"white"}
        sx={{
          fontWeight: 700,
          mb: "2rem",
          textShadow: "0 5px 30px rgba(0,0,0,.35)",
        }}
      >
        Base stats:
      </Typography>

      <Grid container spacing={2}>
        {stats.map((stat, index) => {
          return (
            <Grid item key={index}>
              <Card sx={{ padding: "5px" }}>
                <Typography sx={{ fontWeight: 500 }}>
                  {stat.stat.name}: {stat.base_stat}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Stats;
