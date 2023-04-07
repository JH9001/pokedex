import * as React from "react";
import { Box, Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import { useGlobalContext } from "../../context";

const Stats = () => {
  const { pokemonData } = useGlobalContext();
  const { stats } = pokemonData;

  return (
    <Box>
      <Typography variant="h6" sx={{ ml: "1rem" }}>
        Base Stats
      </Typography>

      <Grid container spacing={2}>
        {stats.map((stat, index) => {
          return (
            <Grid item xs={8} key={index}>
              <Box sx={{ display: "flex" }}>
                <Card sx={{ display: "flex" }}>
                  <Typography>
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
