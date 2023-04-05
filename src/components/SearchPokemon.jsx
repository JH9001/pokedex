import { Formik } from "formik";
import { useGlobalContext } from "../context";

import { searchSchema } from "../schemas/searchSchema";
import { Box, Button, TextField } from "@mui/material";

const initialValue = {
  pokemon: "",
};

const SearchPokemon = () => {
  const { setPokemonSearch } = useGlobalContext();

  const handleSubmit = (values, actions) => {
    const { pokemon } = values;
    setPokemonSearch(pokemon);
  };

  return (
    <Box>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValue}
        validationSchema={searchSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              type="text"
              label="Pokemon Name or ID"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.pokemon}
              name="pokemon"
              error={!!touched.pokemon && !!errors.pokemon}
              helperText={touched.pokemon && errors.pokemon}
              sx={{ bgcolor: "white" }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default SearchPokemon;
