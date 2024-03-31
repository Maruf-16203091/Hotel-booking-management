import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";

const OverHeard = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "900px",
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
            marginLeft: "150px",
            fontWeight: "700",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          Overheard from travelers
        </Typography>
      </div>
      <div
        style={{
          maxWidth: "900px",
          marginBottom: "150px",
          marginLeft: "20px",
          position: "relative",
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {[1, 2, 3].map((index) => (
          <Card
            key={index}
            style={{ width: "280px", height: "300px", marginLeft: "40px" }}
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
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default OverHeard;
