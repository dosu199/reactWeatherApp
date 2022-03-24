import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecastresult from "./ForecastResult";

const api = {
  key: "e7523f4270ad43962084b3cda7506370",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

const Forecast = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState({});
  const [showForecast, setshowForecast] = useState(false);

  useEffect(() => {
    if (Object.keys(forecast).length > 0) {
      setshowForecast(true);
    }
  }, [forecast]);

  const getWeather = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `${api.base}?q=${city}&units=metric&appid=${api.key}`
    );
    setForecast(res);
  };

  return (
    <div className="ui raised very padded text container segment">
      <form className="ui form">
        <div className="field">
          <label>Enter city to get forecast</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button
          style={{ marginBottom: "10px" }}
          className=" fluid ui button"
          type="submit"
          onClick={(e) => getWeather(e)}

        >
          Go
        </button>
      </form>
      <div>
        {showForecast ? <Forecastresult forecast={forecast} /> : null}
      </div>
    </div>
  );
};

export default Forecast;
