import React, { useState } from "react";
import { Button, Modal, Typography } from "@mui/material";
import GermanyFlagIcon from "../../assets/germany.png"; // Import the Germany flag image

function Component() {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <img
        src={GermanyFlagIcon}
        alt="Germany Flag"
        style={{
          height: "40px",
          width: "40px",
          cursor: "pointer",
          marginTop: "10px",
        }} // Adjust width and cursor style as needed
        onClick={() => setOpenModal(true)} // Open the modal on click
      />
      <Modal
        open={openModal}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "10px",
            width: "40%",
            height: "250px",
            backgroundColor: "#e9ebee",
            padding: "12px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Terms of Service
          </Typography>
          <div style={{ marginBottom: 0 }}>
            <Typography variant="body1" color="textSecondary">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </Typography>
            <Typography variant="body1" color="textSecondary">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </Typography>
          </div>
          <div>
            <Button variant="contained" onClick={handleClose}>
              I accept
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Decline
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Component;
