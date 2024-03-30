import React, { useState } from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import SlideImage1 from "../../../assets/promotion/slide1.jpg";
import SlideImage2 from "../../../assets/promotion/slide2.jpg";
import SlideImage3 from "../../../assets/promotion/slide3.jpg";
import Description from "../../../components/others/Description";

const Featured = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabData = [
    {
      label: "Berlin",
      images: [SlideImage1, SlideImage2, SlideImage3],
      descriptions: [
        "Description for Berlin Slide 1",
        "Description for Berlin Slide 2",
        "Description for Berlin Slide 3",
      ],
    },
    {
      label: "Frankfurt am Main",
      images: [SlideImage3, SlideImage2],
      descriptions: [
        "Description for Frankfurt Slide 1",
        "Description for Frankfurt Slide 2",
      ],
    },
    {
      label: "Munich",
      images: [SlideImage1, SlideImage2],
      descriptions: [
        "Description for Munich Slide 1",
        "Description for Munich Slide 2",
      ],
    },
    {
      label: "Hamburg",
      images: [SlideImage2],
      descriptions: ["Description for Hamburg Slide 1"],
    },
  ];

  return (
    <div style={{ marginLeft: "30px", marginBottom: "50px" }}>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          marginBottom: "20px",
          marginLeft: "180px",
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
              style={{ marginRight: "20px", marginBottom: "20px" }}
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
              <Description text={tabData[tabValue].descriptions[index]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
