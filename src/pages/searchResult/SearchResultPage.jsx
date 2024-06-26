import React, { useState } from "react";
import { Divider, Link, Grid, Box } from "@mui/material";
import SlideImage1 from "../../assets/promotion/slide1.jpg";
import SlideImage2 from "../../assets/promotion/slide2.jpg";
import SlideImage3 from "../../assets/promotion/slide3.jpg";
import SlideImage4 from "../../assets/promotion/slide4.jpg"; // Add more slide images as needed
import Description from "../../components/others/Description";
import RatingBadge from "../../components/badges/RatingBadges";
import BreakfastBadge from "../../components/badges/BreakfastBadge";
import BudgetFilter from "./filters/BudgetFilter";
import PropertyTypeFilter from "./filters/PropertyTypeFilter";
import RatingFilter from "./filters/RatingFilter";
import NeighborhoodFilter from "./filters/NeighborhoodFilter";
import GoogleMapPage from "./filters/GoogleMap";
import PaymentOptionsFilter from "./filters/PaymentOptionsFilter";
import ResultHeader from "./resultHeader/ResultHeader";
import CustomDivider from "./resultHeader/CustomDivider";

const SearchResultPage = () => {
  const [hoveredImage, setHoveredImage] = useState();

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
    {
      images: [SlideImage4, SlideImage3, SlideImage2], // Unique images for the second item
      descriptions: [
        {
          text: "Hotel Little Paris",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
          breakfastIncluded: true,
        },
      ],
    },
    {
      images: [SlideImage1, SlideImage2, SlideImage1], // Unique images for the third item
      descriptions: [
        {
          text: "Aparthotels Frankfurt Airport",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
      ],
    },
  ];

  return (
    <>
      <ResultHeader />
      <CustomDivider />
      <Box style={{ marginLeft: "384px", marginTop: "80px", width: "1148px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <GoogleMapPage />
              <BudgetFilter />
              <PropertyTypeFilter />
              <RatingFilter />
              <NeighborhoodFilter />
              <PaymentOptionsFilter />
            </Box>
          </Grid>
          <Grid item xs={8}>
            {tabData.map((data, dataIndex) => (
              <Link
                key={dataIndex}
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
                  marginBottom: "20px",
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
                        src={data.images[0]}
                        alt={data.descriptions[0].text}
                        style={{
                          width: "240px",
                          height: "240px",
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
                        {data.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`${data.descriptions[0].text} Slide ${
                              index + 1
                            }`}
                            style={{
                              width: "50px",
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
                      <Description {...data.descriptions[0]} />
                    </Box>
                  </Grid>
                </Grid>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SearchResultPage;
