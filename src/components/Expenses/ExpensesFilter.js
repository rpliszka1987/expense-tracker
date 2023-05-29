import React from "react";
import "./ExpensesFilter.css";

function ExpenseFilter(props) {
  // Passes the value from the dropdown menu lifting it to a parent componenet expenses
  const setYearHandler = (event) => {
    props.onAddFilterYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={setYearHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
