import { useState } from 'react';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [expenseForm, setExpenseForm] = useState(0);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
  };

  const amoutChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // });
  };

  // Generic Input handler.
  // const inputChangeHanlder = (identifier, value) => {
  //   if (identifier === 'title') {
  //     setEnteredTitle(value);
  //   }
  //   else if (identifier === 'amount') {
  //     setEnteredAmount(value);
  //   }
  //   else {
  //     setEnteredDate(value);
  //   }
  // };

  const addExpenseHandler = () => {
    setExpenseForm(1)
  }

  const cancelHandler = () => {
    setExpenseForm(0)
  }

  const submitHanlder = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    setExpenseForm(0);
  };

  return (
    <>
    {expenseForm === 1 ?
      <form onSubmit={submitHanlder}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            {/* <input type="text" onChange={(event) => inputChangeHanlder('title', event.target.value)} /> This is how you will call the generic input change handler. */}
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amoutChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
      : <button onClick={addExpenseHandler}>Add New Expense</button>
    }
    </>
  );
};

export default ExpenseForm;