import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Tabs,
  Tab,
  Stack,
  Divider,
} from "@mui/material";

import BundleBadge from "../../header/badges/BundleBadge";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import WorkIcon from "@mui/icons-material/Work";
import NewBadge from "../../header/badges/NewBadge";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import SearchEntryPage from "./SearchEntry";
import SearchFieldGroup from "./SearchFieldGroup";
import SearchButton from "./SearchButton ";
import "./Search.css";

const AdvanceSearchPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(0);

  const handlePropertyChange = (event, newValue) => {
    setSelectedProperty(newValue);
  };

  return (
    <>
      <Box className="customBox"></Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          paddingLeft: "64px",
          paddingRight: "64px",
          marginTop: "-300px",
          marginLeft: "330px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0px 1px 6px 2px rgba(0, 0, 0, 0.1)",
          width: "45%",
          height: "45px",
          zIndex: 998,
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "120px",
            top: "25%",
            transform: "translateY(-50%)",
          }}
        >
          <NewBadge />
        </div>
        <Tabs
          value={selectedProperty}
          onChange={handlePropertyChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
          aria-label="Property tabs"
          sx={{
            "& .Mui-selected:focus": {
              outline: "none",
            },
            "& .MuiTabs-indicator": {
              height: 4,
            },
          }}
        >
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <HotelIcon />
                <span>Hotels & Homes</span>
              </Stack>
            }
            sx={{
              fontSize: "12px",
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              whiteSpace: "nowrap",
              textTransform: "none",
              fontWeight: "bold",
              color: "#4b535e",
            }}
          />
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <HouseIcon />
                <span>Private stays</span>
              </Stack>
            }
            sx={{
              fontSize: "12px",
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              whiteSpace: "nowrap",
              textTransform: "none",
              fontWeight: "bold",
              color: "#4b535e",
            }}
          />
          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <WorkIcon />
                <span>Long stays</span>
              </Stack>
            }
            sx={{
              fontSize: "12px",
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              whiteSpace: "nowrap",
              textTransform: "none",
              fontWeight: "bold",
              color: "#4b535e",
            }}
          />

          <Tab
            label={
              <Stack direction="row" spacing={1} alignItems="center">
                <AirportShuttleIcon />
                <span>Airport transfer</span>
              </Stack>
            }
            sx={{
              fontSize: "12px",
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              whiteSpace: "nowrap",
              textTransform: "none",
              fontWeight: "bold",
              color: "#4b535e",
            }}
          />
        </Tabs>
      </Box>
      <SearchEntryPage />
      <BundleBadge />
      <SearchFieldGroup />
      <SearchButton />
    </>
  );
};

export default AdvanceSearchPage;
