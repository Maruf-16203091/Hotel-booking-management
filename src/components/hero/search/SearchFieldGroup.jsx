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

const SearchFieldGroup = ({ selectedDate, setSelectedDate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Conditionally set the input value
    if (childCount === 0 && adultCount >= 1 && roomCount >= 1) {
      setInputValue(`${adultCount} adult, ${roomCount} room`);
    } else if (childCount === 0 && adultCount > 1 && roomCount > 1) {
      setInputValue(`${adultCount} adults, ${roomCount} rooms`);
    } else if (childCount === 1 && adultCount >= 1 && roomCount >= 1) {
      setInputValue(
        `${adultCount} adults, ${roomCount} rooms, ${childCount} child`
      );
    } else {
      setInputValue(
        `${adultCount} adults, ${roomCount} rooms, ${childCount} children`
      );
    }
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

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const modalArrowStyle = {
    position: "absolute",
    top: "50%",
    right: "-15px",
    transform: "translateY(-50%)",
    width: 0,
    height: 0,
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
    borderRight: "15px solid white", // Adjust the color and size as needed
    zIndex: "1",
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
          onClick: handleModalOpen,
          sx: { cursor: "pointer" },
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

      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            width: "290px",
            height: "200px",
            borderRadius: "12px",
            zIndex: "1",
            "&::before": {
              ...modalArrowStyle,
            },
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
    </Box>
  );
};

export default SearchFieldGroup;
