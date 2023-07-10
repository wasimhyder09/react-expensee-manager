import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  return(
    <div className="expenses">
      <ExpenseItem
        expense={props.item[0]}
      />
      <ExpenseItem
        expense={props.item[1]}
      />
      <ExpenseItem
        expense={props.item[2]}
      />
      <ExpenseItem
        expense={props.item[3]}
      />
    </div>
  );
}

export default Expense;