import React from "react";

const Result = props => {
  const {
    error,
    date,
    sunrise,
    sunset,
    timezone,
    city,
    temp,
    pressure,
    wind,
    img
  } = props.weather;

  let content = null;

  if (!error && city) {
    const sunriseTime = new Date(
      (sunrise + timezone - 3600) * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const sunsetTime = new Date(
      (sunset + timezone - 3600) * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

    content = (
      <div className="result">
        <h3 className="result__city">{city}</h3>
        <h4 className="result__date">Date: {date}</h4>
        <img
          src={`http://openweathermap.org/img/wn/${img}@2x.png`}
          alt=""
          className="result__img"
        />
        <p className="result__temp">{temp} &#176;C</p>
        <p className="result__pressure">
          Pressure: <span className="result__API">{pressure} hPa</span>
        </p>
        <p className="result__wind">
          Wind: <span className="result__API">{wind} m/s</span>
        </p>
        <p className="result__sunrise">
          Sunrise: <span className="result__API">{sunriseTime}</span>
        </p>
        <p className="result__sunset">
          Sunset: <span className="result__API">{sunsetTime}</span>
        </p>
      </div>
    );
  }

  return (
    <div>
      {error ? (
        <span className="result__error">
          Nie mamy w bazie takiego miasta: <strong>{city}</strong>
        </span>
      ) : (
        content
      )}
    </div>
  );
};

export default Result;
