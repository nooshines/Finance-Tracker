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
      // width: "25ch",
    },
  },
}));

const IncomeForm = () => {
  const classes = useStyles();

  const { incomes, setIncome } = useContext(BudgetContext);
  const [incomeInput, setIncomeInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [errorIncomeInput, setErrorIncomeInput] = useState("");
  const [errorAmountInput, setErrorAmountInput] = useState("");

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
      setErrorIncomeInput("");
      setErrorAmountInput("");
    } else {
      if (!incomeInput) {
        setErrorIncomeInput("Income Input is required");
      }
      if (!amountInput) {
        setErrorAmountInput("Amount Input is required");
      }
    }
  };

  const onChangeHandler = (e) => {
    if (e.currentTarget.name === "income") {
      setIncomeInput(e.currentTarget.value);
    } else {
      setAmountInput(e.currentTarget.value);
    }
  };

  const onBlurHandler = (e) => {
    if (e.currentTarget.name === "income") {
      setIncomeInput(e.currentTarget.value);
      !e.currentTarget.value
        ? setErrorIncomeInput("Income Input is required")
        : setErrorIncomeInput("");
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
          error={errorIncomeInput ? true : false}
          helperText={errorIncomeInput ? errorIncomeInput : ""}
          label="income"
          variant="outlined"
          name="income"
          value={incomeInput}
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

export default IncomeForm;
