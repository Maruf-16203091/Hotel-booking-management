import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "50px",
        backgroundColor: "#f5f5f5",
        padding: "20px 0",
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" align="center" color="textSecondary">
          &copy; 2024 Hotel Booking System. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
