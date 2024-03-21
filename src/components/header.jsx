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
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
        paddingX: "16px",
        backgroundColor: "#ffffff",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingX: "0px 16px",

          color: "#2a2a2e",
          flex: "1 1 0px",
        }}
      >
        <Box
          sx={{
            padding: "0px 16px",
            display: "flex",
            flex: "0 0 auto",
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
                marginX: "10px", // Adjust margin for consistent spacing
                whiteSpace: "nowrap", // Prevent line breaks
              }}
            />
            <BottomNavigationAction
              component={Link}
              to="/contact"
              label={
                <Typography
                  sx={{
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
                marginX: "-10px", // Adjust margin for consistent spacing
              }}
            />
          </BottomNavigation>
        </Box>

        <Box
          sx={{
            position: "relative",
            justifyContent: "flex-end",
            display: "inline-flex",
            flex: "1 1 0%",
            minWidth: "unset",
          }}
        >
          <BottomNavigation showLabels sx={{ flex: 1 }}>
            <BottomNavigationAction
              component={Link}
              to="/hotels"
              label={
                <Typography
                  sx={{
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif", // Apply Mallory font
                    border: "1px solid rgb(255, 86, 125)", // Set border to 1px solid rgb(255, 86, 125)
                    borderRadius: "4px", // Add border radius for rounded corners
                    padding: "8px 12px", // Add padding for better appearance
                    color: "rgb(255, 86, 125)", // Set text color to rgb(255, 86, 125)
                    transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                    "&:hover": {
                      borderColor: "rgb(255, 86, 125)",
                      backgroundColor: "rgb(255, 86, 125)", // Change border color to red on hover
                      color: "white", // Change text color to white on hover
                    },
                  }}
                >
                  List your place
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0, // Set width to auto
                marginX: "4px", // Adjust margin for consistent spacing
                whiteSpace: "nowrap",
              }}
            />

            <BottomNavigationAction
              component={Link}
              to="/services"
              label={
                <Typography
                  sx={{
                    fontFamily: "Montserrat, sans-serif", // Apply Montserrat font
                  }}
                >
                  Euro
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0, // Set width to auto
                marginX: "4px", // Adjust margin for consistent spacing
                whiteSpace: "nowrap", // Prevent line breaks
              }}
            />
            <BottomNavigationAction
              component={Link}
              to="/hotels"
              label={
                <Typography
                  sx={{
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif", // Apply Mallory font

                    borderRadius: "4px", // Add border radius for rounded corners
                    padding: "8px 12px", // Add padding for better appearance
                    color: "rgb(83, 146, 249)", // Set text color to red
                    transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                    "&:hover": {
                      borderColor: "rgb(83, 146, 249)",
                      backgroundColor: "rgb(83, 146, 249)", // Change border color to red on hover
                      color: "white", // Change text color to white on hover
                    },
                  }}
                >
                  Sign in
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0, // Set width to auto
                marginX: "4px", // Adjust margin for consistent spacing
                whiteSpace: "nowrap",
              }}
            />
            <BottomNavigationAction
              component={Link}
              to="/hotels"
              label={
                <Typography
                  sx={{
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif", // Apply Mallory font
                    border: "1px solid rgb(83, 146, 249)", // Set border to 1px solid red
                    borderRadius: "4px", // Add border radius for rounded corners
                    padding: "8px 12px", // Add padding for better appearance
                    color: "rgb(83, 146, 249)", // Set text color to red
                    transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                    "&:hover": {
                      borderColor: "rgb(83, 146, 249)",
                      backgroundColor: "rgb(83, 146, 249)", // Change border color to red on hover
                      color: "white", // Change text color to white on hover
                    },
                  }}
                >
                  Create account
                </Typography>
              }
              sx={{
                color: "#2a2a2e",
                padding: 0, // Set width to auto
                marginX: "4px", // Adjust margin for consistent spacing
                whiteSpace: "nowrap",
              }}
            />
          </BottomNavigation>
        </Box>
        <MenuIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
