import React from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"; // Import your logo image

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px",
        }}
      >
        <Box>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{ width: "120px", height: "auto", marginTop: "15px" }}
            />
          </Link>
        </Box>
        <Box>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              color: "#2a2a2e",
              fontWeight: "bold",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#2a2a2e",
              },
            }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/services"
            color="inherit"
            sx={{
              color: "#2a2a2e",
              fontWeight: "bold",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#2a2a2e",
              },
            }}
          >
            Services
          </Button>
          <Button
            component={Link}
            to="/contact"
            color="inherit"
            sx={{
              color: "#2a2a2e",
              fontWeight: "bold",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "#2a2a2e",
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
