import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { BudgetContext } from "../context/BudgetContext";

const IncomeChart = () => {
  const { totalIncome, totalExpense } = useContext(BudgetContext);
  const balance = totalIncome - totalExpense;

  const state = {
    labels: ["Income", "Balance"],
    datasets: [
      {
        label: "Income",
        backgroundColor: ["#66d37e", "#d9dad7"],
        hoverBackgroundColor: ["#175000", "#003350"],
        data: [totalIncome, balance],
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
              text: `Income $ ${totalIncome}`,
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

export default IncomeChart;
