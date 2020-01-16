import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleCheck = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleClick = () => {
    console.log("dodaj");
    const { text, date, checked } = this.state;

    if (text.length > 2) {
      const add = this.props.add(text, date, checked); // przekazujemy to do addTask z App.js
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("Za krótka nazwa");
    }
  };

  render() {
    const maxDate = this.state.date.slice(0, 4) * 1 + 1;

    return (
      <div className="addTask">
        <input
          className="task"
          type="text"
          placeholder="Wpisz co chciałbyś zrobić...?"
          value={this.state.text}
          onChange={this.handleText}
        />
        <label htmlFor="important" className="important">
          Zadanie priorytetowe:
          <input
            type="checkbox"
            id="important"
            checked={this.state.checked}
            onChange={this.handleCheck}
          />
        </label>
        <br />
        <label htmlFor="date">
          Do kiedy wykonać zadanie:
          <input
            type="date"
            id="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate + "-12-31"}
            onChange={this.handleDate}
          />
        </label>
        <button onClick={this.handleClick}>Dodaj zadanie!</button>
      </div>
    );
  }
}

export default AddTask;
