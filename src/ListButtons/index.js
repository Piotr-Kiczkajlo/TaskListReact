import React from "react";
import "./style.css";

const ListButtons = ({ tasks, hideDone, toggleHideDone }) => (
  <div className="listButtons">
    {tasks.length > 0 && (
      <React.Fragment>
        <button onClick={toggleHideDone} className="manageTasksButton">
          {tasks.some(({ done }) => done) && hideDone
            ? "Pokaż ukończone"
            : "Ukryj ukończone"}
        </button>
        <button
          className="manageTasksButton"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </React.Fragment>
    )}
  </div>
);
export default ListButtons;
