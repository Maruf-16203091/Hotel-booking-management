import React from "react";
import { Divider, Typography } from "@mui/material";

const CustomDivider = () => {
  return (
    <Divider
      style={{
        width: "908px",
        marginTop: "80px",
        marginLeft: "622px",
        marginBottom: "-95px",
      }}
    >
      <Typography variant="body2" color="text.secondary" sx={{ p: 2 }}>
        Commission earned affects the order of your results.{" "}
        <Typography component="a" href="#" color="primary" underline="always">
          Learn more about ranking
        </Typography>
        .
      </Typography>
    </Divider>
  );
};

export default CustomDivider;
