import React from "react";

import Header from "../../components/header";
import AnimatedAnchor from "../../components/anchorAnimated";

import winterImg from "../../assets/winterImg.svg";
import springImg from "../../assets/sun.svg";

import "./style.css";
import { useState } from "react";

const LandingPage = () => {
  const winter = {img: winterImg, labelSeason: 'Winter'}
  const spring = {img: springImg, labelSeason: 'Spring'}
  
  const [ season, setSeason ] = useState(() => winter)

  const ClickedSelect = (event) => {
    event.target.value === 'Winter' ? setSeason(winter) : setSeason(spring)
  }
  
  return (
    <div className="LandingPageWrapper">
      <Header />
      <main>
        <div className="imgTextWrapper">
          <div className="titleWrapper">
            <span>Open Season/</span>
            <span>{season.labelSeason}</span>
          </div>
          <div className="imgWrapper">
            <img src={season.img} alt="LandingImg" />
          </div>
          <div className="fullNameWrapper">
            <span>What's</span>
            <span>the</span>
            <span>Weather ?</span>
          </div>
          <AnimatedAnchor path="/weatherapp" label="Discover" />
          <form>
            <input 
            type="radio" 
            name="weather" 
            value="Winter" 
            onClick={(e) => ClickedSelect(e)}
            />
            <label htmlFor="Winter">Winter</label>

            <input
              type="radio"
              name="weather"
              value="Spring"
              onClick={(e) => ClickedSelect(e)}
            />
            <label htmlFor="Spring">Spring</label>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
