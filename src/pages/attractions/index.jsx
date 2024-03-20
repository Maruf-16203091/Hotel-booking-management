import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Services = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Room Booking"
            secondary="Book rooms in advance for your stay."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Event Planning"
            secondary="We offer event planning services for special occasions."
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Dining Options"
            secondary="Explore our dining options and enjoy delicious meals."
          />
        </ListItem>
        {/* Add more services as needed */}
      </List>
    </Container>
  );
};

export default Services;
