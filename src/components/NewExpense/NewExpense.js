import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  // Function that adds the value from child to parent from the expense form.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    // Closes the form on submission
    setIsEditing(false);
  };

  // Opens up the form
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // Closes the form
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* Conditional depending if we are using the form */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
