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
import Logo from "../../assets/logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import "../header/Header.css";
const HeaderBottomNavigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="left-box-styles">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logo-styles" />
      </Link>

      <BottomNavigation showLabels>
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={<Typography className="text-styles">Hotels</Typography>}
          className="bottom-nav-action-styles-hotels"
        />
        <BottomNavigationAction
          onClick={handleClick}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography className="text-styles">Transport</Typography>
              <ArrowDropDownIcon />
            </div>
          }
          className="bottom-nav-action-styles-transport"
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
                primaryTypographyProps={{ className: "list-item-text-styles" }}
              />
            </ListItem>

            <ListItem button component={Link} to="/bus" onClick={handleClose}>
              <ListItemIcon>
                <DirectionsBusIcon />
              </ListItemIcon>
              <ListItemText
                primary="Bus"
                primaryTypographyProps={{ className: "list-item-text-styles" }}
              />
            </ListItem>

            <ListItem button component={Link} to="/train" onClick={handleClose}>
              <ListItemIcon>
                <TrainIcon />
              </ListItemIcon>
              <ListItemText
                primary="Train"
                primaryTypographyProps={{ className: "list-item-text-styles" }}
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
            <Typography className="text-styles">Coupons & Deals</Typography>
          }
          className="bottom-nav-action-styles-coupons"
        />
        <BottomNavigationAction
          component={Link}
          to="/contact"
          label={<Typography className="text-styles">Apartments</Typography>}
          className="bottom-nav-action-styles-apartments"
        />
        <BottomNavigationAction
          component={Link}
          to="/attraction"
          label={<Typography className="text-styles">Attractions</Typography>}
          className="bottom-nav-action-styles-atractions"
        />
      </BottomNavigation>
    </Box>
  );
};

export default HeaderBottomNavigation;
