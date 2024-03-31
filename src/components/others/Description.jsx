import React from "react";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Description = ({ text, amount, location, price, currency, rating }) => {
  return (
    <div
      style={{
        position: "absolute",
        fontSize: "12px",
        fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
      }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        sx={{
          fontSize: "12px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          fontWeight: "700",
          marginBottom: "5px",
        }}
      >
        {text}
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
        }}
      >
        <LocationOnIcon style={{ marginRight: "2px", marginLeft: "-9px" }} />
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{
            fontSize: "12px",
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            color: "#8BC0FB",
          }}
        >
          {location}
        </Typography>
      </div>
      <Typography
        variant="body2"
        color="#FF567D"
        component="p"
        sx={{
          fontSize: "30px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          marginBottom: "-15px",
        }}
      >
        {rating}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        sx={{
          fontSize: "12px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
        }}
      >
        {price}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        sx={{
          fontSize: "12px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          color: "#E12D8C",
          fontWeight: "700",
        }}
      >
        {currency} {amount}
      </Typography>
    </div>
  );
};

export default Description;
