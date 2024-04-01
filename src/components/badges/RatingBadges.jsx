import React from "react";
import { Typography, Box } from "@mui/material";

const RatingBadge = ({ rating }) => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: "10px",
          right: "22px",
          backgroundColor: "#5392F9",
          borderStyle: "solid",
          borderWidth: "0px 10px 0 4px",
          borderColor: "#5392F9 transparent transparent transparent",
          color: "white",
          padding: "5px",
          borderRadius: "5px ",
        }}
      >
        {rating}
      </Box>
      <span
        style={{
          position: "absolute",
          bottom: "231px",
          right: "-5px",
          width: "0",
          height: "0",
          borderBottom: "25px solid transparent",
          borderTop: "0px solid transparent",
          borderLeft: "16px solid #5392F9",
          
          borderRight: "16px solid transparent",
        }}
      />
    </>
  );
};

export default RatingBadge;
