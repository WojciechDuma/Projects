const APIkey = "379bf8a72ed22a3cc2455e5323ca0bc6";

class App extends React.Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    timezone: "",
    temp: "",
    pressure: "",
    wind: "",
    img: "",
    error: false
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    console.log("yep");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Error");
      })
      .then(response => response.json())
      .then(data => {
        const currentDate = new Date().toLocaleDateString();

        this.setState({
          error: false,
          date: currentDate,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          timezone: data.timezone,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          img: data.weather[0].icon
        });
      })
      .catch(error => {
        this.setState({
          error: true,
          city: this.state.value
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Search
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

const Search = props => {
  return (
    <form onSubmit={props.submit} className="search">
      <input
        type="text"
        value={props.value}
        onChange={props.change}
        placeholder="City..."
        className="search__input"
      />
      <button className="search__button">Check weather</button>
    </form>
  );
};

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

ReactDOM.render(<App />, document.getElementById("root"));
