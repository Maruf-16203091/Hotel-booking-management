import React, { useState } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BundleBadge from "../../header/badges/BundleBadge";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import WorkIcon from "@mui/icons-material/Work";
import NewBadge from "../../header/badges/NewBadge";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AdvanceSearchPage = () => {
  const [selectedProperty, setSelectedProperty] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State to manage calendar modal visibility

  const handlePropertyChange = (event, newValue) => {
    setSelectedProperty(newValue);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false); // Close the calendar modal after date selection
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
        <Box
          sx={{
            width: "900px",
            height: "58px",
            borderRadius: "12px",
            backgroundColor: "white",
            borderRadius: "12px",
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },

            display: "flex",
            gap: "10px",
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label=""
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
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
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label=""
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
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
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </Box>

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
