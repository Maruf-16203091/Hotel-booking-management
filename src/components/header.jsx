import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#07784b", width: "100%" }}>
      <Toolbar
        sx={{
          paddingLeft: "20px",
          paddingRight: "20px",
          justifyContent: "space-between",
        }}
      >
        {" "}
        {/* Add padding on both sides and align items */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: "white",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              color: "white",
            },
          }}
        >
          Booking
        </Typography>
        <Box>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white", // Change background color with opacity on hover
              },
            }} // Add margin for spacing
          >
            About
          </Button>
          <Button
            component={Link}
            to="/services"
            color="inherit"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white", // Change background color with opacity on hover
              },
            }} // Add margin for spacing
          >
            Services
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "white", // Change background color with opacity on hover
              },
            }} // Add margin for spacing
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
