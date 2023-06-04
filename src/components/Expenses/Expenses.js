import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
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

  // Will display if no expenses are found
  let expensesContent = <p>No expenses found.</p>;

  // Checks if there are items in the array.
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onAddFilterYear={saveFilterData}
        />
        {/* Displays filtered expenses using conditional statement. If there are none it displays no expenses found */}
        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
