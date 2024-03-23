import {
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
import LanguageModal from "../modals/LanguageModal";
import CurrencyModal from "../modals/CurrencyModal";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const RightNavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box
      sx={{
        position: "relative",
        justifyContent: "flex-end",
        display: "inline-flex",
        flex: "1 1 0%",
        minWidth: "unset",
        marginLeft: "500px",
        padding: "30px",
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
                padding: "12px 16px", // Add padding for better appearance
                color: "rgb(255, 86, 125)", // Set text color to rgb(255, 86, 125)
                transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                fontSize: "14px",
                "&:hover": {
                  borderColor: "rgb(255, 86, 125)",
                  backgroundColor: "rgb(255, 86, 125)", // Change border color to red on hover
                  color: "white",
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
            fontWeight: "400",
            lineHeight: "1.42857",
            fontSize: "13px",
          }}
        />

        <CurrencyModal />
        <LanguageModal />
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={
            <Typography
              sx={{
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-serif", // Apply Mallory font
                borderRadius: "4px", // Add border radius for rounded corners
                padding: "12px 16px", // Add padding for better appearance
                color: "rgb(83, 146, 249)", // Set text color to red
                transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                fontSize: "14px",
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
            fontWeight: "400",
            lineHeight: "1.42857",
            fontSize: "13px",
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
                padding: "12px 16px", // Add padding for better appearance
                color: "rgb(83, 146, 249)", // Set text color to red
                transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                fontSize: "14px",
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
            fontWeight: "400",
            lineHeight: "1.42857",
            fontSize: "13px",
          }}
        />
        <AddShoppingCartOutlinedIcon
          style={{
            cursor: "pointer",
            padding: "16px 32px", // Adjust padding as needed
            height: "20px",
            width: "20px",
          }}
        />
        <div
          style={{
            cursor: "pointer",
            padding: "20px 12px",
            height: "13px",
            width: "23px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s ease-in-out 0s",
            borderRadius: isHovered ? "4px" : "transparent",
            backgroundColor: isHovered ? "#86b1f7" : "transparent",
            
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MenuIcon
            onClick={handleClick}
            style={{
              fontSize: "30px",
              color: isHovered ? "white" : "black",
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
                <ListItemText
                  primary="Flights"
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "400",
                      lineHeight: "1.42857",
                      fontSize: "13px",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    },
                  }}
                />
              </ListItem>

              <ListItem button component={Link} to="/bus" onClick={handleClose}>
                <ListItemIcon>
                  <DirectionsBusIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Bus"
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "400",
                      lineHeight: "1.42857",
                      fontSize: "13px",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    },
                  }}
                />
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
                <ListItemText
                  primary="Train"
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "400",
                      lineHeight: "1.42857",
                      fontSize: "13px",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    },
                  }}
                />
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
                <ListItemText
                  primary="Boats"
                  primaryTypographyProps={{
                    sx: {
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                      fontWeight: "400",
                      lineHeight: "1.42857",
                      fontSize: "13px",
                    },
                  }}
                />
              </ListItem>
            </List>
          </Popover>
        </div>
      </BottomNavigation>
    </Box>
  );
};

export default RightNavBar;
