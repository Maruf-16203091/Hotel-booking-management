import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Typography,
  Grid,
  Modal, // Import Modal component
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BerlinImage from "../../../assets/topDestination/main.jpg";
import MunichImage from "../../../assets/topDestination/main1.jpg";
import HamburgImage from "../../../assets/topDestination/main2.jpg";

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
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
  const [selectedCity, setSelectedCity] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target) &&
        event.target.getAttribute("class") !== "MuiGrid-root"
      ) {
        setIsModalOpen(false);
      }
    };

    const handleScroll = () => {
      if (
        cardRef.current &&
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchInputClick = (event) => {
    const { top, left, height } = event.target.getBoundingClientRect();
    setIsModalOpen(true);
    setCardPosition({ top: top + height, left });
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

  const filteredCities = germanyCities.filter((city) =>
    city.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
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
          value={searchValue}
          onChange={handleInputChange}
          sx={{
            "& .MuiInputLabel-root": {
              display: "none",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
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

        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            ref={cardRef}
            sx={{
              position: "absolute",
              top: cardPosition.top +15,
              left: cardPosition.left - 78,
              width: "1105px",
              maxHeight: "600px",
              backgroundColor: "white",
              color: "black",
              overflowY: "auto",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 999,
              border: "1px solid #87B3FB",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h6" mb={2} sx={{ padding: "16px" }}>
              Popular Cities in Germany
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                padding: "16px",
              }}
            >
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
                      transition: "border-color 0.3s ease-in-out",
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
                        marginLeft: "15px",
                        marginBottom: "10px",
                      }}
                      component="div"
                    >
                      <div style={{ marginBottom: "15px" }}>{city.name}</div>{" "}
                      <div>
                        <span style={{ color: "#5392F9" }}>57% </span>stayed
                        there
                      </div>{" "}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default SearchEntryPage;
