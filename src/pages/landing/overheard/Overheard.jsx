import React from "react";
import { Card, CardContent, Typography, Link, Box } from "@mui/material";

const OverHeard = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1100px",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            marginBottom: "40px",
            marginLeft: "160px",
            fontWeight: "500",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          Overheard from travelers
        </Typography>
      </div>
      <div
        style={{
          maxWidth: "1100px",
          marginLeft: "10px",
          position: "relative",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {[1, 2, 3, 4].map((index) => (
          <Card
            key={index}
            style={{ width: "300px", height: "330px", marginLeft: "40px" }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: "#5392f9",
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                }}
              >
                <Link href="#" underline="none">
                  Baiyoke Suite Hotel
                </Link>
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  marginBottom: "40px",
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                }}
              >
                in India
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontFamily:
                    "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                  marginBottom: "50px",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                "I will keep on recommending Agoda to my friends."
              </Typography>
              <Typography variant="body2" color="textSecondary">
                - Amit from India
              </Typography>
              <Box
                sx={{
                  borderTop: "3px solid #75A8F9",
                  marginTop: "25px",
                  paddingTop: "10px",
                  width: "280px",
                  marginLeft: "-15px",
                }}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default OverHeard;
