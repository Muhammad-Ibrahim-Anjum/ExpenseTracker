import React from "react";
import "./CSS/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveDataHandler = (enteredData) => {
    const newExpense = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveDataHandler} />
    </div>
  );
};

export default NewExpense;
