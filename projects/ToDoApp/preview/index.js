class App extends React.Component {
  counter = 3;

  state = {
    tasks: [
      {
        id: 0,
        text: "Learn React",
        date: "2020-01-31",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Learn JavaScript",
        date: "2020-01-01",
        important: false,
        active: false,
        finishDate: "2020-01-01"
      },
      {
        id: 2,
        text: "Learn CSS",
        date: "2020-01-01",
        important: true,
        active: false,
        finishDate: "2020-01-01"
      }
    ]
  };

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
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
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;
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

class AddTask extends React.Component {
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
    const { text, date, checked } = this.state;

    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
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
        <label htmlFor="date" className="date">
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

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="taskList">
        <h2>Zadania do zrobienia:</h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p className="lack">
            Nie masz zadań do wykonania. Zrób coś ciekawego :)
          </p>
        )}
      </div>
      <hr />
      <div className="taskList">
        <h2>
          Zadania zrobione: <strong>({done.length})</strong>
        </h2>
        {doneTasks}
      </div>
    </>
  );
};

const Task = props => {
  const { text, date, id, active, important, finishDate } = props.task;

  const importantStyle = {
    color: "red"
  };

  if (active) {
    return (
      <div className="task">
        <p>
          <strong style={important ? importantStyle : null}>{text}</strong>
          <small className="date"> (Zrobić do: {date})</small>
        </p>
        <button className="achive" onClick={() => props.change(id)}>
          Wykonane
        </button>
        <button className="delete" onClick={() => props.delete(id)}>
          Usuń
        </button>
      </div>
    );
  } else {
    return (
      <div className="task">
        <p>
          <strong>{text}</strong>{" "}
          <small className="date"> (Zrobić do: {date})</small>
          <small className="date">(Potwierdzenie: {finishDate})</small>
        </p>
        <button className="delete" onClick={() => props.delete(id)}>
          Usuń
        </button>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
