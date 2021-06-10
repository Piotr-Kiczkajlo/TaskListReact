import React from "react";
import "./style.css";

const Form = () => (
  <form className="form">
    <input className="form__inputField" placeholder="Co jest do zrobienia ?" />
    <button className="form__submitButton" type="submit">
      Dodaj zadanie
    </button>
  </form>
);

export default Form;
