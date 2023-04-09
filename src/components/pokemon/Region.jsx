import { useGlobalContext } from "../../context";
import { Box, Card, Grid, Skeleton, Typography } from "@mui/material";

const Region = () => {
  const { pokemonRegion } = useGlobalContext();

  return (
    <Box
      sx={{
        display: "Flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: "1rem" }}>
              Region:
            </Typography>
            <Card sx={{ padding: "5px" }}>
              <Typography sx={{ fontWeight: 500 }}>{pokemonRegion}</Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Region;
