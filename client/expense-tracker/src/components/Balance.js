import React, { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { Doughnut } from "react-chartjs-2";

const Balance = () => {
  const { totalIncome, totalExpense } = useContext(BudgetContext);

  const state = {
    labels: [`Income $${totalIncome}`, `Expense $${totalExpense}`],
    datasets: [
      {
        label: "Income",
        backgroundColor: ["#66d37e", "#ea5455"],
        hoverBackgroundColor: ["#175000", "#003350"],
        data: [totalIncome, totalExpense],
      },
    ],
  };

  return (
    <>
      <Doughnut
        data={state}
        options={{
          title: {
            text: `Balance $ ${totalIncome - totalExpense}`,
            display: true,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </>
  );
};

export default Balance;
