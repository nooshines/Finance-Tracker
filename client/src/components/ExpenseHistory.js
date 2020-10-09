import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import Expense from "./Expense";

const ExpenseHistory = () => {
  const { expenses } = useContext(BudgetContext);

  console.log("expenses", expenses);

  return (
    <>
      <h3>Expense - Transaction History</h3>

      {expenses.map((expense) => {
        return <Expense expense={expense} key={expense.id} />;
      })}
    </>
  );
};

export default ExpenseHistory;
