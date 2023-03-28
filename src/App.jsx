import { BrowserRouter, Routes, Route } from "react-router-dom";

import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
