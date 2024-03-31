import React from "react";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "../others/Rating";

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
        <LocationOnIcon style={{ marginRight: "2px", marginLeft: "-7px" }} />
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

      <Rating rating={4} />

      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        sx={{
          fontSize: "12px",
          marginBottom: "5px",
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
