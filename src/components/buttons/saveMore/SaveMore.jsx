import React from "react";
import { Button, Icon } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
const SaveMoreButton = () => {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#3170E7",
        color: "white",
        borderRadius: "999px",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        textTransform: "none", // Prevent text from being capitalized
        display: "flex",
        alignItems: "center",
        fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
        transition:
          "background-color 0s ease 0s, outline-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s",
        padding: "12px 24px",
        fontSize: "18px",
      }}
    >
      <Icon
        component={PhoneAndroidIcon} // Use PhoneIcon component from MUI
        sx={{ marginRight: "6px" }} // Adjust spacing between icon and text
      />
      Save more on App!
    </Button>
  );
};

export default SaveMoreButton;
