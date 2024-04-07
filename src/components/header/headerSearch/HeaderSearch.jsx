import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";
import SearchEntryPage from "../../search/searchHeader/HeaderSearchEntry";
import SearchFieldGroup from "../../search/searchHeader/HeaderSearchFieldGroup";
import ButtonSmall from "../../search/searchHeader/ButtonSmall";

const HeaderSeaech = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100vw",
        height: "70px",
        backgroundColor: "#20274D",
     
      }}
      name="headersearch"
    >
      <Toolbar
        sx={{
          width: "100vw",
          height: "70px",
          backgroundColor: "#20274D",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchEntryPage />
        <SearchFieldGroup />
        <ButtonSmall />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderSeaech;
