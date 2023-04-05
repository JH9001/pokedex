import Types from "./pokemon/Types";
import Biometrics from "./pokemon/Biometrics";
import Stats from "./pokemon/Stats";
import Abilities from "./pokemon/Abilities";
import { Card } from "@mui/material";

const PokeCard = () => {
  return (
    <Card>
      <Types />
      <Biometrics />
      <Stats />
      <Abilities />
    </Card>
  );
};
export default PokeCard;
