import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";

import LeftNavBar from "../header/LeftNav";
import RightNavBar from "../header/RightNav";
import "../header/Header.css";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className="appbar-styles">
      <Toolbar className="toolbar-styles">
        <LeftNavBar />
        <RightNavBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
