import React from "react";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <footer>
      <Typography variant="h6" align="center" color="textSecondary">
        &copy; {new Date().getFullYear()} - Ivette Mery
      </Typography>
    </footer>
  );
};

export default Footer;
