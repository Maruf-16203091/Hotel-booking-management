import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CloseIcon from "@mui/icons-material/Close";
import ScannerImage from "../../../assets/scanner.jpg";

const SaveMoreButton = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  const handleSeeMoreClick = () => {
    const buttonRect = document
      .getElementById("save-more-button")
      .getBoundingClientRect();
    setButtonPosition({ top: buttonRect.top, left: buttonRect.left });
    setCardOpen(true);
  };

  const handleCloseCard = () => {
    setCardOpen(false);
  };

  const handleCloseIconClick = () => {
    const closeIconRect = document
      .getElementById("close-icon")
      .getBoundingClientRect();
    setCardOpen(false);
    setButtonPosition({
      top: closeIconRect.top + 40,
      left: closeIconRect.left - 200,
    });
  };

  return (
    <>
      {!cardOpen ? (
        <Button
          id="save-more-button"
          variant="contained"
          style={{
            backgroundColor: "#3170E7",
            color: "white",
            borderRadius: "999px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            textTransform: "none",
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            transition:
              "background-color 0s ease 0s, outline-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s",
            padding: "10px 20px",
            fontSize: "16px",
          }}
          onClick={handleSeeMoreClick}
        >
          <PhoneAndroidIcon sx={{ marginRight: "6px" }} />
          Save more on App!
        </Button>
      ) : (
        <Button
          variant="contained"
          style={{
            display: "none",
          }}
        >
          See More
        </Button>
      )}
      {cardOpen && (
        <div
          style={{
            backgroundColor: "white",
            padding: "18px",
            borderRadius: "12px",
            width: "260px",
            textAlign: "center",
            position: "fixed",
            border: "1px solid #ddd",
            marginBottom: "18px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            top: buttonPosition.top - 400 + "px", // Adjusted for positioning
            left: buttonPosition.left - 110 + "px", // Adjusted for positioning
            zIndex: 9999,
          }}
        >
          <Button
            id="close-icon"
            variant="contained"
            style={{
              backgroundColor: "#3170E7",
              color: "white",
              borderRadius: "50%",
              position: "fixed",
              width: "44px",
              height: "44px",

              top: "860px",
              right: "42px",
              textTransform: "none",
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              transition:
                "background-color 0s ease 0s, outline-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s",
              padding: "px",
            }}
            onClick={handleCloseIconClick}
          >
            <CloseIcon />
          </Button>
          <Typography
            variant="h6"
            sx={{
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              fontWeight: "700",
              fontSize: "20px",
              marginBottom: "5px",
            }}
          >
            Save 10% on your 1st app booking!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              fontWeight: "500",
              fontSize: "14px",
              marginBottom: "25px",
            }}
          >
            Just scan the QR code for instant savings
          </Typography>
          <img
            src={ScannerImage}
            alt="ScannerImage"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-10px", 
              right: "18px", 
              width: "0",
              height: "0",
              borderTop: "10px solid white", 
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
            }}
          />
        </div>
      )}
    </>
  );
};

export default SaveMoreButton;
