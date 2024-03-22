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
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
    { name: "Euro", symbol: <EuroSymbolIcon /> },
    { name: "US Dollar", symbol: <AttachMoneyIcon /> },
    { name: "Indian Rupee", symbol: <AttachMoneyIcon /> },
    { name: "Bangladeshi Taka", symbol: <AttachMoneyIcon /> },
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
  const chunkedCurrencies = chunkArray(
    currencies,
    Math.ceil(currencies.length / 3)
  );

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
              Selected Currency
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
            <Typography
              variant="h8"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Euro
            </Typography>
          </div>
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
              Popular Currencies
            </Typography>
          </div>

          <div
            style={{
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Euro
            </Typography>
            <Typography
              variant="body2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              USD Dollar
            </Typography>
            <Typography
              variant="body2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Indian Rupee
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
              All Currencies
            </Typography>
          </div>
          {/* All Currencies */}
          <div
            style={{
              display: "flex",
              padding: "12px",
              flexDirection: "row",
              overflowY: "auto", // This property makes the content scrollable vertically
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
                      marginBottom: "18px",
                    }}
                  >
                    {currency.symbol}
                    <Typography
                      variant="body2"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {currency.name}
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

export default CurrencyModal;
