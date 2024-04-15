import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

// Sample data for hotel results
const hotelResults = [
  {
    id: 1,
    name: "Luxury Hotel",
    image: "https://via.placeholder.com/300",
    description: "Experience luxury at its finest.",
    price: "$200 per night",
  },
  {
    id: 2,
    name: "Cozy Retreat",
    image: "https://via.placeholder.com/300",
    description: "A cozy retreat for a peaceful stay.",
    price: "$100 per night",
  },
  // Add more hotel data as needed
];

const SearchResultPage = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Search Results
      </Typography>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
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
  );
};

export default SearchResultPage;
