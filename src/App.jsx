import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/system";
import { useGlobalContext } from "./context";

import Home from "./pages/Home";
import Error from "./pages/Error";

const App = () => {
  const { pokemonData } = useGlobalContext();
  const { color } = pokemonData;

  return (
    <Box className={color} sx={{ pt: "5rem", pl: "4rem" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};
export default App;
