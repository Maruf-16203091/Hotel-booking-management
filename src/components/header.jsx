import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#ffffff", width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "20px", // Adjust horizontal padding
          height: "80px", // Set a fixed height to maintain consistent spacing
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center", // Adjust margin to create space around items
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "120px",
                height: "auto",
                marginTop: "15px",
                marginRight: "40px",
              }}
            />
          </Link>

          <BottomNavigation showLabels>
            <BottomNavigationAction
              component={Link}
              to="/hotels"
              label={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif", // Apply Montserrat font
                  }}
                >
                  Hotels
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0,
                width: "auto", // Set width to auto
                marginX: "-20px", // Adjust margin for consistent spacing
              }}
            />
            <BottomNavigationAction
              onClick={handleClick}
              label={
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Montserrat, sans-serif", // Apply Montserrat font
                      marginLeft: "-10px", // Adjust margin to align with "Hotels" label
                    }}
                  >
                    Transport
                  </Typography>
                  <ArrowDropDownIcon />
                </div>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0,
                width: "auto", // Set width to auto
                marginX: "20px", // Adjust margin for consistent spacing
              }}
            />
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <List>
                <ListItem
                  button
                  component={Link}
                  to="/flights"
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <FlightIcon />
                  </ListItemIcon>
                  <ListItemText primary="Flights" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/bus"
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <DirectionsBusIcon />
                  </ListItemIcon>
                  <ListItemText primary="Bus" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/train"
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <TrainIcon />
                  </ListItemIcon>
                  <ListItemText primary="Train" />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/boats"
                  onClick={handleClose}
                >
                  <ListItemIcon>
                    <DirectionsBoatIcon />
                  </ListItemIcon>
                  <ListItemText primary="Boats" />
                </ListItem>
              </List>
            </Popover>

            <BottomNavigationAction
              component={Link}
              to="/services"
              label={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif", // Apply Montserrat font
                  }}
                >
                  Coupons & Deals
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0,
                width: "auto", // Set width to auto
                marginX: "20px", // Adjust margin for consistent spacing
                whiteSpace: "nowrap", // Prevent line breaks
              }}
            />
            <BottomNavigationAction
              component={Link}
              to="/contact"
              label={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif", // Apply Montserrat font
                  }}
                >
                  Apartments
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0,
                width: "auto", // Set width to auto
                marginX: "20px", // Adjust margin for consistent spacing
              }}
            />
            <BottomNavigationAction
              component={Link}
              to="/attraction"
              label={
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Montserrat, sans-serif", // Apply Montserrat font
                  }}
                >
                  Attractions
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0,
                width: "auto", // Set width to auto
                marginX: "0px", // Adjust margin for consistent spacing
              }}
            />
          </BottomNavigation>
        </Box>
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
