import { Grid, Typography } from "@mui/material";

import { useGlobalContext } from "../../context";

const JapaneseName = () => {
  const { pokemonData } = useGlobalContext();
  const { japaneseName } = pokemonData;

  return (
    <Grid container>
      <Grid item>
        <Typography
          sx={{
            fontSize: "calc(1vw + 1vh + 6vmin)",
            fontWeight: "700",
            opacity: ".5",
            color: "rgba(0, 0, 0, 0.67)",
            width: "100%",
            pl: "1rem",
          }}
        >
          {japaneseName}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default JapaneseName;
