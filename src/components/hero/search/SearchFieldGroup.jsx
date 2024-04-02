import React from "react";
import { Box, TextField, Divider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LoginIcon from "@mui/icons-material/Login";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const SearchFieldGroup = ({ selectedDate, setSelectedDate }) => {
  return (
    <Box
      sx={{
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
        placeholder="Field 2"
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
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchFieldGroup;
