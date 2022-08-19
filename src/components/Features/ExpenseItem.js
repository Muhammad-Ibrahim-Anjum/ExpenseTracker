import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./CSS/ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const updateTitle = () => {
    setTitle("Qasim");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={updateTitle}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
