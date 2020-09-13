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
      // width: "25ch",
    },
  },
}));

const ExpenseForm = () => {
  const classes = useStyles();

  const { expenses, setExpense } = useContext(BudgetContext);
  const [expenseInput, setExpenseInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [errorExpenseInput, setErrorExpenseInput] = useState("");
  const [errorAmountInput, setErrorAmountInput] = useState("");

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
      setErrorExpenseInput("");
      setErrorAmountInput("");
    } else {
      if (!expenseInput) {
        setErrorExpenseInput("Expense Input is required");
      }
      if (!amountInput) {
        setErrorAmountInput("Amount Input is required");
      }
    }
  };

  const onChangeHandler = (e) => {
    if (e.currentTarget.name === "expense") {
      setExpenseInput(e.currentTarget.value);
    } else {
      setAmountInput(e.currentTarget.value);
    }
  };

  const onBlurHandler = (e) => {
    if (e.currentTarget.name === "expense") {
      setExpenseInput(e.currentTarget.value);
      !e.currentTarget.value
        ? setErrorExpenseInput("Expense Input is required")
        : setErrorExpenseInput("");
    } else {
      setAmountInput(e.currentTarget.value);
      !e.currentTarget.value
        ? setErrorAmountInput("Amount Input is required")
        : setErrorAmountInput("");
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
          id="outlined-size-small"
          size="small"
          error={errorExpenseInput ? true : false}
          helperText={errorExpenseInput ? errorExpenseInput : ""}
          label="expense"
          variant="outlined"
          name="expense"
          value={expenseInput}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />

        <TextField
          id="outlined-size-small"
          size="small"
          error={errorAmountInput ? true : false}
          helperText={errorAmountInput ? errorAmountInput : ""}
          type="number"
          label="amount"
          variant="outlined"
          name="amount"
          value={amountInput}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ExpenseForm;
