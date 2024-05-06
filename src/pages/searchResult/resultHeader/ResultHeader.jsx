import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tab: {
    "&.Mui-selected": {
      backgroundColor: "#5392F9", // Background color on tab click
      color: "#fff", // Text color on tab click
    },
  },
});

const ResultHeader = () => {
  const [selectedTab, setSelectedTab] = useState(1); // Initialize to 1 for "Our Picks"
  const classes = useStyles();

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "76%",
        marginTop: "60px",
        borderRadius: "4px",
        marginLeft: "619px",
        marginBottom: "-80px",
        color: "black",
        backgroundColor: "#FFFFFF",
      }}
    >
      
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          aria-label="tabs options"
          textColor="inherit"
          textTransform="none"
          style={{ flexGrow: 1 }} // Make tabs grow evenly
        >
          <Tab
            label={<span style={{ textTransform: "none" }}>Sort</span>}
            sx={{
              backgroundColor: "#A8A8A8",
              fontWeight: "1000",
            }}
            disabled
          />
          <Tab
            label={<span style={{ textTransform: "none" }}>Our Picks</span>}
            className={classes.tab}
          />
          <Tab
            label={<span style={{ textTransform: "none" }}>Top Reviewed</span>}
            className={classes.tab}
          />
          <Tab
            label={
              <span style={{ textTransform: "none" }}>Lowest Price First</span>
            }
            className={classes.tab}
          />
          <Tab
            label={<span style={{ textTransform: "none" }}>Distance</span>}
            className={classes.tab}
          />
          <Tab
            label={<span style={{ textTransform: "none" }}>Hot Deals</span>}
            className={classes.tab}
          />
        </Tabs>
    </AppBar>
  );
};

export default ResultHeader;
