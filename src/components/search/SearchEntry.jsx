import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BerlinImage from "../../assets/topDestination/main.jpg";
import MunichImage from "../../assets/topDestination/main1.jpg";
import HamburgImage from "../../assets/topDestination/main2.jpg";

const germanyCities = [
  { name: "Berlin", image: BerlinImage },
  { name: "Munich", image: MunichImage },
  { name: "Hamburg", image: HamburgImage },
  { name: "Berlin", image: BerlinImage },
  { name: "Munich", image: MunichImage },
  { name: "Hamburg", image: HamburgImage },
  { name: "Berlin", image: BerlinImage },
  { name: "Munich", image: MunichImage },
  { name: "Hamburg", image: HamburgImage },
];

const SearchEntryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const cardRef = useRef(null);

  const handleSearchInputClick = (event) => {
    const { top, left, height } = event.target.getBoundingClientRect();
    setCardPosition({ top: top + height, left });
    setIsModalOpen(true);
  };

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    setSearchValue(cityName); // Update search input value
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    if (!value) {
      setSelectedCity(""); // Clear selected city if input is cleared
    }
  };

  // Filter cities based on search input
  const filteredCities = germanyCities.filter((city) =>
    city.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {/* Search Input */}
      <Box
        sx={{
          position: "relative",
          width: "1100px",
          height: "65px",
          backgroundColor: "#FFFFFF",
          marginLeft: "70px",
          marginRight: "30px",
          borderRadius: "12px",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          border: "1px solid #d7d7db",
        }}
      >
        <TextField
          fullWidth
          placeholder="Enter a destination or property"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: 48 }} />
              </InputAdornment>
            ),
          }}
          onClick={handleSearchInputClick}
          value={searchValue} // Use searchValue for input value
          onChange={handleInputChange}
          sx={{
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid transparent", // Add a transparent border
              },
              "&:hover fieldset": {
                borderColor: "transparent", // Remove hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "#87B3FB",
                borderRadius: "12px",
                height: "65px",
                top: "-9px",
              },
              "& input::placeholder": {
                fontSize: "16px",
                color: "black",
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
              },
            },
          }}
        />
      </Box>

      {/* Modal */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        PaperProps={{
          style: {
            width: "1100px", // Adjust the width as needed
            maxHeight: "600px",
            backgroundColor: "white",
            color: "black",
            overflowY: "auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            border: "1px solid #87B3FB",
            borderRadius: "12px",
            position: "absolute",
            top: cardPosition.top - 26,
            left: cardPosition.left - 105,
            maxWidth: "none",
          },
        }}
      >
        <DialogTitle>
          <Typography variant="h6">Popular Cities in Germany</Typography>
        </DialogTitle>
        <DialogContent sx={{ padding: "16px" }}>
          <Box
            sx={{
              position: "absolute",
              top: "90%",
              left: cardPosition.left - 620, // Adjust as needed
              width: 0,
              height: 0,
              borderTop: "7px solid transparent",
              borderRight: "15px solid transparent",
              borderBottom: "14px solid white",
              borderLeft: "15px solid transparent",
              zIndex: 999,
            }}
          />
          <Grid container spacing={2}>
            {filteredCities.map((city, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                    marginLeft: "10px",
                    border: "1px solid transparent",
                    transition: "border-color 0.3s ease-in-out", // Add transition
                    "&:hover": {
                      backgroundColor: "#EFF4FD",
                      borderRadius: "5px",
                    },
                  }}
                  onClick={() => handleCityClick(city.name)}
                >
                  <img
                    src={city.image}
                    alt={city.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      marginTop: "15px",
                      marginLeft: "15px", // Adjust as needed
                      marginBottom: "10px",
                    }}
                    component="div"
                  >
                    <div
                      style={{
                        marginBottom: "15px",
                        marginLeft: "0px",
                      }}
                    >
                      {city.name}
                    </div>{" "}
                    <div>
                      <span style={{ color: "#5392F9" }}>57% </span>stayed there
                    </div>{" "}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchEntryPage;
