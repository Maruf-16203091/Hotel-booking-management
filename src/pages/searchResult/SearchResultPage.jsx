import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const hotelResults = [
  {
    id: 1,
    name: "IFA Schöneck Hotel & Ferienpark",
    image: "https://via.placeholder.com/300",
    description: "Experience luxury at its finest.",
    price: "$800 per night",
  },
  {
    id: 2,
    name: "Schlosshotel Berlin by Patrick Hellmann",
    image: "https://via.placeholder.com/300",
    description: "A grand hotel located at Sophienstrasse.",
    price: "$500 per night",
  },
  {
    id: 3,
    name: "Hotel Adlon Kempinski Berlin",
    image: "https://via.placeholder.com/300",
    description: "The architecture has won several awards.",
    price: "$500 per night",
  },
];

const SearchResultPage = () => {
  return (
    <div
      style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "100%", maxWidth: "1300px", padding: "0 10px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {hotelResults.map((hotel) => (
            <Card key={hotel.id} sx={{ maxWidth: 345, margin: 2 }}>
              <CardMedia
                component="img"
                height="200"
                image={hotel.image}
                alt={hotel.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hotel.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hotel.price}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
