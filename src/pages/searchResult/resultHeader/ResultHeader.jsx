import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ResultHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F8F7F9",
          color: "black",
          width: "76%",
          marginTop: "60px",
          borderRadius: "4px",
          marginLeft: "619px",
          marginBottom: "-80px",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sort
          </Typography>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
          >
            <MenuItem>Sort</MenuItem>
            <MenuItem>Our Picks</MenuItem>
            <MenuItem>Top Reviewed</MenuItem>
            <MenuItem>Lowest Price First</MenuItem>
            <MenuItem>Distance</MenuItem>
            <MenuItem>Hot Deals</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ResultHeader;
