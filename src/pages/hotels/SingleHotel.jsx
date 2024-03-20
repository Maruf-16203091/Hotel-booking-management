import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et leo nec
        augue placerat convallis. Aenean in efficitur urna. Vivamus feugiat,
        sapien vitae viverra luctus, lorem felis convallis nunc, nec maximus
        justo nisi vel felis. Integer nec nulla non nunc ultricies cursus.
        Nullam eu justo eu risus semper tempor.
      </Typography>
    </Container>
  );
};

export default About;
