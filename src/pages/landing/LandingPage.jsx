import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";

const AdvanceSearchPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField label="Where to go?" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Stay Dates" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={4}>
          <TextField label="Number of Persons" variant="outlined" fullWidth />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: "20px",
          right: "20px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AdvanceSearchPage;
