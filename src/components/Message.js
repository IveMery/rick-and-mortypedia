import React from "react";
import noresult from "../assets/noresult.png";
import { Grid } from "@material-ui/core";

const Message = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <p>NO SE ENCONTRARON RESULTADOS PARA ESTA BUSQUEDA</p>
      <img src={noresult} alt="noresult" width="30%" />
    </Grid>
  );
};

export default Message;
