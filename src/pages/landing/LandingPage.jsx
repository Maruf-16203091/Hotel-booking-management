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
      <Grid container spacing={2}></Grid>
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
