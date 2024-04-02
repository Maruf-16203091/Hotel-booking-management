import React, { useState } from "react";
import {
  Box,
  TextField,
  Divider,
  InputAdornment,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LoginIcon from "@mui/icons-material/Login";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SearchFieldGroup = ({ selectedDate, setSelectedDate }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const handleIncrease = (type) => {
    switch (type) {
      case "room":
        setRoomCount(roomCount + 1);
        break;
      case "adult":
        setAdultCount(adultCount + 1);
        break;
      case "child":
        setChildCount(childCount + 1);
        break;
      default:
        break;
    }
  };

  const handleDecrease = (type) => {
    switch (type) {
      case "room":
        setRoomCount(roomCount > 1 ? roomCount - 1 : 1);
        break;
      case "adult":
        setAdultCount(adultCount > 0 ? adultCount - 1 : 0);
        break;
      case "child":
        setChildCount(childCount > 0 ? childCount - 1 : 0);
        break;
      default:
        break;
    }
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "1100px",
        height: "65px",
        backgroundColor: "#F8F7F9",
        marginLeft: "70px",
        marginRight: "30px",
        borderRadius: "12px",
        marginTop: "15px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "1100px",
          height: "65px",
          borderRadius: "12px",
          backgroundColor: "white",
          border: "1px solid #d7d7db",
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
            InputProps={{
              startAdornment: <LoginIcon />,
            }}
            components={{
              TextField: TextField,
            }}
          />
        </LocalizationProvider>
        <Divider orientation="vertical" flexItem />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label=""
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            InputProps={{
              startAdornment: <LoginIcon />,
            }}
            components={{
              TextField: TextField,
            }}
          />
        </LocalizationProvider>
      </Box>

      <TextField
        fullWidth
        placeholder="1 adult\n1 room"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GroupIcon />
            </InputAdornment>
          ),
          onClick: () => setIsCardOpen(true),
        }}
        sx={{
          marginLeft: "45px",
          borderRadius: "12px",
          height: "65px",
          backgroundColor: "white",
          border: "1px solid #d7d7db",
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
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              whiteSpace: "pre-line",
            },
          },
        }}
      />
      {isCardOpen && (
        <Card
          sx={{
            position: "absolute",
            top: 80,
            left: 578,
            width: "290px",
            height: "190px",
            borderRadius: "12px",
            zIndex: "1",
          }}
        >
          <CardContent>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  margin: "15px",
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Room
              </Typography>
              <Box display="flex" alignItems="center">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    minWidth: "32px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "transparent",
                    border: "1px solid #edf0f9",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleDecrease("room")}
                >
                  <RemoveIcon />
                </Button>
                <Typography
                  sx={{
                    margin: "0  10px",
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {roomCount}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    minWidth: "32px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "transparent",
                    border: "1px solid #edf0f9",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleIncrease("room")}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  margin: "15px",
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Adult
              </Typography>
              <Box display="flex" alignItems="center">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    minWidth: "32px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "transparent",
                    border: "1px solid #edf0f9",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleDecrease("adult")}
                >
                  <RemoveIcon />
                </Button>
                <Typography
                  sx={{
                    margin: "0 10px",
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {adultCount}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    minWidth: "32px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "transparent",
                    border: "1px solid #edf0f9",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleIncrease("adult")}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography
                sx={{
                  margin: "15px",
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Children
              </Typography>
              <Box display="flex" alignItems="center">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    minWidth: "32px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "transparent",
                    border: "1px solid #edf0f9",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleDecrease("child")}
                >
                  <RemoveIcon />
                </Button>
                <Typography
                  sx={{
                    margin: "0 10px",
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    fontSize: "16px",
                    fontWeight: "600",
                  }}
                >
                  {childCount}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "50%",
                    minWidth: "32px",
                    width: "32px",
                    height: "32px",
                    backgroundColor: "transparent",
                    border: "1px solid #edf0f9",
                    color: "#000",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleIncrease("child")}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default SearchFieldGroup;
