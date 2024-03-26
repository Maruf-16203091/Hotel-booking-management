import React from "react";
import { Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const AdvanceSearchPage = () => {
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
          marginLeft: "350px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0px 1px 6px 2px rgba(0, 0, 0, 0.1)",
          width: "40%",
          height: "45px",
          zIndex: 998,
        }}
      ></Box>
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
            width: "490px",
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
