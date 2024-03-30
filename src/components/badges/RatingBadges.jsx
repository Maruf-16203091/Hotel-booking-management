import React from "react";
import { Typography, Box } from "@mui/material";

const RatingBadge = ({ rating }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "10px",
        right: "10px",
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
  );
};

export default RatingBadge;
