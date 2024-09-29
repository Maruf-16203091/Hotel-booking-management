import React from "react";
import { Typography, Box } from "@mui/material";

const BundleBadge = () => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          position: "absolute",
          top: "-380px",
          right: "50%",
          left: "385px",
          marginTop: "801px",
          transform: "translate(50%, -50%)",
          padding: "5px",
          paddingTop: "5px",
          backgroundColor: "#E02D2D",
          color: "#ffffff",
          borderRadius: "4px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          fontSize: "10px",
          fontWeight: "700",
          width: "80px",
          height: "15px",
        }}
      >
        Bundle & Save
      </Typography>
    </Box>
  );
};

export default BundleBadge;
