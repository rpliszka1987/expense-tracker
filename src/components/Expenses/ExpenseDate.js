import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  // These are helpers to get the date in the correct format.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="rxpense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
