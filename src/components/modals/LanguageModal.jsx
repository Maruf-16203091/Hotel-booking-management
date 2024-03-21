import React, { useState } from "react";
import { Button, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GermanyFlagIcon from "../../assets/germany.png"; // Import the Germany flag image
import FranceFlagIcon from "../../assets/france.png"; // Import the France flag image
import SpainFlagIcon from "../../assets/spain.png"; // Import the Spain flag image
import ItalyFlagIcon from "../../assets/italy.png"; // Import the Italy flag image
// Import more flag images as needed

function Component() {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const languages = [
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    // Add more languages with their respective flag icons
  ];

  // Function to chunk the languages array into arrays of 3 elements
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the languages array into arrays of 3 elements
  const chunkedLanguages = chunkArray(languages, 3);

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
        }}
        onClick={() => setOpenModal(true)}
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
            width: "60%",
            maxHeight: "70%",
            backgroundColor: "#FFF",
            padding: "12px",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "transparent",
              zIndex: 1, // Ensure the button is above the modal content
            }}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          {/* Selected Language */}
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.05)",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Selected Language
            </Typography>
            <img
              src={GermanyFlagIcon}
              alt="Germany Flag"
              style={{ height: "24px", width: "24px", marginRight: "10px" }}
            />
            <Typography variant="body1">German</Typography>
          </div>
          {/* All Languages */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              overflowY: "auto",
              maxHeight: "calc(100% - 100px)", // Adjust max height based on your need
            }}
          >
            {chunkedLanguages.map((chunk, index) => (
              <div key={index} style={{ flex: 1, marginRight: "10px" }}>
                {chunk.map((language, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <img
                      src={language.flag}
                      alt={`${language.name} Flag`}
                      style={{
                        height: "24px",
                        width: "24px",
                        marginRight: "10px",
                      }}
                    />
                    <Typography variant="body1">{language.name}</Typography>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Component;
