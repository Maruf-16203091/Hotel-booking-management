import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import AttractionsIcon from "@mui/icons-material/LocalPlay";

const SubheadSection = () => {
  const [selectedButton, setSelectedButton] = useState("Stays");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#07784b",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ color: "white", marginTop: "40px" }}
      >
        <Grid item>
          <Button
            variant="contained"
            color={selectedButton === "Stays" ? "secondary" : "primary"}
            startIcon={<HotelIcon />}
            sx={{
              backgroundColor:
                selectedButton === "Stays" ? "#0b8755" : "#05804f",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0b8755",
              },
            }}
            onClick={() => handleButtonClick("Stays")}
          >
            Stays
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={selectedButton === "Flights" ? "secondary" : "primary"}
            startIcon={<FlightIcon />}
            sx={{
              backgroundColor:
                selectedButton === "Flights" ? "#0b8755" : "#05804f",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0b8755",
              },
            }}
            onClick={() => handleButtonClick("Flights")}
          >
            Flights
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={selectedButton === "CarRental" ? "secondary" : "primary"}
            startIcon={<DriveEtaIcon />}
            sx={{
              backgroundColor:
                selectedButton === "CarRental" ? "#0b8755" : "#05804f",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0b8755",
              },
            }}
            onClick={() => handleButtonClick("CarRental")}
          >
            Car Rental
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color={selectedButton === "Attractions" ? "secondary" : "primary"}
            startIcon={<AttractionsIcon />}
            sx={{
              backgroundColor:
                selectedButton === "Attractions" ? "#0b8755" : "#05804f",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#0b8755",
              },
            }}
            onClick={() => handleButtonClick("Attractions")}
          >
            Attractions
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubheadSection;
