import React from "react";
import { Typography } from "@mui/material";

const WelcomeMessage = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        position: "fixed",
        fontWeight: "bold",
        marginLeft: "130px",
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
