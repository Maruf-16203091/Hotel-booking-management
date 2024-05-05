import React from "react";
import { Box, Typography } from "@mui/material";
import map from "../../../assets/map.png";
const MapPage = () => {
  return (
    <Box
      sx={{
        marginTop: "-145px",
        marginBottom: "5px",
        marginLeft: "-5px",
      }}
    >
      <Box
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
              src={map}
              alt="Promotion Slide 1"
              style={{ width: "100%", height: "80%" }}
            />
      </Box>
    </Box>
  );
};

export default MapPage;
