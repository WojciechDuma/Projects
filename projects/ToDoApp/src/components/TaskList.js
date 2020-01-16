import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active); // można zapisać też task => task.active === true / sprawdzamy które elementy są active = true i je przypisujemy do nowej tablicy active
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
      <div>
        <h2>Zadania do zrobienia:</h2>
        {activeTasks.length > 0
          ? activeTasks
          : "Nie masz zadań do wykonania. Zrób coś ciekawego :)"}
      </div>

      <hr />

      <div>
        <h2>
          Zadania zrobione: <strong>({done.length})</strong>
        </h2>
        {doneTasks}
      </div>
    </>
  );
};

export default TaskList;
