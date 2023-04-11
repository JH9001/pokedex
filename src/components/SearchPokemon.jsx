import { Formik } from "formik";
import { useGlobalContext } from "../context";

import { searchSchema } from "../schemas/searchSchema";
import { Box, Button, TextField, Typography } from "@mui/material";

const initialValue = {
  pokemon: "",
};

const SearchPokemon = () => {
  const { pokemonData, setPokemonSearch } = useGlobalContext();
  const { color } = pokemonData;

  const handleSubmit = (values, { resetForm }) => {
    const { pokemon } = values;
    setPokemonSearch(pokemon);
    resetForm();
  };

  return (
    <Box>
      <Typography fontWeight={700}>Search by Name or ID</Typography>
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
          <form onSubmit={handleSubmit} autoComplete="off">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                variant="outlined"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pokemon}
                name="pokemon"
                error={!!touched.pokemon && !!errors.pokemon}
                helperText={touched.pokemon && errors.pokemon}
                sx={{
                  bgcolor: "white",
                  width: { sm: 200, md: 300 },
                }}
              />
              <Button
                variant="contained"
                type="submit"
                sx={{
                  height: "55px",
                  bgcolor: "white",
                  color: { color },
                  fontWeight: 700,
                }}
              >
                Go!
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
export default SearchPokemon;
