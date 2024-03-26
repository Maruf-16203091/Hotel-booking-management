import React from "react";
import { Typography } from "@mui/material";

const WelcomeMessage = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        marginBottom: "55px",
        marginLeft: "90px",
        color: "white",
        fontSize: "1.5em",
      }}
    >
      EXPLORE MORE, SPEND LESS
    </Typography>
  );
};

export default WelcomeMessage;
