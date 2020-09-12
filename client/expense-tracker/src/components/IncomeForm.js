import React, { useState, useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import { addIncome } from "../api";

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

const IncomeForm = () => {
  const classes = useStyles();

  const { incomes, setIncome } = useContext(BudgetContext);
  const [incomeInput, setIncomeInput] = useState([]);
  const [amountInput, setAmountInput] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (incomeInput && amountInput) {
      const newIncome = await addIncome({
        title: incomeInput,
        amount: amountInput,
      });
      setIncome([...incomes, newIncome]);
      setIncomeInput("");
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
          label="income"
          variant="outlined"
          name="income"
          value={incomeInput}
          onChange={(e) => setIncomeInput(e.currentTarget.value)}
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

export default IncomeForm;
