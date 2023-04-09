import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/system";
import { useGlobalContext } from "./context";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error from "./pages/Error";

const App = () => {
  const { pokemonData } = useGlobalContext();
  const { color } = pokemonData;

  return (
    <Box className={color}>
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
