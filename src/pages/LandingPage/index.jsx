import React from "react";

import Header from "../../components/header";
import AnimatedAnchor from "../../components/anchorAnimated";

import LandingImg from "../../assets/landingImg.svg";

import "./style.css";

const LandingPage = () => {
  return (
    <div className="LandingPageWrapper">
      <Header />
      <main>
        <div className="imgTextWrapper">
          <div className="titleWrapper">
            <span>Open Season/</span>
            <span> Winter</span>
          </div>
          <div className="imgWrapper">
            <img src={LandingImg} alt="LandingImg" />
          </div>
          <div className="fullNameWrapper">
            <span>What's</span>
            <span>the</span>
            <span>Weather ?</span>
          </div>
          <AnimatedAnchor path="/weatherapp" label="Discover" />
          <form>
            <input type="radio" name="weather" value="Winter" />
            <label htmlFor="Winter">Winter</label>
            <input type="radio" name="weather" value="Spring" />
            <label htmlFor="Spring">Spring</label>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
