import React, { createContext, useState, useEffect } from "react";
import { getIncomes, getExpenses } from "../api";

export const BudgetContext = createContext();

const BudgectContextProvider = ({ children }) => {
  const [incomes, setIncome] = useState([]);
  const [expenses, setExpense] = useState([]);

  useEffect(() => {
    getIncomes().then((incomes) => {
      console.log("incomes", incomes);
      setIncome(incomes);
    });
    getExpenses().then((expenses) => {
      console.log("expenses", expenses);
      setExpense(expenses);
    });
  }, []);

  const incomeAmounts = incomes.map((income) => income.amount);
  const expenseAmounts = expenses.map((expense) => expense.amount);

  const totalIncome = incomeAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const totalExpense = expenseAmounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <BudgetContext.Provider
      value={{
        incomes,
        setIncome,
        expenses,
        setExpense,
        totalIncome,
        totalExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgectContextProvider;
