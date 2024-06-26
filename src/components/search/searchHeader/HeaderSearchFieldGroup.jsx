import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Card,
  CardContent,
  Divider,
  InputAdornment,
  Button,
  Modal,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LoginIcon from "@mui/icons-material/Login";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import GroupIcon from "@mui/icons-material/Group";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { KeyboardArrowDown } from "@mui/icons-material";

const SearchFieldGroup = ({ selectedDate, setSelectedDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (childCount <= 0) {
      if (adultCount <= 1) {
        if (roomCount <= 1) {
          setInputValue(`${adultCount} adult, ${roomCount} room`);
        } else {
          setInputValue(`${adultCount} adult, ${roomCount} rooms`);
        }
      } else {
        if (roomCount <= 1) {
          setInputValue(`${adultCount} adults, ${roomCount} room`);
        } else {
          setInputValue(`${adultCount} adults, ${roomCount} rooms`);
        }
      }
    } else if (childCount === 1) {
      if (adultCount <= 1) {
        if (roomCount <= 1) {
          setInputValue(
            `${adultCount} adult, ${roomCount} room, ${childCount} child`
          );
        } else {
          setInputValue(
            `${adultCount} adult, ${roomCount} rooms, ${childCount} child`
          );
        }
      } else {
        if (roomCount <= 1) {
          setInputValue(
            `${adultCount} adults, ${roomCount} room, ${childCount} child`
          );
        } else {
          setInputValue(
            `${adultCount} adults, ${roomCount} rooms, ${childCount} child`
          );
        }
      }
    } else {
      if (adultCount <= 1) {
        if (roomCount <= 1) {
          setInputValue(
            `${adultCount} adult, ${roomCount} room, ${childCount} children`
          );
        } else {
          setInputValue(
            `${adultCount} adult, ${roomCount} rooms, ${childCount} children`
          );
        }
      } else {
        if (roomCount <= 1) {
          setInputValue(
            `${adultCount} adults, ${roomCount} room, ${childCount} children`
          );
        } else {
          setInputValue(
            `${adultCount} adults, ${roomCount} rooms, ${childCount} children`
          );
        }
      }
    }

    // Conditionally set the input value
  }, [adultCount, roomCount, childCount]);

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
    if (type === "room") {
      if (roomCount > 1) {
        setRoomCount(roomCount - 1);
      } else {
        setRoomCount(1);
      }
    } else if (type === "adult") {
      if (adultCount > 1) {
        setAdultCount(adultCount - 1);
      } else {
        setAdultCount(1);
      }
    } else if (type === "child") {
      if (childCount > 0) {
        setChildCount(childCount - 1);
      } else {
        setChildCount(0);
      }
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          width: "438px",
          height: "45px",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          marginRight: "7px",
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
              sx: { cursor: "pointer" },
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
              sx: { cursor: "pointer" },
            }}
            components={{
              TextField: TextField,
            }}
          />
        </LocalizationProvider>
      </Box>

      <TextField
        fullWidth
        placeholder="1 adult"
        value={inputValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <GroupIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <KeyboardArrowDown />
            </InputAdornment>
          ),
          onClick: handleModalOpen,
          sx: { cursor: "pointer" },
        }}
        sx={{
          marginLeft: "0px",
          marginRight: "7px",
          borderRadius: "5px",
          height: "45px",
          width: "290px",
          backgroundColor: "white",
          border: "1px solid #d7d7db",
          "& .MuiInputLabel-root": {
            display: "none",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
            "& input.MuiInputBase-input::placeholder": {
              fontSize: "22px",
              color: "black",
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            },
          },
        }}
      />

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card
          sx={{
            position: "absolute",
            top: "18%",
            left: "67%",
            transform: "translate(-50%, -50%)",
            width: "290px",
            height: "200px",
            borderRadius: "5px",
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
                Rooms
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
                Adults
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
                Child
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
                    border: "px solid #edf0f9",
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
      </Modal>
    </>
  );
};

export default SearchFieldGroup;
