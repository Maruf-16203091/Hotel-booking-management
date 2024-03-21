import React, { useState } from "react";
import { AppBar, Toolbar } from "@mui/material";

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
