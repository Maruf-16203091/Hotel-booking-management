import React from "react";
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Description = ({ amount, location, price, currency, rating }) => {
  return (
    <div style={{ display: "flex", position: "absolute" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LocationOnIcon style={{ marginRight: "5px" }} />
        <Typography variant="body2" color="textSecondary" component="p">
        {location}
        </Typography>
      </div>
      <Typography variant="body2" color="textSecondary" component="p">
        {rating}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {price} {currency} {amount}
      </Typography>
    </div>
  );
};

export default Description;
