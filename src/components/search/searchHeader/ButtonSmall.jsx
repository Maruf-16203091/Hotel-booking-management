import React from "react";
import { Box, Button } from "@mui/material";

const ButtonSmall = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "0px",
        marginLeft: "0px",
      }}
    >
      <Button
        variant="contained"
        sx={{
          width: "150px",
          height: "47px",
          position: "relative",
          border: "none",
          userSelect: "none",
          padding: "5px",
          borderRadius: "5px",
          backgroundColor: "#5392f9",
          color: "#FFFFFF",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 1px",
          transition: "all 0.15s ease-in-out 0s",
          fontSize: "18px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
        }}
      >
        SEARCH
      </Button>
    </Box>
  );
};

export default ButtonSmall;
