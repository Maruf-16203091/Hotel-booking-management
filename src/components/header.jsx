import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2196f3" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Hotel Booking System
        </Typography>
        <Button
          component={Link}
          to="/"
          color="inherit"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/about"
          color="inherit"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/services"
          color="inherit"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Services
        </Button>
        <Button
          component={Link}
          to="/contact"
          color="inherit"
          sx={{ color: "white", fontWeight: "bold" }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
