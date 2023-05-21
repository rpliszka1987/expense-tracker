import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [eneteredDate, setEnteredDate] = useState("");
  // const [enteredPrice, setEnteredPrice] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredPrice: "",
    enteredDate: "",
  });

  // Saving title to state
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    console.log(event.target.value);
  };

  // Saving price to state

  const priceChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredPrice: event.target.value,
    });
  };

  // Saving date to state

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
