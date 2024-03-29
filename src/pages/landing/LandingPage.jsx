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
import CardImage1 from "../../assets/main.jpg";
import CardImage2 from "../../assets/main1.jpg";
import CardImage3 from "../../assets/main2.jpg";

const LandingPage = () => {
  return (
    <Box
      sx={{
        maxWidth: "900px",
        marginTop: "100px",
        marginLeft: "20px",
        marginBottom: "50px",
        padding: "40px",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ marginBottom: "40px" }}>
        Top Destinations in Germany
      </Typography>
      <Grid container spacing={15}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              boxShadow: 3,
              margin: "auto",
              width: "300px",
              height: "400px",
            }}
          >
            <CardActionArea component={Link} to="/">
              <img
                src={CardImage1}
                alt="CardImage1"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Berlin
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  548 accomodations
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
              width: "300px",
              height: "400px",
            }}
          >
            <CardActionArea component={Link} to="/">
              <img
                src={CardImage2}
                alt="CardImage2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Munich
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  809 accomodations
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
              width: "300px",
              height: "400px",
            }}
          >
            <CardActionArea component={Link} to="/">
              <img
                src={CardImage3}
                alt="CardImage3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Frankfurt am Main
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  659 accomodations
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;
