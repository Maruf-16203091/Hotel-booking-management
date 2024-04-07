import React, { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@mui/material";
import LeftNavBar from "../navBar/leftNav/LeftNav";
import RightNavBar from "../navBar/rightNav/RightNav";
import HeaderSearch from "../headerSearch/HeaderSearch";

const Header = () => {
  const [showHeaderSearch, setShowHeaderSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Change the threshold value as needed
      if (scrollY > 400) {
        setShowHeaderSearch(true);
      } else {
        setShowHeaderSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          paddingX: "16px",
          backgroundColor: showHeaderSearch ? "transparent" : "#ffffff",
          boxShadow: showHeaderSearch
            ? "none"
            : "0px 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            paddingX: "0px 16px",
            color: showHeaderSearch ? "#ffffff" : "#2a2a2e",
            flex: "1 1 0px",
          }}
        >
          <LeftNavBar />
          <RightNavBar />
        </Toolbar>
      </AppBar>
      {showHeaderSearch && <HeaderSearch />}
    </>
  );
};

export default Header;
