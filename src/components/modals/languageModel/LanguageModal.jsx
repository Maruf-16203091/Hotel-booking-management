import React, { useState } from "react";
import { Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GermanyFlagIcon from "../../../assets/language/germany.png";
import FranceFlagIcon from "../../../assets/language/france.png";
import SpainFlagIcon from "../../../assets/language/spain.png";
import ItalyFlagIcon from "../../../assets/language/italy.png";
import "./LanguageModal.css";

function LanguageModal() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleLanguageClick = (index) => {
    setSelectedLanguageIndex(index);
    setOpenModal(false); // Close modal after selecting a language (you may want to remove this line if you want to keep the modal open after selection)
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
    // Add more languages with their respective flag icons
    // Add as many languages as needed
  ];

  // Function to chunk the languages array into arrays of 3 elements
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
          padding: "8px 12px",
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
            height: "620px", // Fixed height for the modal
            border: "1px solid #a7c5fa",
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
              top: "95px",
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
              Selected language
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
              style={{ height: "20px", width: "20px", marginRight: "10px" }}
            />
            <Typography
              variant="body2"
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
              variant="body2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              All languages
            </Typography>
          </div>
          {/* All Languages */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              flexDirection: "row",
              overflowY: "auto",
              maxHeight: "calc(100% - 70px)",
              scrollbarWidth: "thin",
              scrollbarHeight: "thin",
            }}
          >
            {chunkedLanguages.map((column, colIndex) => (
              <div
                key={colIndex}
                style={{
                  flex: 1,
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {column.map((language, langIndex) => (
                  <div
                    key={langIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",

                      borderRadius: "4px", // Add border radius
                      padding: "20px", // Add padding
                      cursor: "pointer", // Change cursor to pointer
                      transition: "border-color 0.3s ease", // Add transition for smooth effect
                      backgroundColor:
                        hoveredIndex === colIndex * 3 + langIndex
                          ? "#e3edff"
                          : "transparent", // Apply background color based on hovered index
                    }}
                    onMouseEnter={() =>
                      setHoveredIndex(colIndex * 3 + langIndex)
                    }
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() =>
                      handleLanguageClick(colIndex * 3 + langIndex)
                    } // Add onClick handler to select language
                  >
                    <img
                      src={language.flag}
                      alt={`${language.name} Flag`}
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "15px",
                      }}
                    />
                    <Typography
                      variant="body2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "10px",
                      }}
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

export default LanguageModal;
