import React from "react";
import Banner from "./Banner";
import HowWorks from "./HowWorks";
import OurServices from "./OurServices";
import Brands from "./Brandns/Brands";
import ExtraSection from "./ExtraSection";
import Extra2 from "./Extra2";
import Reviews from "./Reviews";

import FAQPage from "./FAQPage";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowWorks></HowWorks>
      <OurServices></OurServices>
      <Brands></Brands>
      <div className="flex items-center justify-center my-4">
        <div className="flex-grow border-t border-gray-600"></div>
        <span className="mx-4 text-gray-500">OR</span>
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <ExtraSection></ExtraSection>

      <div className="flex items-center justify-center my-4">
        <div className="flex-grow border-t border-dashed border-gray-600"></div>
        <span className="mx-4 text-gray-500">OR</span>
        <div className="flex-grow border-t border-dashed border-gray-600"></div>
      </div>

      <Extra2></Extra2>

      <Reviews reviewsPromise={reviewsPromise}></Reviews>

      <FAQPage></FAQPage>
    </div>
  );
};

export default Home;
