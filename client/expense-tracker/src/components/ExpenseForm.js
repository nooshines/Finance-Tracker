import React, { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { addExpense } from "../api";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ExpenseForm = () => {
  const classes = useStyles();

  const { expenses, setExpense } = useContext(BudgetContext);
  const [expenseInput, setExpenseInput] = useState([]);
  const [amountInput, setAmountInput] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (expenseInput && amountInput) {
      const newExpense = await addExpense({
        title: expenseInput,
        amount: amountInput,
      });
      setExpense([...expenses, newExpense]);
      setExpenseInput("");
      setAmountInput("");
    } else {
      alert("please fill out the fields");
    }
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className={classes.root}
        autoComplete="off"
      >
        <TextField
          label="expense"
          variant="outlined"
          name="expense"
          value={expenseInput}
          onChange={(e) => setExpenseInput(e.currentTarget.value)}
        />

        <TextField
          label="amount"
          variant="outlined"
          name="amount"
          value={amountInput}
          onChange={(e) => setAmountInput(e.currentTarget.value)}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ExpenseForm;
