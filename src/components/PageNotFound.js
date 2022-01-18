import React from "react";
import { Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <h3>No encontramos la pagina que buscabas</h3>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary">
          Inicio
        </Button>
      </Link>
    </Box>
  );
};

export default PageNotFound;
