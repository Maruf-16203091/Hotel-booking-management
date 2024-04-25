import React, { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const RatingFilter = ({ options = [], onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newSelectedOptions);
    onChange(newSelectedOptions);
  };

  return (
    <div>
      <FormGroup>
        <legend
          style={{
            marginTop: "-3px",
            marginLeft: "-3px",
            marginBottom: "10px",
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            color: "#5A5B5B",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Star rating
        </legend>
        {options.map((option, index) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
                sx={{ "& .MuiSvgIcon-root": { fontSize: "16px" } }} // Adjust checkbox size
              />
            }
            label={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  fontWeight: "400",
                  fontSize: "11px",
                  padding: "6px",
                  cursor: "pointer",
                  borderRadius: "4px",
                  transition: "color 0.3s ease", // Add transition for color change
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#5392F9"; // Change text color to bluish on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "initial"; // Reset text color on mouse leave
                }}
              >
                {[...Array(5 - index)].map((_, i) => (
                  <StarIcon
                    key={i}
                    style={{ color: "#FF567D", fontSize: "14px" }}
                  /> // Adjust the fontSize here
                ))}
                {option}
              </span>
            }
          />
        ))}
      </FormGroup>
      <Divider
        style={{
          width: "215px",
          marginBottom: "15px",
          marginTop: "15px",
          marginLeft: "-5px",
          borderBottom: "2px solid #cacbcc",
        }}
      />
    </div>
  );
};

// Dummy data for testing purposes
const dummyData = [" (128)", " (542)", " (55)", " (85)", " (8)"];

export default () => <RatingFilter options={dummyData} />;
