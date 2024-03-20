import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0, // Remove padding
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

          <BottomNavigation showLabels>
            <BottomNavigationAction
              component={Link}
              to="/"
              label={
                <Typography sx={{ fontWeight: "bold" }}>Hotels</Typography>
              }
              sx={{ color: "#2a2a2e", padding: 0 }} // Remove padding
            />
            <BottomNavigationAction
              component={Link}
              to="/about"
              label={
                <Typography sx={{ fontWeight: "bold" }}>Transport</Typography>
              }
              sx={{ color: "#2a2a2e", padding: 0 }} // Remove padding
            />
            <BottomNavigationAction
              component={Link}
              to="/services"
              label={
                <Typography sx={{ fontWeight: "bold" }}>
                  Coupons & Deals
                </Typography>
              }
              sx={{ color: "#2a2a2e", padding: 0 }} // Remove padding
            />
            <BottomNavigationAction
              component={Link}
              to="/contact"
              label={
                <Typography sx={{ fontWeight: "bold" }}>Apartments</Typography>
              }
              sx={{ color: "#2a2a2e", padding: 0 }} // Remove padding
            />
          </BottomNavigation>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
