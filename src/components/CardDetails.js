import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  Paper,
  CardMedia,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ProgressBar from "./ProgressBar";
import { GET_CHARACTER } from "../constants";
import "aos/dist/aos.css";
import AOS from "aos";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 25,
      fontWeight: 900,
      margin: 2,
      color: "#21BF73",
      fontFamily: ["Comic Neue", "cursive"].join(","),
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: 800,
      color: "#21BF",
      fontFamily: ["Comic Neue", "cursive"].join(","),
    },
  },
});

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "2rem",
    marginTop: "2rem",
    backgroundColor: "#faf341",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const CardDetails = () => {
  AOS.init({
    duration: 1500,
  });

  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getCharacter();
  }, []);

  const getCharacter = () => {
    setLoader(true);
    fetch(`${GET_CHARACTER}${id}`)
      .then((response) => response.json())
      .then((res) => {
        setCharacter(res);
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { name, image, species, status, gender, origin, type } = character;

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {loader ? (
            <ProgressBar />
          ) : (
            <>
              <Paper className={classes.container} data-aos="flip-left">
                <Box>
                  <CardMedia
                    component="img"
                    alt={name}
                    image={image}
                    title={name}
                  />
                </Box>
                <Box className={classes.info}>
                  <Typography variant="subtitle1" p={3}>
                    <EmojiPeopleIcon />
                    {name}
                  </Typography>
                  <Typography variant="subtitle2">Genero :{gender}</Typography>
                  <Typography variant="subtitle2">Estado : {status}</Typography>
                  <Typography variant="subtitle2">
                    Especie :{species}
                  </Typography>
                  <Typography variant="subtitle2">
                    Tipo :{type ? type : "Desconocido"}
                  </Typography>
                  <Typography variant="subtitle2">
                    Origen :{origin && origin.name}
                  </Typography>
                </Box>
              </Paper>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button size="small" variant="contained" color="secondary">
                  Volver
                </Button>
              </Link>
            </>
          )}
        </Grid>
      </>
    </ThemeProvider>
  );
};

export default CardDetails;
