import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleDoneTask }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && hideDone ? "list__item--hide" : ""
        }`}
      >
        <button
          onClick={() => toggleDoneTask(task.id)}
          className="list__toggleButton list__toggleButton--check"
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`list__item--content ${
            task.done ? "list__item--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button
          onClick={() => removeTask(task.id)}
          className="list__toggleButton list__toggleButton--delete"
        >
          🗑️
        </button>
      </li>
    ))}
  </ul>
);
export default Tasks;
