import { Box, Typography } from "@mui/material";

import { IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useGlobalContext } from "../../context";
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
            <Typography
              color={"white"}
              sx={{
                textShadow: "0 0 12px rgba(0,0,0,.25)",
                fontSize: "1.4rem",
                fontWeight: 700,
              }}
            >
              #{id}
            </Typography>
            <Typography
              color={"white"}
              sx={{
                textShadow: "0 0 12px rgba(0,0,0,.25)",
                fontSize: "1.8rem",
                fontWeight: 500,
              }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
        {showShiny ? (
          <IconButton
            onClick={() => setShowShiny(!showShiny)}
            sx={{ color: "gold" }}
          >
            {<AutoAwesomeIcon style={{ fontSize: 50 }} />}
          </IconButton>
        ) : (
          <IconButton
            onClick={() => setShowShiny(!showShiny)}
            sx={{ "& :hover": { color: "gold" } }}
          >
            {<AutoAwesomeIcon style={{ fontSize: 50 }} />}
          </IconButton>
        )}
      </Box>
      <Box>
        <img src={showShiny ? shiny : image} alt={name} loading="lazy" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Region />
      </Box>
    </Box>
  );
};
export default Image;
