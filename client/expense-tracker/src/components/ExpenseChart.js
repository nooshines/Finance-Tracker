import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { BudgetContext } from "../context/BudgetContext";

const ExpenseChart = () => {
  const { totalExpense, totalIncome } = useContext(BudgetContext);

  const balance = totalIncome - totalExpense;

  const state = {
    labels: ["Expense", "Balance"],
    datasets: [
      {
        label: "Expense",
        backgroundColor: ["#ea5455", "#d9dad7"],
        hoverBackgroundColor: ["#175000", "#003350"],
        data: [totalExpense, balance],
      },
    ],
  };

  return (
    <>
      <div>
        <Doughnut
          data={state}
          options={{
            title: {
              display: true,
              text: `Expense $ ${totalExpense}`,
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "bottom",
            },
          }}
        />
      </div>
    </>
  );
};

export default ExpenseChart;
