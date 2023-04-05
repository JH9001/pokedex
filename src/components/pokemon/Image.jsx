import { Box, Typography } from "@mui/material";

import { IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useGlobalContext } from "../../context";
import Loading from "../Loading";
import { useState } from "react";
import Region from "./Region";

const Image = () => {
  const { pokemonData } = useGlobalContext();
  const { id, name, image, shiny, color } = pokemonData;

  const [showShiny, setShowShiny] = useState(false);

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Box sx={{ display: "flex", flexGrow: "1" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography color={"white"} variant="h5">
              #{id}
            </Typography>
            <Typography color={"white"} variant="h5">
              {name}
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={() => setShowShiny(!showShiny)}>
          {<AutoAwesomeIcon style={{ fontSize: 50 }} />}
        </IconButton>
      </Box>
      <Box>
        {image ? (
          <img src={showShiny ? shiny : image} alt={name} />
        ) : (
          <Loading />
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Region />
      </Box>
    </Box>
  );
};
export default Image;
