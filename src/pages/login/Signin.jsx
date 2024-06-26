import React from "react";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  Box,
  Link,
  Button,
  TextField,
  OutlinedInput,
  InputAdornment,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import {
  Google,
  Facebook,
  Apple,
  Lock,
  Visibility,
  VisibilityOff,
  Phone,
} from "@mui/icons-material";

const SignInPage = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState("");

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        marginLeft: "720px",
        marginTop: "100px",
        padding: "15px",
        width: "500px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          marginLeft: "19px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        Sign in
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        sx={{
          marginLeft: "23px",
          fontFamily: "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
        }}
      >
        For security, please sign in to access your information
      </Typography>
      <Box>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{ "& .MuiTabs-indicator": { height: 3 } }}
        >
          <Tab label="Email" sx={{ width: "44%" }} />
          <Tab label="Mobile" sx={{ width: "44%" }} />
        </Tabs>
        <Box p={3}>
          {tabValue === 0 && (
            <>
              <Box>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  sx={{
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                />
                <OutlinedInput
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
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
                  required
                  sx={{
                    marginTop: "15px",
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Sign In
                </Button>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Link
                  href="/sign-up"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                >
                  Create account
                </Link>
                <Link
                  href="/forgot-password-email"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
              <Box>
                {/* Sign in by email with Google, Facebook, Apple */}
                <Typography
                  align="center"
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                >
                  Or sign in with
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                  <Button variant="outlined" startIcon={<Google />} fullWidth>
                    Sign In with Google
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" mt={1}>
                  <Button variant="outlined" startIcon={<Facebook />} fullWidth>
                    Sign In with Facebook
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" mt={1}>
                  <Button variant="outlined" startIcon={<Apple />} fullWidth>
                    Sign In with Apple
                  </Button>
                </Box>
              </Box>
            </>
          )}
          {tabValue === 1 && (
            <>
              <Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    variant="outlined"
                    fullWidth
                    sx={{
                      width: "20%",
                      marginRight: "10px",
                      marginTop: "8px",
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                    }}
                  >
                    <MenuItem value="+1">+1</MenuItem>
                    <MenuItem value="+91">+91</MenuItem>
                    {/* Add more country codes as needed */}
                  </Select>
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      fontFamily:
                        "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                    }}
                  />
                </Box>
                <OutlinedInput
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
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
                  required
                  sx={{
                    marginTop: "15px",
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ marginTop: "30px", marginBottom: "20px" }}
                >
                  Sign In
                </Button>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Link
                  href="/sign-up"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                >
                  Create account
                </Link>
                <Link
                  href="/forgot-password-mobile"
                  variant="body2"
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
              <Box>
                {/* Sign in by phone number with Google, Facebook, Apple */}
                <Typography
                  align="center"
                  variant="body2"
                  gutterBottom
                  sx={{
                    fontFamily:
                      "mallory, Helvetica Neue, Helvetica, Arial, sans-serif",
                  }}
                >
                  Or sign in with
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                  <Button variant="outlined" startIcon={<Google />} fullWidth>
                    Sign In with Google
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" mt={1}>
                  <Button variant="outlined" startIcon={<Facebook />} fullWidth>
                    Sign In with Facebook
                  </Button>
                </Box>
                <Box display="flex" justifyContent="center" mt={1}>
                  <Button variant="outlined" startIcon={<Apple />} fullWidth>
                    Sign In with Apple
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Typography variant="body2" align="center" mt={2}>
        By signing in, you agree to our{" "}
        <Link href="/terms" underline="always">
          Terms and Conditions
        </Link>
      </Typography>
    </Container>
  );
};

export default SignInPage;
