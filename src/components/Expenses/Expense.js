import {useState} from 'react';
import ExpensesFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList"

function Expense(props) {
  const[filterYear, setFilteYear] = useState('2020');
  const filterValueChange = (changedYearValue) => {
    setFilteYear(changedYearValue);
  };
  const filteredExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return(
    <div className="expenses">
      <ExpensesFilter selected={filterYear} onChangeFilter={filterValueChange} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expense={filteredExpenses} />
    </div>
  );
}

export default Expense;