import React from "react";
import { Typography, Box } from "@mui/material";
import AdvanceSearch from "../hero/search/Search";

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
      <Box sx={{ maxWidth: "1200px", width: "100%" }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: "45px",marginLeft: "60px", color:"#0b2b61",fontSize: "1.5em", }}
        >
          EXPLORE MORE, SPEND LESS
        </Typography>
        <AdvanceSearch />
      </Box>
    </Box>
  );
};

export default HeroPage;
