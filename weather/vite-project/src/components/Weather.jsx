import React, { useEffect, useState } from "react";

const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

function Weather({ city }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const json = await res.json();

        if (json.cod === 200) {
          setData(json);
          setError("");
        } else {
          setError("City not found!");
          setData(null);
        }
      } catch {
        setError("Something went wrong!");
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="weather-box">
      {error && <p className="error">{error}</p>}

      {data && (
        <div className="weather-data">
          <h2>
            {data.name}, {data.sys.country}
          </h2>
          <h3>{data.weather[0].main}</h3>
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <p className="temp">{Math.round(data.main.temp)}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
