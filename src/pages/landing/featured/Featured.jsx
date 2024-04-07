import React, { useState } from "react";
import { Tabs, Tab, Typography, Button, Link, Grid } from "@mui/material";
import SlideImage1 from "../../../assets/promotion/slide1.jpg";
import SlideImage2 from "../../../assets/promotion/slide2.jpg";
import SlideImage3 from "../../../assets/promotion/slide3.jpg";
import Description from "../../../components/others/Description";
import RatingBadge from "../../../components/badges/RatingBadges";

const Featured = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showProperties, setShowProperties] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setShowProperties(false); // Reset showProperties when tab changes
  };

  const handleSeeMore = () => {
    setShowProperties(true);
  };

  const tabData = [
    {
      label: "Berlin",
      images: [
        SlideImage1,
        SlideImage2,
        SlideImage3,
        SlideImage3,
        SlideImage3,
        SlideImage3,
        SlideImage3,
        SlideImage3,
      ],
      descriptions: [
        {
          text: "JOYN MUNICH Olympic - Serviced Apartments",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "JOYN MUNICH Olympic - Serviced Apartments",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Aparthotels Frankfurt Airport",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "JOYN MUNICH Olympic - Serviced Apartments",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "JOYN MUNICH Olympic - Serviced Apartments",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Aparthotels Frankfurt Airport",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Staycity Aparthotels",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "JOYN MUNICH Olympic - Serviced Apartments",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
      ],
    },
    {
      label: "Frankfurt am Main",
      images: [SlideImage3, SlideImage2],
      descriptions: [
        {
          text: "Hotel Little Paris",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Aparthotels Frankfurt Airport",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Savoy Hotel",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
      ],
    },
    {
      label: "Munich",
      images: [SlideImage1, SlideImage2],
      descriptions: [
        {
          text: "Hotel Little Paris",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Savoy Hotel",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Savoy Hotel",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
      ],
    },
    {
      label: "Hamburg",
      images: [SlideImage2],
      descriptions: [
        {
          text: "Staycity Aparthotels",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Savoy Hotel",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Staycity Aparthotels",
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
    <div style={{  marginLeft: "365px", width: "1100px" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          marginBottom: "20px",
          fontWeight: "500",
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        Featured homes recommended for you
      </Typography>

      <Tabs value={tabValue} onChange={handleTabChange} centered>
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      <Link href="#" underline="none">
        <div style={{ padding: "20px" }}>
          <Typography variant="h4" gutterBottom>
            {tabData[tabValue].label}
          </Typography>
          <Grid container spacing={2}>
            {tabData[tabValue].images.map((image, index) => (
              <Grid item xs={3} key={index}>
                <div
                  style={{
                    position: "relative",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={image}
                    alt={`${tabData[tabValue].label} Slide ${index + 1}`}
                    style={{
                      width: "102%",
                      height: "250px",
                      marginBottom: "10px",
                    }}
                  />
                  <RatingBadge
                    rating={tabData[tabValue].descriptions[index].rating}
                  />{" "}
                  {/* Include RatingBadge component */}
                  <div style={{ marginBottom: "155px" }}>
                    <Description {...tabData[tabValue].descriptions[index]} />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Link>

      <div
        style={{ textAlign: "center", marginTop: "20px", marginLeft: "110px" }}
      >
        <Button
          onClick={handleSeeMore}
          sx={{
            backgroundColor: "#5392f9",
            borderRadius: "4px",
            color: "white",
            border: "none",
            padding: "13px",
            textTransform: "none",
            marginBottom: "50px",
            fontSize: "14px",
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            "&:hover": {
              backgroundColor: "#87B3FB",
            },
          }}
        >
          See More ({tabData[tabValue].label}) Properties
        </Button>
      </div>
    </div>
  );
};

export default Featured;
