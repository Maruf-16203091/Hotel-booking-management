import React, { useState } from "react";
import { Tabs, Tab, Typography, Button } from "@mui/material";
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
      images: [SlideImage1, SlideImage2, SlideImage3],
      descriptions: [
        {
          text: "Description for Berlin Slide 1",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Description for Berlin Slide 2",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4",
        },
        {
          text: "Description for Berlin Slide 3",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "5",
        },
      ],
    },
    {
      label: "Frankfurt am Main",
      images: [SlideImage3, SlideImage2],
      descriptions: [
        {
          text: "Description for Berlin Slide 1",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Description for Berlin Slide 2",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Description for Berlin Slide 3",
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
          text: "Description for Berlin Slide 1",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Description for Berlin Slide 2",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Description for Berlin Slide 3",
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
          text: "Description for Berlin Slide 1",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Description for Berlin Slide 2",
          location: "AMC Apartments, Charlottenburg, Berlin",
          price: "Per night after taxes and fees",
          currency: "EUR",
          amount: "151.92",
          rating: "4.5",
        },
        {
          text: "Description for Berlin Slide 3",
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
    <div style={{ marginLeft: "40px", marginBottom: "50px" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          marginBottom: "20px",
          fontWeight: "700",
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
      <div style={{ padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {tabData[tabValue].label} Images
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {tabData[tabValue].images.map((image, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                marginRight: "20px",
                marginBottom: "20px",
              }}
            >
              <img
                src={image}
                alt={`${tabData[tabValue].label} Slide ${index + 1}`}
                style={{
                  width: "280px",
                  height: "250px",
                  marginBottom: "10px",
                }}
              />
              <RatingBadge
                rating={tabData[tabValue].descriptions[index].rating}
              />{" "}
              {/* Include RatingBadge component */}
              <Description {...tabData[tabValue].descriptions[index]} />
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ textAlign: "center", marginTop: "0px" }}>
        <Button
          onClick={handleSeeMore}
          sx={{
            backgroundColor: "#5392f9",
            borderRadius: "4px",
            color: "white",
            border: "none",
            padding: "12px",
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
