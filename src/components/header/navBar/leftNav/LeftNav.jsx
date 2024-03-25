import React, { useState } from "react";
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
import Logo from "../../../../assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import NewBadge from "../../badges/NewBadge";

const HeaderBottomNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        padding: "0px 16px",
        display: "flex",
        flex: "0 0 auto",
        marginTop: "10px",
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
            marginLeft: "20px",
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
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif", // Apply Montserrat font

                fontWeight: "400",
                lineHeight: "1.42857",
                fontSize: "13px",
                fontWeight: "700",
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
            <Box sx={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif", // Apply Montserrat font
                    marginLeft: "-10px", // Adjust margin to align with "Hotels" label

                    fontWeight: "400",
                    lineHeight: "1.42857",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  Transport
                </Typography>

                <ArrowDropDownIcon />
              </div>
            </Box>
          }
          sx={{
            color: "#2a2a2e",
            padding: 0,
            width: "auto", // Set width to auto
            marginX: "30px",
            // Adjust margin for consistent spacing
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
                    fontWeight: "700",
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
                    fontWeight: "700",
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  },
                }}
              />
            </ListItem>

            <ListItem button component={Link} to="/train" onClick={handleClose}>
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
                    fontWeight: "700",
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  },
                }}
              />
            </ListItem>

            <ListItem button component={Link} to="/boats" onClick={handleClose}>
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
                    fontWeight: "700",
                  },
                }}
              />
            </ListItem>
          </List>
        </Popover>

        <BottomNavigationAction
          component={Link}
          to="/services"
          label={
            <Box sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  fontWeight: "400",
                  lineHeight: "1.42857",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Coupons & Deals
              </Typography>
              <NewBadge />
            </Box>
          }
          sx={{
            color: "#2a2a2e",
            padding: 0,
            width: "auto", // Set width to auto
            marginRight: "10px", // Adjust margin for consistent spacing
            whiteSpace: "nowrap", // Prevent line breaks
          }}
        />
        <BottomNavigationAction
          component={Link}
          to="/contact"
          label={
            <Box sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif", // Apply Montserrat font
                  fontWeight: "400",
                  lineHeight: "1.42857",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Apartments
              </Typography>
            </Box>
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
            // Include the badge within the label
            <Box sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif", // Apply Montserrat font
                  fontWeight: "400",
                  lineHeight: "1.42857",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                Attractions
              </Typography>
              {/* Badge for "New" */}
              <NewBadge />
            </Box>
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
  );
};

export default HeaderBottomNavigation;
