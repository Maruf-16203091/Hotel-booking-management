import React from "react";
import { Typography, Box } from "@mui/material";

const HeroPage = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('src/assets/hero_img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        paddingTop: "100px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        boxSizing: "border-box",
        padding: "0 20px",
      }}
    >
      <Box sx={{ maxWidth: "800px", width: "100%" }}>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Where to next, Hosen?
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroPage;
