import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  // Setting single state object to store state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredPrice: "",
  //   enteredDate: "",
  // });

  // Saving title to state
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // Updating state in single state
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // console.log(event.target.value);

    // Correct way of using a function to update state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  // Saving price to state

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredPrice: event.target.value,
    // });
  };

  // Saving date to state

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    console.log(event.target.value);
  };

  const formSumbmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(eneteredDate),
    };

    // Calling the function from parent to pass up the data to the parent
    props.onSaveExpenseData(expenseData);

    // Clear input fields from form on submission
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formSumbmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={eneteredDate}
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
