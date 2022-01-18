import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import logo from "./../assets/logo.jpg";
import title from "./../assets/title.png";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import { Link } from "react-router-dom";

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 10,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },

    logo: {
      height: "50px",
      borderRadius: "50%",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <img className={classes.logo} src={logo} alt="logo" />
            </IconButton>
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            <img className={classes.logo} src={title} alt="logo" />
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
            Rick&MortyPedia
          </Typography>
          <Form />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
