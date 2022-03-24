import React from "react";

const Forecastresult = ({ forecast }) => {
  return (
    <div className="ui segment">
      <div className="ui four column grid">
        <div className="two column row">
          
          <div className="column"><h3>{forecast.data.name}</h3> {forecast.data.weather[0].main}, {forecast.data.weather[0].description}</div>
        </div>
        <div className="column">Temperature: {Math.round(forecast.data.main.temp)}°C</div>
        <div className="column">Humidity: {forecast.data.main.humidity}</div>
        <div className="column">Pressure: {forecast.data.main.pressure}</div>
        <div className="column">Feels like: {Math.round(forecast.data.main.feels_like)}°C</div>
      </div>
    </div>
  );
};

export default Forecastresult;
