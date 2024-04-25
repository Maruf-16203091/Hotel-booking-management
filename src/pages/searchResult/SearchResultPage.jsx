import React, { useState } from "react";
import { Typography, Link, Grid, Box } from "@mui/material";
import SlideImage1 from "../../assets/promotion/slide1.jpg";
import SlideImage2 from "../../assets/promotion/slide2.jpg";
import SlideImage3 from "../../assets/promotion/slide3.jpg";
import Description from "../../components/others/Description";
import RatingBadge from "../../components/badges/RatingBadges";
import BreakfastBadge from "../../components/badges/BreakfastBadge";
import BudgetFilter from "./filters/BudgetFilter";
import PropertyTypeFilter from "./filters/PropertyTypeFilter";
import RatingFilter from "./filters/RatingFilter";
import NeighborhoodFilter from "./filters/NeighborhoodFilter";
import PaymentOptionsFilter from "./filters/PaymentOptionsFilter";

const SearchResultPage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const tabData = [
    {
      images: [SlideImage1, SlideImage2, SlideImage3],
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
    <Box style={{ marginLeft: "377px", marginTop: "80px", width: "1150px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <BudgetFilter />
            <PropertyTypeFilter />
            <RatingFilter />
            <NeighborhoodFilter />
            <PaymentOptionsFilter />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Link
            href="#"
            underline="none"
            style={{ background: "#f7faff", textDecoration: "none" }}
            sx={{
              "&:hover": {
                backgroundColor: "#E3F2FD",
                transition: "background-color 0.1s ease",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "2px",
              },
              boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
              borderRadius: "2px",
              transition: "box-shadow 0.3s ease",
              display: "block",
              padding: "10px",

              marginLeft: "-150px",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p={2}
                  height="200px"
                  style={{ position: "relative" }}
                >
                  <img
                    src={tabData[0].images[0]}
                    alt={tabData[0].descriptions[0].text}
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "5px",
                      marginBottom: "10px",
                      cursor: "pointer",
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
                        src={hoveredImage}
                        alt="hovered image"
                        style={{ width: "200px", height: "150px" }}
                      />
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      width: "100%",
                      overflowX: "visible",
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
                          height: "50px",
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
                <Box p={2}>
                  <Description {...tabData[0].descriptions[0]} />
                </Box>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchResultPage;
