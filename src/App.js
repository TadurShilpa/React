import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense/Expense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    date: new Date(2023, 5, 15),
    title: "Toilet Paper",
    amount: 94.12,
    locationOfExpenditure: "Pune",
  },
  {
    id: "e2",
    date: new Date(2023, 5, 13),
    title: "New TV",
    amount: 799.96,
    locationOfExpenditure: "Solapur",
  },
  {
    id: "e3",
    date: new Date(2023, 5, 5),
    title: "Car Insurance",
    amount: 294.45,
    locationOfExpenditure: "Hyderabad",
  },
  {
    id: "e4",
    date: new Date(2023, 5, 25),
    title: "Laptop",
    amount: 989.47,
    locationOfExpenditure: "Mumbai",
  },
];
// const App = () => {
//const expenses = [

// const addExpenseHandler = (expense) => {
//   console.log("In App.js");
//   console.log(expense);
// }
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    // <div>

    // <h2>Let's get started!</h2>
    // {expenses.map((expense) => (
    //    <ExpenseItem item={expense} key={expense.id}></ExpenseItem>
    // ))}
    // <div>
    //   <NewExpense onAddExpense={addExpenseHandler} />
    //   <Expense items={expenses} />
    // </div>
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <h2>ExpenseItems Details</h2>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
