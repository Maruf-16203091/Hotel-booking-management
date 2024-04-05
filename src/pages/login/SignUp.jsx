import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Link,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Box,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Google, Facebook, Apple } from "@mui/icons-material";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log("Signing up...");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <Container maxWidth="sm" sx={{ marginLeft: "700px", marginTop: "200px" }}>
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                required
              />
              <FormHelperText error>
                Password must be at least 8 characters
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Confirm Password</InputLabel>
              <OutlinedInput
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleToggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
                required
              />
              <FormHelperText error>Passwords must match</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign Up
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Link href="/login" underline="always">
                Log in
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button variant="outlined" startIcon={<Google />} fullWidth>
                Sign Up with Google
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt={1}>
              <Button variant="outlined" startIcon={<Facebook />} fullWidth>
                Sign Up with Facebook
              </Button>
            </Box>
            <Box display="flex" justifyContent="center" mt={1}>
              <Button variant="outlined" startIcon={<Apple />} fullWidth>
                Sign Up with Apple
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
      <Typography variant="body2" align="center" mt={2}>
        By signing up, you agree to our{" "}
        <Link href="/terms" underline="always">
          Terms and Conditions
        </Link>
      </Typography>
    </Container>
  );
};

export default SignUpPage;
