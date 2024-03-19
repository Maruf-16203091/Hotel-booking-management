import React from "react";
import { Typography, Box } from "@mui/material";

const HeroPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003B95",
        color: "white",
        textAlign: "center",
        paddingTop: "100px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw", // Set width to 100% of the viewport width
        boxSizing: "border-box", // Include padding and border in the width
        padding: "0 20px", // Adjust padding as needed
      }}
    >
      <Box sx={{ maxWidth: "800px", width: "100%" }}>
        {/* Add a nested box for content to control its max width */}
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Where to next, Hosen?
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "40px" }}>
          Find exclusive Genius rewards in every corner of the world!
        </Typography>
        {/* Add more content or components as needed */}
      </Box>
    </Box>
  );
};

export default HeroPage;
