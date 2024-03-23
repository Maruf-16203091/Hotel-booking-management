import React, { useState } from "react";
import { Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EuroSymbolIcon from "@mui/icons-material/EuroSymbol"; // Import the Euro currency symbol
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Import the currency symbol for other currencies

function CurrencyModal() {
  const [openModal, setOpenModal] = useState(false);
  const [SelectedCurrencyIndex, setSelectedCurrencyIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [PopularHoveredIndex, setPopularHoveredIndex] = useState(null);
  const [selectedPopularIndex, setSelectedPopularIndex] = useState(null);

  const handleClose = () => {
    setOpenModal(false);
  };
  const handlePopularClick = (index) => {
    setSelectedPopularIndex(index);
    setOpenModal(false);
  };
  const handleCurrencyClick = (index) => {
    setSelectedCurrencyIndex(index);
    setOpenModal(false); // Close modal after selecting a language (you may want to remove this line if you want to keep the modal open after selection)
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

  const popularCurrencies = [{ name: "USD" }, { name: "EUR" }, { name: "GBP" }];

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
  const chunkedPopularCurrencies = chunkArray(
    popularCurrencies,
    Math.ceil(popularCurrencies.length / 3)
  );

  return (
    <>
      <EuroSymbolIcon
        onClick={() => setOpenModal(true)}
        fontSize="small"
        style={{
          cursor: "pointer",
          padding: "16px 32px", // Adjust padding as needed
          height: "20px",
          width: "20px",
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
            height: "685px", // Fixed height for the modal
            backgroundColor: "#FFF",
            border: "1px solid #a7c5fa",
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
              top: "65px",
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
              variant="body2"
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
              display: "flex",
              padding: "12px",
              flexDirection: "row",
              overflowY: "auto",
              maxHeight: "calc(100% - 70px)",
            }}
          >
            {chunkedPopularCurrencies.map((column, colIndex) => (
              <div
                key={colIndex}
                style={{
                  flex: 1,
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {column.map((popular, popularIndex) => (
                  <div
                    key={popularIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",

                      borderRadius: "4px", // Add border radius
                      padding: "8px", // Add padding
                      cursor: "pointer", // Change cursor to pointer
                      transition: "border-color 0.3s ease", // Add transition for smooth effect
                      color:
                        PopularHoveredIndex === colIndex * 3 + popularIndex
                          ? "#528efa"
                          : "inherit",
                      backgroundColor:
                        PopularHoveredIndex === colIndex * 3 + popularIndex
                          ? "#e3edff"
                          : "transparent", // Apply background color based on hovered index
                    }}
                    onMouseEnter={() =>
                      setPopularHoveredIndex(colIndex * 3 + popularIndex)
                    }
                    onMouseLeave={() => setPopularHoveredIndex(null)}
                    onClick={() =>
                      handlePopularClick(colIndex * 3 + popularIndex)
                    } // Add onClick handler to select language
                  >
                    <Typography
                      variant="body2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "12px",
                      }}
                    >
                      {popular.name}
                    </Typography>
                  </div>
                ))}
              </div>
            ))}
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
            {chunkedCurrencies.map((column, colIndex) => (
              <div
                key={colIndex}
                style={{
                  flex: 1,
                  marginRight: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {column.map((currency, currencyIndex) => (
                  <div
                    key={currencyIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "4px", // Add border radius
                      padding: "15px", // Add padding
                      cursor: "pointer", // Change cursor to pointer
                      transition: "border-color 0.3s ease", // Add transition for smooth effect
                      color:
                        hoveredIndex === colIndex * 3 + currencyIndex
                          ? "#528efa"
                          : "inherit",
                      backgroundColor:
                        hoveredIndex === colIndex * 3 + currencyIndex
                          ? "#e3edff"
                          : "transparent", // Apply background color based on hovered index
                    }}
                    onMouseEnter={() =>
                      setHoveredIndex(colIndex * 3 + currencyIndex)
                    }
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() =>
                      handleCurrencyClick(colIndex * 3 + currencyIndex)
                    } // Add onClick handler to select language
                  >
                    {currency.symbol}
                    <Typography
                      variant="body2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "10px",
                      }}
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
