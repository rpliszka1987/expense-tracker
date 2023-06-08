import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState("2020");

  const saveFilterData = (enteredFilterData) => {
    setFilterYear(enteredFilterData);
  };

  // This filters the expenses data received.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onAddFilterYear={saveFilterData}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/* Displays filtered expenses using conditional statement. If there are none it displays no expenses found */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
