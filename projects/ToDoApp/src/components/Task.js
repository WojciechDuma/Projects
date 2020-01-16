import React from "react";

const Task = props => {
  const { text, date, id, active, important, finishDate } = props.task;

  const importantStyle = {
    color: "red"
  };

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? importantStyle : null}>{text}</strong> - do
          dnia {date}
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <strong>{text}</strong> - (zrobić do dnia {date})
          <br />
          Wykonane w dniu: <span>{finishDate}</span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
