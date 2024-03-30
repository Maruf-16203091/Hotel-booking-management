import React from "react";
import { Typography } from "@mui/material";

const Description = ({ text }) => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" component="p">
        {text}
      </Typography>
    </div>
  );
};

export default Description;
