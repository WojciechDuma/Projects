import React, { Component } from "react";
import Search from "./Search";
import Result from "./Result";
import "./App.css";

const APIkey = "379bf8a72ed22a3cc2455e5323ca0bc6";

class App extends Component {
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
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIkey}&units=metric`;

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
export default App;
