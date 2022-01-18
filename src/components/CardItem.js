import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import AOS from "aos";

const CardItem = ({ name, image, id }) => {
  AOS.init({
    duration: 200,
  });

  const useStyles = makeStyles({
    root: {
      margin: 10,
      width: 230,
      border: "none",
      fontFamily: "Varela Round",
      background: "rgb(54, 57, 63)",
      color: "white",
    },
    media: {
      height: 340,
      overflow: "hidden",
      transition: "all 0.2s ease-in",
      "&:hover": {
        transform: " scale(1.1) ",
      },
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt={name}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/CardDetails/${id}`} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained" color="secondary">
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardItem;
