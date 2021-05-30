import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`list__item ${
          task.done && hideDoneTasks ? "list__item--hide" : ""
        }`}
      >
        <button className="list__toggleButton list__toggleButton--check">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`list__item--content ${
            task.done ? "list__item--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button className="list__toggleButton list__toggleButton--delete">🗑️
        </button>
      </li>
    ))}
  </ul>
);
export default Tasks;
