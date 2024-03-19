import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import SubHead from "./components/SubHead";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LandingPage from "./pages/landing/LandingPage";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import Services from "./pages/services/index";

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <SubHead />
        <Hero />
        <div style={{ flexGrow: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
