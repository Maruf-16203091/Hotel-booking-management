import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/main/header";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import LandingPage from "./pages/landing/LandingPage";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/index";
import Hotel from "./pages/hotels/SingleHotel";
import Attraction from "./pages/attractions/index";

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
        <Hero />
        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            margin: "0 auto", // Center the content horizontally
            maxWidth: "1200px", // Limit maximum width
          }}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/hotels" element={<Hotel />} />
            <Route path="/attraction" element={<Attraction />} />
          </Routes>
        </div>
       
      </div>
    </Router>
  );
};

export default App;
