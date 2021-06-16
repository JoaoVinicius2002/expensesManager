import React, { useState } from 'react'
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2020, 8, 4) },
  { title: "Toilet Paper", amount: 5.21, date: new Date(2020, 2, 4) },
  { title: "Pen", amount: 1.5, date: new Date(2020, 7, 1) },
  { title: "Gas", amount: 87.0, date: new Date(2020, 8, 1) },
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return[expense, ...expenses]
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
