import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
    messageForm: "",

    error: {
      username: false,
      email: false,
      password: false,
      accept: false
    }
  };

  messages = {
    username_incorrect:
      "Nazwa musi być dłuższa niż 5 znaków i nie zawierać spacji!",
    email_incorrect: "Brak @ w emailu!",
    password_incorrect: "Hasło musi miec minimum 8 znaków",
    accept_inncorect: "Nie zaakceptowano regulaminu!"
  };

  handleChange = e => {
    const name = e.target.name;
    const type = e.target.type;

    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;
      this.setState({
        [name]: value
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      this.setState({
        [name]: checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const validation = this.formValidation();

    if (validation.formCorrect) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,
        messageForm: "Formularz został wysłany! :)",
        error: {
          username: false,
          email: false,
          password: false,
          accept: false
        }
      });
      console.log("Formularz wysłany");
    } else {
      this.setState({
        error: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept
        }
      });
      console.log("formularz błędny");
    }
  };

  formValidation = () => {
    // true: okay, false: not okay

    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let formCorrect = false;

    if (
      this.state.username.length > 5 &&
      this.state.username.indexOf(" ") === -1
    ) {
      // this.state.username.indexOf(' ') === -1
      // jeżeli jest spacja zwróci jakąć cyfre, jak nie będzie to zwróci -1
      username = true;
    }

    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }

    if (this.state.password.length >= 8) {
      password = true;
    }

    if (this.state.accept) {
      accept = true;
    }

    if (username && email && password && accept) {
      formCorrect = true;
    }

    return {
      formCorrect,
      username,
      email,
      password,
      accept
    };
  };

  // Usunięcie wiadomości (o wysłanym formularzu) po 3s.
  componentDidUpdate() {
    if (this.state.messageForm !== "") {
      setTimeout(
        () =>
          this.setState({
            messageForm: ""
          }),
        3000
      );
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user" className="label__name">
            Twoje imię:
          </label>
          <input
            type="text"
            id="user"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            className="input__name"
          />
          <p>
            {this.state.error.username && (
              <span>{this.messages.username_incorrect}</span>
            )}
          </p>

          <label htmlFor="email" className="label__email">
            Twój email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            className="input__email"
          />
          <p>
            {this.state.error.email && (
              <span>{this.messages.email_incorrect}</span>
            )}
          </p>

          <label htmlFor="password" className="label__pass">
            Twoje hasło:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className="input__pass"
          />
          <p>
            {this.state.error.password && (
              <span>{this.messages.password_incorrect}</span>
            )}
          </p>

          <label htmlFor="accept" className="accept">
            <input
              type="checkbox"
              name="accept"
              id="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Zgadzam się z regulaminem
          </label>
          <p>
            {this.state.error.accept && (
              <span>{this.messages.accept_inncorect}</span>
            )}
          </p>

          <button>Wyślij</button>
        </form>
        {this.state.messageForm && <h3>{this.state.messageForm}</h3>}
      </div>
    );
  }
}

export default App;
