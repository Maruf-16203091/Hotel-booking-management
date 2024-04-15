import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/main/header";
import Footer from "./components/footer/Footer";
import SaveMoreButton from "./components/buttons/saveMore/SaveMore";
import Hero from "./components/hero/Hero";
import LandingPage from "./pages/landing/LandingPage";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/index";
import Hotel from "./pages/hotels/SingleHotel";
import Attraction from "./pages/attractions/index";
import SignUp from "./pages/login/SignUp";
import SignInPage from "./pages/login/SignIn";
import AllPlaces from "./pages/landing/allPlaces/AllPlaces";
import AllLinks from "./components/links/AllLinks";
import ForgotPasswordEmailPage from "./pages/login/ForgotPasswordEmail";
import ForgotPasswordMobilePage from "./pages/login/ForgetPasswordMobileNumber";
import HeaderSearch from "./components/header/headerSearch/HeaderSearch";
import SearchResultPage from "./pages/searchResult/SearchResultPage";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />

        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            margin: "0 auto",
            maxWidth: "1200px",
          }}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotels" element={<Hotel />} />
            <Route path="/attraction" element={<Attraction />} />
            <Route path="/sign-in" element={<SignInPage />} />
            SearchResultPage
            <Route
              path="/forgot-password-email"
              element={<ForgotPasswordEmailPage />}
            />
            <Route
              path="/forgot-password-mobile"
              element={<ForgotPasswordMobilePage />}
            />
            <Route path="/search-result" element={<SearchResultPage />} />
          </Routes>
        </div>
      </div>

      <AllLinks />
      <AllPlaces />
      <Footer />
      <SaveMoreButton />
    </Router>
  );
};

export default App;
