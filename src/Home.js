import React from "react";
import hotBg from "./assets/hot1.jpeg";
import coldBg from "./assets/cold.jpeg";
import hotSvg from "./assets/hot.svg";
import coldSvg from "./assets/cold1.svg";
import Descriptions from "./components/Descriptions";
import { useEffect, useState } from "react";
import { getFormattedWeatherData } from "./weatherService";
import "./index.css";

export default function Home() {
  const hotLinear = "linear-gradient(to left ,#13B2FE,#105DD5)";
  const coldLinear = "linear-gradient(to left ,#bdc3c7,#2c3e50)";
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(hotBg);
  const [svg, setSvg] = useState(hotSvg);
  const [linear, setLinear] = useState(hotLinear);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      // dynamic bg
      const threshold = units === "metric" ? 20 : 60;
      if (data.temp <= threshold) setBg(coldBg);
      else setBg(hotBg);

      const bgSvg = units === "metric" ? 20 : 60;
      if (data.temp <= bgSvg) setSvg(coldSvg);
      else setSvg(hotSvg);

      const bgLinear = units === "metric" ? 20 : 60;
      if (data.temp <= bgLinear) setLinear(coldLinear);
      else setLinear(hotLinear);
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);

    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay">
        <img src="./weather.svg" alt="cloud-svg" className="cloudy" />

        {weather && (
          <div className="container">
            <div
              className="section section__inputs"
              style={{ background: `${linear}` }}
            >
              {" "}
              <input
                onKeyDown={enterKeyPressed}
                type="text"
                name="city"
                placeholder="Enter City..."
                className="search"
              />
              <button
                className="degree-button"
                onClick={(e) => handleUnitsClick(e)}
              >
                °F
              </button>
            </div>

            <div
              className="section section__temperature"
              style={{ background: `${linear}` }}
            >
              <div className="icon">
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temperature">
                <h1>{`${weather.temp.toFixed()} °${
                  units === "metric" ? "C" : "F"
                }`}</h1>
                <img className="svg" src={svg} alt="Your SVG" />
              </div>
            </div>

            {/* bottom description */}
            <Descriptions weather={weather} units={units} linear={linear} />
          </div>
        )}
      </div>
    </div>
  );
}
