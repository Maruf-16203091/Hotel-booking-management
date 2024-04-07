import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import CardImage1 from "../../../assets/topDestination/main.jpg";
import CardImage2 from "../../../assets/topDestination/main1.jpg";
import CardImage3 from "../../../assets/topDestination/main2.jpg";

const Outside = () => {
  return (
    <>
      <Box
        sx={{
          width: "1100px",
          marginTop: "20px",
          marginLeft: "350px",
          marginBottom: "50px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            marginBottom: "40px",
            marginLeft: "100px",
            fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
            fontWeight: "500",
          }}
        >
          Popular destinations outside Germany
        </Typography>
        <Grid container spacing={15}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                margin: "auto",
                width: "310px",
                height: "400px",
              }}
            >
              <CardActionArea component={Link} to="/">
                <img
                  src={CardImage1}
                  alt="CardImage1"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "700",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    }}
                  >
                    Kuala Lumpur
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: "14px",
                      color: "black",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    }}
                  >
                    19,902 accommodations
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                margin: "auto",
                width: "310px",
                height: "400px",
              }}
            >
              <CardActionArea component={Link} to="/">
                <img
                  src={CardImage2}
                  alt="CardImage2"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "700",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    }}
                  >
                    Las Vegas (NV)
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: "14px",
                      color: "black",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    }}
                  >
                    8059 accomodations
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                margin: "auto",
                width: "310px",
                height: "400px",
              }}
            >
              <CardActionArea component={Link} to="/">
                <img
                  src={CardImage3}
                  alt="CardImage3"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    sx={{
                      fontSize: "16px",
                      color: "black",
                      fontWeight: "700",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    }}
                  >
                    Manila
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: "14px",
                      color: "black",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
                    }}
                  >
                    5485 accomodations
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Outside;
