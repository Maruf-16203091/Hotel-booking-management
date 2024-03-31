import React from "react";
import TopDestination from "../landing/topDestination/TopDestination";
import PromotionPage from "../landing/promotion/AccomoPromotion";
import OverHeard from "../landing/overheard/Overheard";
import Featured from "../landing/featured/Featured";

const LandingPage = () => {
  return (
    <>
      <TopDestination />
      <Featured />
      <OverHeard />
    </>
  );
};

export default LandingPage;
