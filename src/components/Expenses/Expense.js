import {useState} from 'react';
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  const[filterYear, setFilteYear] = useState('2020');
  const filterValueChange = (changedYearValue) => {
    setFilteYear(changedYearValue);
  };
  const filteredExpense = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return(
    <div className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterValueChange} />
      {filteredExpense.map((expenseItem) =>
        <ExpenseItem key={expenseItem.id} expense={expenseItem} />
      )};
    </div>
  );
}

export default Expense;