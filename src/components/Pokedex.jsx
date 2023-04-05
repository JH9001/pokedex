import Loading from "./Loading";
import Image from "./pokemon/Image";
import PokeCard from "./PokeCard";

import { Container, Typography } from "@mui/material";

import { useGlobalContext } from "../context";

const Pokedex = () => {
  const { isLoading, pokemonData } = useGlobalContext();
  const { id } = pokemonData;

  if (isLoading) {
    return <Loading />;
  }
  if (id < 1) {
    return <Typography>no known Pokemon with this name</Typography>;
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image />
      <PokeCard />
    </Container>
  );
};
export default Pokedex;
