import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import AttractionsIcon from "@mui/icons-material/LocalPlay";

const SubheadSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003B95",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ color: "white", marginTop: "40px"}}
      >
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HotelIcon />}
            sx={{ borderRadius: "50px" }}
          >
            Stays
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FlightIcon />}
            sx={{ borderRadius: "50px" }}
          >
            Flights
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DriveEtaIcon />}
            sx={{ borderRadius: "50px" }}
          >
            Car Rental
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AttractionsIcon />}
            sx={{ borderRadius: "50px" }}
          >
            Attractions
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubheadSection;
