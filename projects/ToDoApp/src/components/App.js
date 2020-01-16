import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 5;

  state = {
    tasks: [
      {
        id: 0,
        text: "Grać w grę",
        date: "2020-01-31",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Pierwszy",
        date: "2019-01-31",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Drugie",
        date: "2021-01-31",
        important: true,
        active: false,
        finishDate: null
      },
      {
        id: 3,
        text: "Trzeci",
        date: "2022-01-31",
        important: false,
        active: false,
        finishDate: null
      },
      {
        id: 4,
        text: "Kolejny",
        date: "2023-01-31",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    // Metoda I
    // const tasks = [...this.state.tasks]; // Kopia tablicy ze state
    // const index = tasks.findIndex(task => task.id === id); //Znajdujemy index w tablicy który odpowiada przekazywanemu id
    // tasks.splice(index, 1); // usuwamy element o index = id, jeden element
    // this.setState({
    //   tasks: tasks
    // });

    // Metoda II
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id); // powstanie nowa tablica ze wszystkimi elementami oprócz tego z przekazanym id
    this.setState({
      tasks: tasks
    });
    this.counter--;
  };

  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().toLocaleString();
      }
    });
    this.setState({
      tasks: tasks
    });
  };

  addTask = (text, date, important) => {
    console.log("dodano");
    const task = {
      id: this.counter,
      text: text, //tekst z inputa
      date: date, // tekst z inputa
      important: important, // tekst z checkboxa
      active: true,
      finishDate: null
    };
    this.counter++;
    console.log(task);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };

  render() {
    return (
      <div className="container">
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
