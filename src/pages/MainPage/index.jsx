import React, { useState } from "react";
import dotenv from "dotenv";

import Header from "../../components/header";
import ButtonAnimated from "../../components/buttonAnimated";
import TypeWriter from "../../assets/typewriter.svg";
import Information from "../../components/informationCard/information";

import "./style.css";

dotenv.config();

const MainPage = () => {
  const [address, setAddress] = useState(() => "");
  const [info, setInfo] = useState(() => "");

  const APIKEY = process.env.REACT_APP_API_KEY;

  function UserWriting(event) {
    setInfo("");
    setAddress(event.target.value);
  }

  function TypeError() {
    setAddress("");
    alert("Can't find that address ! Please try again.");
  }

  function UserClickButton() {
    let datas = address.split(",").map((data) => data.toLowerCase().trim());
    setAddress(datas);
    fetch(`https://cors-anywhere.herokuapp.com/dataservice.accuweather.com/locations/v1/cities/${datas[2]}/${datas[1]}/search?apikey=${APIKEY}&q=${datas[0]}`)
      .then((result) => result.json())
      .then((final) =>
        final[0] === undefined ? TypeError() : CityDetails(final[0].Key)
      );
  }

  function CityDetails(key) {
    fetch(
      `https://cors-anywhere.herokuapp.com/dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${APIKEY}`)
      .then((response) => response.json())
      .then((data) => setInfo(data.DailyForecasts));
  }

  return (
    <div className="mainPageWrapper">
      <Header main />
      <div className="SearchBoxDiv">
        <input
          type="text"
          placeholder="City, State, Country"
          onChange={(e) => UserWriting(e)}
        />

        <ButtonAnimated label={"Search"} onClick={() => UserClickButton()} />
      </div>
      {info === "" || address === "" ? (
        <div className="welcomeWrapper">
          <img src={TypeWriter} alt="TypeWriter" />
          <h1>
            Type the name of the City with the initials of the respective state
            and country at the search box.{" "}
          </h1>
        </div>
      ) : (
        <Information city={address} forecast={info} />
      )}
    </div>
  );
};

export default MainPage;
