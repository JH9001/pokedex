import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Box>
      <Typography>oops! it's a dead end</Typography>
      <Link to="/">back home</Link>
    </Box>
  );
};
export default Error;
