import React from "react";
import { Divider, Typography } from "@mui/material";

const CustomDivider = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "100px",
        textAlign: "center",
        marginLeft: "475px",
        marginBottom: "-80px",
      }}
    >
      <Divider
        style={{
          width: "15%",
          display: "inline-block",
          verticalAlign: "middle",
          borderBottom: "2px solid #cacbcc",
        }}
      />
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ display: "inline-block", padding: "0 10px" }}
      >
        Commission earned affects the order of your results.{" "}
        <Typography component="a" href="#" color="primary" underline="always">
          Learn more about ranking
        </Typography>
        .
      </Typography>
      <Divider
        style={{
          width: "15%",
          display: "inline-block",
          verticalAlign: "middle",
          borderBottom: "2px solid #cacbcc", // Adjust thickness here
        }}
      />
    </div>
  );
};

export default CustomDivider;
