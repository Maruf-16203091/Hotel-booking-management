import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "white", // Text color
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Text shadow
  },
  colorfulBackground: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)", // Box shadow
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorfulBackground}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Hotel Booking System
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
