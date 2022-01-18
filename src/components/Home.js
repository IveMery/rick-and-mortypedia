import React, { useContext } from "react";
import { Grid, Typography } from "@material-ui/core";
import CardItem from "./CardItem";
import ProgressBar from "./ProgressBar";
import CustomPagination from "./CustomPagination";
import { CharactersContext } from "../contexts/CharactersContext";
import Footer from "./Footer";

const Home = () => {
  const { isLoading, dataFetch, numOfPages, setPage } =
    useContext(CharactersContext);

  return (
    <>
      <Typography variant="h3" align="center">
        Lista de Personajes
      </Typography>
      <Grid container direction="row" justifyContent="center">
        {isLoading && <ProgressBar />}

        {dataFetch?.map((character) => {
          const { id, name, image, url } = character;
          return (
            <CardItem key={id} id={id} name={name} image={image} url={url} />
          );
        })}
      </Grid>
      <CustomPagination setPage={setPage} numOfPage={numOfPages} />
      <Footer />
    </>
  );
};

export default Home;
