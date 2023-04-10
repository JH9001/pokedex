import { Box, Card, Typography } from "@mui/material";
import { useGlobalContext } from "../../context";

import Grid from "@mui/material/Grid";

import { typeIcons } from "../../data/data";

const Types = () => {
  const { pokemonData } = useGlobalContext();
  const { types } = pokemonData;

  return (
    <Box>
      <Grid container spacing={2}>
        {types.map((type) => {
          return typeIcons.map((icon, index) => {
            if (type.type.name === icon.name) {
              return (
                <Grid item key={index}>
                  <Box
                    component="img"
                    sx={{
                      height: "3rem",
                      width: "3rem",
                    }}
                    src={icon.image}
                    alt={icon.name}
                  />
                </Grid>
              );
            }
          });
        })}
      </Grid>
    </Box>
  );
};
export default Types;

// {types.map((type, index) => {
//   return (
//     <Grid item key={index}>
//       <Box sx={{ mb: "1rem" }}>
//         <Card sx={{ padding: "5px" }}>
//           <Typography sx={{ fontWeight: 500 }}>
//             {type.type.name}
//           </Typography>
//         </Card>
//       </Box>
//     </Grid>
//   );
// })}

// {types.map((type, index) => {
//   typeIcons.map((icon) => {
//     if (type.name === icon.name) {
//       console.log("YOLO");
//       return (
//         <Box key={index}>
//           <img src={icon} alt="test" />;
//         </Box>
//       );
//     }
//   });
// })}
