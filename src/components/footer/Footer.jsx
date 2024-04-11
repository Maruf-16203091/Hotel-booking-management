import React from "react";
import { Container, Typography } from "@mui/material";
import Logo1 from "../../assets/footer/logo1.png";
import Logo2 from "../../assets/footer/logo2.png";
import Logo3 from "../../assets/footer/logo3.png";
import Logo4 from "../../assets/footer/logo4.png";
import Logo5 from "../../assets/footer/logo5.png";

import Logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2A2A2E",
        color: "white",
        width: "100vw",
        position: "absolute",
        marginLeft: "0px",
        marginTop: "700px",
        paddingTop: "40px",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          align="center"
          color="white"
          sx={{
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            fontWeight: "500",
            fontSize: "13px",
          }}
        >
          All material herein © 2005–2024 StayGo Company.
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="white"
          sx={{
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            fontWeight: "500",
            fontSize: "13px",
            marginBottom: "30px",
          }}
        >
          All Rights Reserved. StayGo is part of StayGo Holdings Inc., a leading
          provider of online accommodation and related services.
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img
            src={Logo}
            alt="Logo 1"
            style={{
              margin: "0 10px",
              height: "60px",
              width: "100px",
              marginRight: "40px",
            }}
          />
          <img
            src={Logo1}
            alt="Logo 1"
            style={{
              margin: "0 10px",
              height: "60px",
              width: "100px",
              marginRight: "40px",
            }}
          />
          <img
            src={Logo2}
            alt="Logo 2"
            style={{
              margin: "0 10px",
              height: "60px",
              width: "100px",
              marginRight: "40px",
            }}
          />
          <img
            src={Logo3}
            alt="Logo 3"
            style={{
              margin: "0 10px",
              height: "60px",
              width: "100px",
              marginRight: "40px",
            }}
          />
          <img
            src={Logo4}
            alt="Logo 4"
            style={{
              margin: "0 10px",
              height: "60px",
              width: "100px",
              marginRight: "40px",
            }}
          />
          <img
            src={Logo5}
            alt="Logo 4"
            style={{
              margin: "0 10px",
              height: "60px",
              width: "100px",
              marginRight: "40px",
            }}
          />
        </div>
        <Typography
          variant="body1"
          align="center"
          color="white"
          sx={{
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",

            fontSize: "11px",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          am-pc-4f-acm-web-user-698d86f78-wfxmj
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
