import { Box, Typography } from "@mui/material";

import { IconButton } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { useGlobalContext } from "../../context";
import { useState } from "react";

const Image = () => {
  const { pokemonData } = useGlobalContext();
  const { id, name, image, shiny } = pokemonData;

  const [showShiny, setShowShiny] = useState(false);

  return (
    <Box sx={{ mt: "1rem" }}>
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
            sx={{ color: "#e8b923" }}
          >
            {<AutoAwesomeIcon style={{ fontSize: 45 }} />}
          </IconButton>
        ) : (
          <IconButton
            onClick={() => setShowShiny(!showShiny)}
            sx={{ "& :hover": { color: "#e8b923" } }}
          >
            {<AutoAwesomeIcon style={{ fontSize: 45 }} />}
          </IconButton>
        )}
      </Box>
      <Box>
        <Box
          component="img"
          loading="lazy"
          alt={name}
          src={showShiny ? shiny : image}
          height="100%"
          preserveAspectRatio="xMinYMin slice"
          width="100%"
          viewBox="0 0 100 100"
          sx={{ pt: "3rem" }}
        />
      </Box>
    </Box>
  );
};
export default Image;
