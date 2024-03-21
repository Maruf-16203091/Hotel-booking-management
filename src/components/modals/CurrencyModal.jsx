import React, { useState } from "react";
import { Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol"; // Import the Euro currency symbol
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Import the currency symbol for other currencies

function CurrencyModal() {
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  const currencies = [
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    // Add more currencies with their respective symbols
    // Example: { name: "Currency Name", symbol: <CurrencySymbolComponent /> },
  ];

  // Function to chunk the currencies array into arrays of 10 elements
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the currencies array into arrays of 10 elements
  const chunkedCurrencies = chunkArray(currencies, 10);

  return (
    <>
      <EuroSymbolIcon
        onClick={() => setOpenModal(true)}
        fontSize="small"
        style={{
          cursor: "pointer",
          marginTop: "20px",
          paddingRight: "35px", // Adjust padding as needed
          fontWeight: "normal", // Set font weight to normal
        }}
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
            height: "500px", // Fixed height for the modal
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
              position: "fixed",
              top: "150px",
              right: "550px",
              backgroundColor: "transparent",
              color: "white",
              zIndex: 999, // Ensure the button is above the modal content
            }}
          >
            <CloseIcon style={{ fontSize: 50 }} />
          </IconButton>
          {/* Selected Currency */}
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
              Selected Currency
            </Typography>

            <Typography variant="body1">Euro</Typography>
          </div>
          {/* All Currencies */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflowY: "auto",
              maxHeight: "calc(100% - 70px)", // Adjust max height based on your need
            }}
          >
            {chunkedCurrencies.map((column, index) => (
              <div
                key={index}
                style={{
                  flex: 1,
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {column.map((currency, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    {currency.symbol}
                    <Typography variant="body1">{currency.name}</Typography>
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

export default CurrencyModal;
