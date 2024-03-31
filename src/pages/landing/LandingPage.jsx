import React from "react";
import TopDestination from "../landing/topDestination/TopDestination";
import PromotionPage from "../landing/promotion/AccomoPromotion";
import OverHeard from "../landing/overheard/Overheard";
import Featured from "../landing/featured/Featured";
import International from "./international/International";
import AllLinks from "../../components/links/AllLinks";
import AllPlaces from "../landing/allPlaces/AllPlaces";
import Footer from "../../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <TopDestination />
      <Featured />
      <OverHeard />
      <International />
      <AllLinks />
      <AllPlaces />
      <Footer />
    </>
  );
};

export default LandingPage;
