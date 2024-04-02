import React from "react";
import { Box, Button } from "@mui/material";

const SearchButton = () => {
  return (
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
          width: "330px",
          height: "60px",
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
  );
};

export default SearchButton;
