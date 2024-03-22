import React from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import LanguageModal from "../modals/LanguageModal";
import CurrencyModal from "../modals/CurrencyModal";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const RightNavBar = () => {
  return (
    <Box
      sx={{
        position: "relative",
        justifyContent: "flex-end",
        display: "inline-flex",
        flex: "1 1 0%",
        minWidth: "unset",
        marginLeft: "550px",
        padding: "30px",
      }}
    >
      <BottomNavigation showLabels sx={{ flex: 1 }}>
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={
            <Typography
              sx={{
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-serif", // Apply Mallory font
                border: "1px solid rgb(255, 86, 125)", // Set border to 1px solid rgb(255, 86, 125)
                borderRadius: "4px", // Add border radius for rounded corners
                padding: "12px 16px", // Add padding for better appearance
                color: "rgb(255, 86, 125)", // Set text color to rgb(255, 86, 125)
                transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                fontSize: "14px",
                "&:hover": {
                  borderColor: "rgb(255, 86, 125)",
                  backgroundColor: "rgb(255, 86, 125)", // Change border color to red on hover
                  color: "white",
                },
              }}
            >
              List your place
            </Typography>
          }
          sx={{
            color: "#2a2a2e",
            padding: 0, // Set width to auto
            marginX: "4px", // Adjust margin for consistent spacing
            whiteSpace: "nowrap",
          }}
        />

        <CurrencyModal />
        <LanguageModal />
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={
            <Typography
              sx={{
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-serif", // Apply Mallory font
                borderRadius: "4px", // Add border radius for rounded corners
                padding: "12px 16px", // Add padding for better appearance
                color: "rgb(83, 146, 249)", // Set text color to red
                transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                fontSize: "14px",
                "&:hover": {
                  borderColor: "rgb(83, 146, 249)",
                  backgroundColor: "rgb(83, 146, 249)", // Change border color to red on hover
                  color: "white", // Change text color to white on hover
                },
              }}
            >
              Sign in
            </Typography>
          }
          sx={{
            color: "#2a2a2e",
            padding: 0, // Set width to auto
            marginX: "4px", // Adjust margin for consistent spacing
            whiteSpace: "nowrap",
          }}
        />
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={
            <Typography
              sx={{
                fontFamily:
                  "mallory, Helvetica Neue, Helvetica, Arial, sans-serif", // Apply Mallory font
                border: "1px solid rgb(83, 146, 249)", // Set border to 1px solid red
                borderRadius: "4px", // Add border radius for rounded corners
                padding: "12px 16px", // Add padding for better appearance
                color: "rgb(83, 146, 249)", // Set text color to red
                transition: "all 0.15s ease-in-out 0s", // Add transition for smooth effect
                fontSize: "14px",
                "&:hover": {
                  borderColor: "rgb(83, 146, 249)",
                  backgroundColor: "rgb(83, 146, 249)", // Change border color to red on hover
                  color: "white", // Change text color to white on hover
                },
              }}
            >
              Create account
            </Typography>
          }
          sx={{
            color: "#2a2a2e",
            padding: 0, // Set width to auto
            marginX: "4px", // Adjust margin for consistent spacing
            whiteSpace: "nowrap",
          }}
        />
        <AddShoppingCartOutlinedIcon
          style={{
            cursor: "pointer",
            padding: "16px 32px", // Adjust padding as needed
            height: "20px",
            width: "20px",
          }}
        />
        <MenuIcon
          style={{
            cursor: "pointer",
            padding: "16px 0px", // Adjust padding as needed
            height: "20px",
            width: "20px",
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default RightNavBar;
