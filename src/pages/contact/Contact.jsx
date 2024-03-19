import React from "react";
import { Container, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">Email: info@example.com</Typography>
      <Typography variant="body1">Phone: +1 123 456 7890</Typography>
      <Typography variant="body1">
        Address: 123 Main St, City, Country
      </Typography>
    </Container>
  );
};

export default Contact;
