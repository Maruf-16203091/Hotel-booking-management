import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BundleBadge from "../../header/badges/BundleBadge";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import WorkIcon from "@mui/icons-material/Work";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

const AdvanceSearchPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handlePropertyChange = (event, newProperty) => {
    if (newProperty !== null) {
      setSelectedProperty(newProperty);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "270px",
          marginLeft: "150px",
          padding: "32px 48px 48px",
          backgroundColor: "#F8F7F9",
          borderRadius: "20px",
          border: "1px solid #E0E0E0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "75%",
          height: "190px",
        }}
      ></Box>

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
        <ToggleButtonGroup
          value={selectedProperty}
          exclusive
          onChange={handlePropertyChange}
          sx={{
            width: "100%",
          }}
        >
          <ToggleButton
            value="hotels"
            sx={{
              flexGrow: 1,
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              fontSize: "12px",
              fontWeight: "700",
              color: selectedProperty === "hotels" ? "blue" : "black",
              "&.Mui-selected": {
                borderColor: "transparent",
              },
              whiteSpace: "nowrap",
              textTransform: "none",
            }}
          >
            <HotelIcon sx={{ marginRight: "4px" }} /> Hotels & Homes
          </ToggleButton>
          <ToggleButton
            value="privateStays"
            sx={{
              flexGrow: 1,
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              fontSize: "12px",
              fontWeight: "700",
              color: selectedProperty === "privateStays" ? "blue" : "black",
              "&.Mui-selected": {
                borderColor: "transparent",
              },
              whiteSpace: "nowrap",
              textTransform: "none",
            }}
          >
            <HouseIcon sx={{ marginRight: "4px" }} /> Private stays
          </ToggleButton>
          <ToggleButton
            value="longStays"
            sx={{
              flexGrow: 1,
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              fontSize: "12px",
              fontWeight: "700",
              color: selectedProperty === "longStays" ? "blue" : "black",
              "&.Mui-selected": {
                borderColor: "transparent",
              },
              whiteSpace: "nowrap",
              textTransform: "none",
            }}
          >
            <WorkIcon sx={{ marginRight: "4px" }} /> Long stays
          </ToggleButton>
          <ToggleButton
            value="airportTransfer"
            sx={{
              flexGrow: 1,
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              fontSize: "12px",
              fontWeight: "700",
              color: selectedProperty === "airportTransfer" ? "blue" : "black",
              "&.Mui-selected": {
                borderColor: "transparent",
              },
              whiteSpace: "nowrap",
              textTransform: "none",
            }}
          >
            <AirportShuttleIcon sx={{ marginRight: "4px" }} /> Airport transfer
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box
        sx={{
          width: "900px",
          height: "65px",
          backgroundColor: "#FFFFFF",
          marginLeft: "195px",
          marginRight: "30px",
          borderRadius: "12px",
          marginTop: "15px",
          display: "flex",
          alignItems: "center", // Center vertically
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter a destination or property"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 48 }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "& input::placeholder": {
                fontSize: "16px",
                color: "black",
                fontWeight: "bold",
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              },
            },
          }}
        />
      </Box>
      <BundleBadge />
      <Box
        sx={{
          width: "900px",
          height: "65px",
          backgroundColor: "#F8F7F9",
          marginLeft: "195px",
          marginRight: "30px",
          borderRadius: "12px",
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          fullWidth
          placeholder="Field 1"
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "& input::placeholder": {
                fontSize: "16px",
                color: "black",
                fontWeight: "bold",
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              },
            },
          }}
        />

        <TextField
          fullWidth
          placeholder="Field 2"
          sx={{
            marginLeft: "45px",
            borderRadius: "12px",
            backgroundColor: "white",
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
              "& input::placeholder": {
                fontSize: "16px",
                color: "black",
                fontWeight: "bold",
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "55px",
          marginLeft: "90px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "350px",
            height: "66px",
            position: "relative",
            border: "none",
            userSelect: "none",
            padding: "12px",
            borderRadius: "10px",
            backgroundColor: "#5392f9",
            color: "#FFFFFF",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 1px",
            transition: "all 0.15s ease-in-out 0s",
            fontSize: "25px",
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          }}
        >
          SEARCH
        </Button>
      </Box>
    </>
  );
};

export default AdvanceSearchPage;
