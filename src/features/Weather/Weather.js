import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Weather() {
  const [weather, setWeather] = useState({});
  const city = "Haifa";
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=406326005765abc9e74f815ec5b33c41`
      )
      .then((response) => {
        console.log(response);
        const lat = response.data[0].lat;
        const lon = response.data[0].lon;
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=406326005765abc9e74f815ec5b33c41&units=metric`
          )
          .then((res) => {
            console.log(res);
            const newWeatherObj = {
              temp: res.data.main.temp,
              iconId: res.data.weather[0].icon,
              iconSrc: `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
              description: res.data.weather[0].description,
            };
            setWeather(newWeatherObj);
          });
      });
  }, []);

  return (
    <div className="weather-container">
      <div className="icon-box">
        <img
          src={`https://openweathermap.org/img/wn/${weather.iconId}@2x.png`}
          alt="icon"
          className="icon"
        />
      </div>
      <div className="data-description">
        <div className="temp">{weather.temp}&deg;</div>
        <div className="description">{weather.description}</div>
      </div>
    </div>
  );
}
