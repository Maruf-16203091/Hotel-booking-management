import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

const SubheadSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003B95",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "white", marginTop: "40px", marginBottom: "20px" }}
      >
        Explore Options
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HotelIcon />}
            sx={{ borderRadius: "50px" }} // Round shape
          >
            Stays
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FlightIcon />}
            sx={{ borderRadius: "50px" }} // Round shape
          >
            Flights
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DriveEtaIcon />}
            sx={{ borderRadius: "50px" }} // Round shape
          >
            Car Rental
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubheadSection;
