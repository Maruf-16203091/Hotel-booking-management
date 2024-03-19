import React from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const LandingPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling search
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to our Hotel Booking System
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Search for Hotels"
              variant="outlined"
              fullWidth
              // Add onChange handler for search input
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      {/* Add Advanced Search component */}
      {/* Example: <AdvancedSearch /> */}
    </Container>
  );
};

export default LandingPage;
