import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  console.log(props);
  return(
    <div className="expense">
      <ExpenseItem
        expense={props.expense[0]}
      />
      <ExpenseItem
        expense={props.expense[1]}
      />
      <ExpenseItem
        expense={props.expense[2]}
      />
      <ExpenseItem
        expense={props.expense[3]}
      />
    </div>
  );
}

export default Expense;