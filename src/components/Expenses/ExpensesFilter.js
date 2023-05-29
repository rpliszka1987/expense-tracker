import react from "react";
import "./ExpensesFilter.css";

function ExpenseFilter() {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select>
          <option vlaue="2023">2023</option>
          <option vlaue="2022">2022</option>
          <option vlaue="2021">2021</option>
          <option vlaue="2020">2020</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
