import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Tab, Tabs } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const ResultHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
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
          
          <Tabs
            value={selectedTab}
            onChange={handleChangeTab}
            aria-label="tabs options"
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Sort" disabled />
            <Tab label="Our Picks" />
            <Tab label="Top Reviewed" />
            <Tab label="Lowest Price First" />
            <Tab label="Distance" />
            <Tab label="Hot Deals" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ResultHeader;
