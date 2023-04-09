import { Box, Card, Grid, Typography } from "@mui/material";

import { useGlobalContext } from "../../context";

const Biometrics = () => {
  const { pokemonData } = useGlobalContext();
  const { height, weight } = pokemonData;

  return (
    <Box>
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "Flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            pl: "1rem",
          }}
        >
          <Grid item sx={{ mb: "1rem" }}>
            <Box
              sx={{
                display: "Flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pl: "1rem",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: "1rem" }}>
                Height:
              </Typography>
              <Card sx={{ padding: "5px" }}>
                <Typography sx={{ fontWeight: 500 }}>
                  {height} meters
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                display: "Flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                pl: "1rem",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: "1rem" }}>
                Weight:
              </Typography>
              <Card sx={{ padding: "5px" }}>
                <Typography sx={{ fontWeight: 500 }}>
                  {weight} kilograms
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
export default Biometrics;
