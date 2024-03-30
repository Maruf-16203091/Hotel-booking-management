import React from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination } from "@mui/material";
import SlideImage1 from "../../../assets/promotion/slide1.jpg";
import SlideImage2 from "../../../assets/promotion/slide2.jpg";
import SlideImage3 from "../../../assets/promotion/slide3.jpg";

const PromotionPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slideStyles = {
    margin: "0 10px",
    width: "280px", // Custom width for the images
    height: "230px", // Custom height for the images
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        marginBottom: "150px",
        marginLeft:"100px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
          marginBottom: "20px",
          marginLeft: "10px",
          fontWeight: "700",
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
