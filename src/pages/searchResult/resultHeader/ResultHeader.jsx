import React, { useState } from "react";
import { AppBar, Tabs, Tab, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const useStyles = makeStyles({
  tab: {
    "&.Mui-selected": {
      backgroundColor: "#5392F9", // Background color on tab click
      color: "#fff", // Text color on tab click
    },
  },
  arrowIcon: {
    fontSize: 20,
    marginLeft: 5,
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
            backgroundColor: "#b5b3b3",
            fontWeight: "600",
          }}
          disabled
        />
        <Tab
          label={<span style={{ textTransform: "none" }}>Our Picks</span>}
          className={classes.tab}
          style={{ flexGrow: 1 }} // Make this tab grow to fill remaining space
        />
        <Tab
          label={
            <>
              <Box display="flex" alignItems="center">
                <span style={{ textTransform: "none" }}>Top Reviewed</span>
                <ArrowDropDownIcon className={classes.arrowIcon} />
              </Box>
            </>
          }
          className={classes.tab}
          style={{ flexGrow: 1 }} // Make this tab grow to fill remaining space
        />
        <Tab
          label={
            <span style={{ textTransform: "none" }}>Lowest Price First</span>
          }
          className={classes.tab}
          style={{ flexGrow: 1 }} // Make this tab grow to fill remaining space
        />
        <Tab
          label={
            <>
              <Box display="flex" alignItems="center">
                <span style={{ textTransform: "none" }}>Distance</span>
                <ArrowDropDownIcon className={classes.arrowIcon} />
              </Box>
            </>
          }
          className={classes.tab}
          style={{ flexGrow: 1 }}
        />
        <Tab
          label={<span style={{ textTransform: "none" }}>Hot Deals</span>}
          className={classes.tab}
          style={{ flexGrow: 1 }} // Make this tab grow to fill remaining space
        />
      </Tabs>
    </AppBar>
  );
};

export default ResultHeader;
