import React, { useState } from "react";
import { Button, Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GermanyFlagIcon from "../../assets/germany.png"; // Import the Germany flag image
import FranceFlagIcon from "../../assets/france.png"; // Import the France flag image
import SpainFlagIcon from "../../assets/spain.png"; // Import the Spain flag image
import ItalyFlagIcon from "../../assets/italy.png"; // Import the Italy flag image

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
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    { name: "German", flag: GermanyFlagIcon },
    { name: "French", flag: FranceFlagIcon },
    { name: "Spanish", flag: SpainFlagIcon },
    { name: "Italian", flag: ItalyFlagIcon },
    // Add more languages with their respective flag icons
    // Add as many languages as needed
  ];

  // Function to chunk the languages array into arrays of 10 elements
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the languages array into arrays of 10 elements
  const chunkedLanguages = chunkArray(
    languages,
    Math.ceil(languages.length / 3)
  );

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
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div
          style={{
            width: "820px",
            height: "520px", // Fixed height for the modal
            backgroundColor: "#FFF",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Close button */}
          <IconButton
            onClick={handleClose}
            style={{
              position: "fixed",
              top: "150px",
              right: "530px",
              backgroundColor: "transparent",
              color: "white",
              zIndex: 999, // Ensure the button is above the modal content
            }}
          >
            <CloseIcon style={{ fontSize: 50 }} />
          </IconButton>
          {/* Selected Language */}
          <div
            style={{
              backgroundColor: "#e9ebee",
              padding: "12px",
              marginBottom: "0", // Remove bottom margin
            }}
          >
            <Typography
              variant="h8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Selected Language
            </Typography>
          </div>

          <div
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              border: "2px solid #e3edff",
              backgroundColor: "#e3edff",
              borderRadius: "4px",
              margin: "10px",
              boxSizing: "border-box",
            }}
          >
            <img
              src={GermanyFlagIcon}
              alt="Germany Flag"
              style={{ height: "24px", width: "24px", marginRight: "10px" }}
            />
            <Typography
              variant="h8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              German
            </Typography>
          </div>
          <div
            style={{
              backgroundColor: "#e9ebee",
              padding: "12px",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              All Languages
            </Typography>
          </div>
          {/* All Languages */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              flexDirection: "row",
              overflowY: "auto",
              maxHeight: "calc(100% - 70px)", // Adjust max height based on your need
            }}
          >
            {chunkedLanguages.map((column, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {column.map((language, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "18px",
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
                    <Typography
                      variant="body2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {language.name}
                    </Typography>
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
