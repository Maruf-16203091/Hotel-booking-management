import React, { useState } from "react";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tab: {
   
    marginRight: "5px",
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
      <Toolbar>
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          aria-label="tabs options"
          textColor="inherit"
          fontWeight="600"
        textTransform= "none" 

        >
          <Tab label="Sort" sx={{ backgroundColor: "#F8F7F9" }} disabled />
          <Tab label="Our Picks" className={classes.tab} />
          <Tab label="Top Reviewed" className={classes.tab} />
          <Tab label="Lowest Price First" className={classes.tab} />
          <Tab label="Distance" className={classes.tab} />
          <Tab label="Hot Deals" className={classes.tab} />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default ResultHeader;
