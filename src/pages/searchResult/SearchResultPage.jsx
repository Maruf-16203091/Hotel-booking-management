import React, { useState } from "react";
import { Typography, Link, Grid, Box } from "@mui/material";
import SlideImage1 from "../../assets/promotion/slide1.jpg";
import SlideImage2 from "../../assets/promotion/slide2.jpg"; // Import additional images
import SlideImage3 from "../../assets/promotion/slide3.jpg"; // Import additional images
import Description from "../../components/others/Description";
import RatingBadge from "../../components/badges/RatingBadges";
import BreakfastBadge from "../../components/badges/BreakfastBadge";

const SearchResultPage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const tabData = [
    {
      images: [SlideImage1, SlideImage2, SlideImage3], // Add additional images to the array
      descriptions: [
        {
          text: "JOYN MUNICH Olympic - Serviced Apartments",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
          breakfastIncluded: true,
        },
      ],
    },
  ];

  return (
    <div style={{ marginLeft: "365px", marginTop: "50px", width: "1100px" }}>
      <Link href="#" underline="none">
        <div style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            {tabData[0].descriptions[0].text}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                boxShadow={2}
                p={2}
                height="100%"
                style={{ position: "relative" }}
              >
                <img
                  src={tabData[0].images[0]} // Display the main image
                  alt={tabData[0].descriptions[0].text}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                />
                {hoveredImage && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={hoveredImage} // Display the hovered image over the main image
                      alt="hovered image"
                      style={{ width: "400px", height: "250px" }}
                    />
                  </div>
                )}
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    width: "100%",
                    overflowX: "auto",
                  }}
                >
                  {tabData[0].images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${tabData[0].descriptions[0].text} Slide ${
                        index + 1
                      }`}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                      onMouseEnter={() => setHoveredImage(image)}
                      onMouseLeave={() => setHoveredImage(null)}
                    />
                  ))}
                </div>

                <BreakfastBadge />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box p={2} boxShadow={2}>
                <Description {...tabData[0].descriptions[0]} />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Link>
    </div>
  );
};

export default SearchResultPage;
