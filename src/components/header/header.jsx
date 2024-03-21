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
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import LeftNavBar from "../header/LeftNav";
import RightNavBar from "../header/RightNav";

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
        <LeftNavBar />
        <RightNavBar />

        <MenuIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
