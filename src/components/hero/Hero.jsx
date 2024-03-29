import React from "react";
import {  Box } from "@mui/material";
import AdvanceSearch from "../hero/search/Search";
import WelcomeMessage from "./welcomeMessage/WelcomeMessage";

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
      <WelcomeMessage />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1200px",
          width: "100vw",
        }}
      >
        <AdvanceSearch />
      </Box>
    </Box>
  );
};

export default HeroPage;
