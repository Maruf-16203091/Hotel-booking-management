import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

function SearchFilter() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortBy, setSortBy] = useState("Our Picks");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    handleClose();
    // Implement sorting logic here
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Navigation
        </Typography>
        <Button
          id="sort-button"
          aria-controls="sort-menu"
          aria-haspopup="true"
          onClick={handleClick}
          color="inherit"
        >
          Sort: {sortBy}
        </Button>
        <Menu
          id="sort-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleSort("Our Picks")}>Our Picks</MenuItem>
          <MenuItem onClick={() => handleSort("Top Reviewed")}>
            Top Reviewed
          </MenuItem>
          <MenuItem onClick={() => handleSort("Lowest Price First")}>
            Lowest Price First
          </MenuItem>
          <MenuItem onClick={() => handleSort("Distance")}>Distance</MenuItem>
          <MenuItem onClick={() => handleSort("Hot Deals!")}>
            Hot Deals!
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default SearchFilter;
