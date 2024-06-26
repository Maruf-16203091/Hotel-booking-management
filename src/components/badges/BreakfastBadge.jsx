import React from "react";
import { Typography, Box } from "@mui/material";

const BreakfastBadge = () => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          position: "absolute",
          top: "-765px",
          right: "50%",
          left: "-50px",
          marginTop: "800px",
          transform: "translate(50%, -50%)",
          padding: "5px",
          paddingTop: "5px",
          backgroundColor: "#28871C",
          color: "#ffffff",
          borderRadius: "4px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          fontSize: "10px",
          fontWeight: "700",
          width: "100px",
          height: "15px",
        }}
      >
        Breakfast Included
      </Typography>
    </Box>
  );
};

export default BreakfastBadge;
