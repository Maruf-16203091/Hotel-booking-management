import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  Box,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  FormGroup,
} from "@mui/material";
import { Phone, Done } from "@mui/icons-material";

const ForgotPasswordEmailPage = () => {
  const [countryCode, setCountryCode] = React.useState("");

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };
  return (
    <Container
      maxWidth="sm"
      sx={{
        marginLeft: "720px",
        marginTop: "120px",
        padding: "15px",
        width: "400px",
        height: "450px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        alignContent: "center",
        fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-sarif",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          marginLeft: "-95px",
        }}
      >
        Forgot Password
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Select
            value={countryCode}
            onChange={handleCountryCodeChange}
            variant="outlined"
            fullWidth
            sx={{
              marginTop: "8px",
              fontFamily:
                "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
            }}
          >
            <MenuItem value="+1">+1</MenuItem>
            <MenuItem value="+91">+91</MenuItem>
            {/* Add more country codes as needed */}
          </Select>
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
          fontSize: "14px",
        }}
      >
        Please enter your mobile number in the box above. We will send you a
        code to access further instructions.
      </Typography>
      <Box
        mt={2}
        sx={{
          display: "inline-block",
          padding: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: "4px",
          marginBottom: "25px",
          marginLeft: "25px",
        }}
      >
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={<Checkbox icon={<Done />} checkedIcon={<Done />} />}
              label="I am not a robot"
            />
          </FormGroup>
        </FormControl>
      </Box>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#5392F9",
              width: "350px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            Reset Password
          </Button>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Link
            href="/sign-in"
            underline="none"
            sx={{
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Back to sign in
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForgotPasswordEmailPage;
