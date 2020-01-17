import React from "react";

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

export default Task;
