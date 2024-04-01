import React, { useState, useEffect } from "react";
import { Button, Icon, Modal, Typography } from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CloseIcon from "@mui/icons-material/Close";
import ScannerImage from "../../../assets/scanner.jpg";

const SaveMoreButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, right: 0 });
  const [modalWidth, setModalWidth] = useState(300);
  const [modalHeight, setModalHeight] = useState(500);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);

  const handleButtonClick = () => {
    setModalOpen(true);
    const buttonRect = document
      .getElementById("save-more-button")
      .getBoundingClientRect();
    setButtonPosition({
      top: buttonRect.top + buttonRect.height + window.scrollY,
      right: window.innerWidth - buttonRect.right + window.scrollX,
    });
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Set modal width and height here
  const modalStyle = {
    width: `${modalWidth}px`,
    height: `${modalHeight}px`,
  };

  return (
    <>
      {!modalOpen ? (
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
            display: "flex",
            alignItems: "center",
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            transition:
              "background-color 0s ease 0s, outline-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s",
            padding: "10px 20px",
            fontSize: "16px",
          }}
          onClick={handleButtonClick}
        >
          <Icon component={PhoneAndroidIcon} sx={{ marginRight: "6px" }} />
          Save more on App!
        </Button>
      ) : (
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3170E7",
            color: "white",
            borderRadius: "100%",
            position: "fixed",
            bottom: "60px",
            right: "60px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition:
              "background-color 0s ease 0s, outline-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s",
            padding: "12px",
            fontSize: "18px",
          }}
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </Button>
      )}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
          position: "absolute",
          top: buttonPosition.top - 460,
          left: buttonPosition.right + 1500,
          ...modalStyle,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            borderRadius: "16px",
            textAlign: "center",
            outline: "none",
          }}
        >
          <Typography
            variant="h6"
            id="modal-title"
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
            id="modal-description"
            sx={{
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              fontWeight: "500",
              fontSize: "14px",
              marginBottom: "5px",
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
        </div>
      </Modal>
    </>
  );
};

export default SaveMoreButton;
