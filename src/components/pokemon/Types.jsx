import { Box, Card, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";

import Grid from "@mui/material/Grid";

const Types = () => {
  const { pokemonData } = useGlobalContext();
  const { types } = pokemonData;

  return (
    <Box
      sx={{
        display: "Flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {types.length > 1 ? (
        <Typography variant="h6" sx={{ fontWeight: 700, mb: "1rem" }}>
          Types:
        </Typography>
      ) : (
        <Typography variant="h6" sx={{ fontWeight: 700, mb: "1rem" }}>
          Type:
        </Typography>
      )}

      <Grid
        container
        spacing={2}
        sx={{
          display: "Flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {types.map((type, index) => {
          return (
            <Grid item key={index}>
              <Box sx={{ mb: "1rem" }}>
                <Card sx={{ padding: "5px" }}>
                  <Typography sx={{ fontWeight: 500 }}>
                    {type.type.name}
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
export default Types;
