import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";

const AdvanceSearchPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        marginTop: "205px",
        padding: "60px",
        backgroundColor: "#F8F7F9", // White background color
        borderRadius: "10px", // Border radius
        border: "1px solid #E0E0E0", // Border color
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        height: "150px",
      }}
    >
      <Grid>
        <Grid item xs={4}>
          <TextField
            sx={{
              backgroundColor: "white",
            }}
            label="Where to go?"
            variant="outlined"
            fullWidth
          />
        </Grid>{" "}
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
