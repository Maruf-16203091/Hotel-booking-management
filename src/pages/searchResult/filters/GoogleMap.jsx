import React from "react";
import { Box, Typography } from "@mui/material";
import map from "../../../assets/map1.png";
const MapPage = () => {
  return (
    <Box
      sx={{
        marginTop: "-137px",
        marginBottom: "5px",
        marginLeft: "-5px",
      }}
    >
      <Box
        sx={{
          width: "150px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={map}
          alt="google map"
          style={{ width: "100%", height: "80%" }}
        />
      </Box>
    </Box>
  );
};

export default MapPage;
