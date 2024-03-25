import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Popover,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import LanguageModal from "../../../modals/languageModel/LanguageModal";
import CurrencyModal from "../../../modals/currencyModal/CurrencyModal";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "./RightNav.css";

const RightNavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box className="right-box-styles">
      <BottomNavigation showLabels sx={{ flex: 1 }}>
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={
            <Typography className="right-typography-styles">
              List your place
            </Typography>
          }
          className="right-typography-custom-styles"
        />

        <CurrencyModal />
        <LanguageModal />
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={
            <Typography className="custom-button-sign-in">Sign in</Typography>
          }
          className="custom-typography-styles-sign-in"
        />
        <BottomNavigationAction
          component={Link}
          to="/hotels"
          label={
            <Typography className="custom-button-create">
              Create account
            </Typography>
          }
          className="custom-typography-create"
        />
        <AddShoppingCartOutlinedIcon className="custom-icon-cart" />
        <div
          style={{
            cursor: "pointer",
            padding: "20px 12px",
            height: "13px",
            width: "23px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.15s ease-in-out 0s",
            borderRadius: isHovered ? "4px" : "transparent",
            backgroundColor: isHovered ? "#86b1f7" : "transparent",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MenuIcon
            onClick={handleClick}
            style={{
              fontSize: "30px",
              color: isHovered ? "white" : "black",
            }}
          />
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              className: "popover-paper-right", // Apply className to PaperProps
            }}
          >
            <List>
              <ListItem
                button
                component={Link}
                to="/flights"
                onClick={handleClose}
                className="list-item-text-right"
              >
                <ListItemText
                  primary="Booking"
                  primaryTypographyProps={{
                    className: "list-item-text-right",
                  }}
                />
              </ListItem>

              <ListItem
                button
                component={Link}
                to="/bus"
                onClick={handleClose}
                className="list-item-text-right"
              >
                <ListItemText
                  primary="Sign in"
                  primaryTypographyProps={{
                    className: "list-item-text-right",
                  }}
                />
              </ListItem>

              <ListItem
                button
                component={Link}
                to="/train"
                onClick={handleClose}
                className="list-item-text-right"
              >
                <ListItemText
                  primary="SETTINGS"
                  primaryTypographyProps={{
                    className: "list-item-text-right",
                  }}
                />
              </ListItem>

              <ListItem
                button
                component={Link}
                to="/boats"
                onClick={handleClose}
                className="list-item-text-right"
              >
                <ListItemText
                  primary="List your place"
                  primaryTypographyProps={{
                    className: "list-item-text-right",
                  }}
                />
              </ListItem>
            </List>
          </Popover>
        </div>
      </BottomNavigation>
    </Box>
  );
};

export default RightNavBar;
