import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const AdvanceSearchPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
          marginLeft: "105px",
          padding: "32px 48px 48px",
          backgroundColor: "#F8F7F9",
          borderRadius: "20px",
          border: "1px solid #E0E0E0",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          width: "80%",
          height: "190px",
        }}
      ></Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "64px",
          paddingRight: "64px",
          marginTop: "-305px",
          marginLeft: "220px",
          backgroundColor: "#FFFFFF",
          borderRadius: "8px",
          boxShadow: "0px 1px 6px 2px rgba(0, 0, 0, 0.1)",
          width: "60%",
          height: "55px",
          zIndex: 998,
        }}
      ></Box>
      <Box
        sx={{
          width: "900px",
          backgroundColor: "#FFFFFF",
          marginLeft: "195px",
          marginRight: "30px",
          borderRadius: "6px",
          marginTop: "15px",
        }}
      >
        <TextField label="Where to go?" variant="outlined" fullWidth />
      </Box>
    </>
  );
};

export default AdvanceSearchPage;
