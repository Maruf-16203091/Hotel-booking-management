import React from "react";
import { Typography } from "@mui/material";

const WelcomeMessage = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        position: "absolute",
        fontWeight: "bold",
        marginLeft: "90px",
        marginTop: "-150px",
        color: "white",
        fontSize: "1.5em",
      }}
    >
      EXPLORE MORE, SPEND LESS
    </Typography>
  );
};

export default WelcomeMessage;
