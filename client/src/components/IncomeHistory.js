import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import Income from "./Income";

const IncomeHistory = () => {
  const { incomes } = useContext(BudgetContext);
  return (
    <>
      <h3>Income - Transaction History</h3>

      {incomes.map((income) => {
        return <Income income={income} key={income.id} />;
      })}
    </>
  );
};

export default IncomeHistory;
