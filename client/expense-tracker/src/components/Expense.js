import React, { useContext, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { InputBase } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { BudgetContext } from "../context/BudgetContext";
import { delExpense, updateExpense } from "../api";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const StyledInputBase = styled(InputBase)`
  width: 40%;
  &.view {
    input {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &.edit {
    border: 1px solid lightgray;
    padding: 5px;
    border-radius: 5px;
    margin-right: 3px;
  }
`;

const Expense = ({ expense }) => {
  const classes = useStyles();

  const { expenses, setExpense } = useContext(BudgetContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [expenseInput, setExpenseInput] = useState(expense.title);
  const [amountInput, setAmountInput] = useState(expense.amount);
  const [currentId, setCurrentId] = useState("");

  const deleteExpense = async (id) => {
    const data = await delExpense(id);
    setExpense(expenses.filter((expense) => expense.id !== data[0].id));
  };

  const editHandler = (id) => {
    setOpenEdit(true);
    setCurrentId(id);
  };

  const saveHandler = async () => {
    const newExpense = await updateExpense(currentId, {
      title: expenseInput,
      amount: amountInput,
    });
    setOpenEdit(false);
    let updateExpenseState = [...expenses];
    let findExpenseIndex = updateExpenseState.findIndex((expense) => {
      return expense.id === currentId;
    });
    if (findExpenseIndex !== undefined) {
      updateExpenseState[findExpenseIndex] = newExpense.data;
      setExpense([...updateExpenseState]);
    }
  };

  return (
    <>
      {openEdit ? (
        <div>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <StyledInputBase
                className="edit"
                onChange={(e) => {
                  setExpenseInput(e.target.value);
                }}
                defaultValue={expense.title}
              >
                {expense.title}
              </StyledInputBase>
              <StyledInputBase
                className="edit"
                onChange={(e) => {
                  setAmountInput(e.target.value);
                }}
                defaultValue={expense.amount}
              >
                {expense.amount}
              </StyledInputBase>
            </Grid>
            <Grid item justify="flex-end" xs={6}>
              <Button
                variant="contained"
                size="small"
                className={classes.margin}
                onClick={() => saveHandler()}
              >
                Save
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.margin}
                onClick={() => setOpenEdit(false)}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>
          <Grid item container s={12}>
            <Grid item xs={6}>
              <StyledInputBase
                defaultValue={expense.title}
                className="view"
              ></StyledInputBase>
              <StyledInputBase
                className="view"
                defaultValue={`$ ${expense.amount}`}
              ></StyledInputBase>
            </Grid>
            <Grid item justify="flex-end" xs={6}>
              <Button
                variant="contained"
                size="small"
                className={classes.margin}
                onClick={() => deleteExpense(expense.id)}
              >
                Remove
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.margin}
                onClick={() => editHandler(expense.id)}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default Expense;
