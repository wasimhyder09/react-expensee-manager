import { useState } from 'react';

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value
    // });
  };

  const amoutChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // });
  };

  // Generic Input handler.
  // const inputChangeHanlder = (identifier, value) => {
  //   if (identifier === 'title') {
  //     setTitle(value);
  //   }
  //   else if (identifier === 'amount') {
  //     setAmount(value);
  //   }
  //   else {
  //     setDate(value);
  //   }
  // };

  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
        {/* <input type="text" onChange={(event) => inputChangeHanlder('title', event.target.value)} /> This is for the call of generic input change handler. */}
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={amoutChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;