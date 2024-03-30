import React from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination } from "@mui/material";
import SlideImage1 from "../../assets/promotion/slide1.jpg";
import SlideImage2 from "../../assets/promotion/slide2.jpg";
import SlideImage3 from "../../assets/promotion/slide3.jpg";

const PromotionPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          backgroundColor: "black", // Set background color for the arrow
          borderRadius: "50%",
          color: "white",
          position: "absolute",
          top: "50%",
          right: "-20px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        &gt;
      </div>
    ),
    prevArrow: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          backgroundColor: "black", // Set background color for the arrow
          borderRadius: "50%",
          color: "white",
          position: "absolute",
          top: "50%",
          left: "-20px",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      >
        &lt;
      </div>
    ),
  };

  const slideStyles = {
    margin: "0 10px",
    width: "280px", // Custom width for the images
    height: "200px", // Custom height for the images
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        marginTop: "100px",
        marginBottom: "150px",
        marginLeft: "100px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          marginBottom: "40px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
        }}
      >
        Accommodation Promotions
      </Typography>
      <Slider {...settings}>
        <div>
          <div style={slideStyles}>
            <img
              src={SlideImage1}
              alt="Promotion Slide 1"
              style={{ width: "100%", height: "80%" }}
            />
          </div>
        </div>
        <div>
          <div style={slideStyles}>
            <img
              src={SlideImage2}
              alt="Promotion Slide 2"
              style={{ width: "100%", height: "80%" }}
            />
          </div>
        </div>
        <div>
          <div style={slideStyles}>
            <img
              src={SlideImage3}
              alt="Promotion Slide 3"
              style={{ width: "100%", height: "80%" }}
            />
          </div>
        </div>
      </Slider>
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Pagination count={4} />
      </div>
    </div>
  );
};

export default PromotionPage;
