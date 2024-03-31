import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Rating = ({ rating }) => {
  // Convert the rating number to an array of stars
  const stars = Array.from({ length: rating }, (_, index) => (
    <StarIcon key={index} style={{ color: "#FF567D" }} />
  ));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "-5px",
        marginTop: "5px",
        marginBottom: "5px",
      }}
    >
      {stars}
    </div>
  );
};

export default Rating;
