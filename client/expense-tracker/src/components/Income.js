import React, { useContext, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { InputBase } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { BudgetContext } from "../context/BudgetContext";
import { delIncome, updateIncome } from "../api";

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
      color: black;
    }
  }
  &.edit {
    /* border: 1px solid lightgray; */
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 5px;
    margin-right: 3px;
  }
`;

const Income = ({ income }) => {
  const classes = useStyles();

  const { incomes, setIncome } = useContext(BudgetContext);
  const [openEdit, setOpenEdit] = useState(false);
  const [incomeInput, setIncomeInput] = useState(income.title);
  const [amountInput, setAmountInput] = useState(income.amount);
  const [currentId, setCurrentId] = useState("");

  const deleteIncome = async (id) => {
    const data = await delIncome(id);
    setIncome(incomes.filter((income) => income.id !== data[0].id));
  };

  const editHandler = (id) => {
    setOpenEdit(true);
    setCurrentId(id);
  };

  const saveHandler = async () => {
    console.log("id", currentId);
    const newIncome = await updateIncome(currentId, {
      title: incomeInput,
      amount: amountInput,
    });
    setOpenEdit(false);
    let updateIncomeState = [...incomes];
    let findIncomeIndex = updateIncomeState.findIndex((income) => {
      return income.id === currentId;
    });
    console.log("finsIndexIncome", findIncomeIndex);
    console.log("newincome.data", newIncome.data);
    console.log(
      "updateIncomeState[findIncomeIndex]",
      updateIncomeState[findIncomeIndex]
    );
    if (findIncomeIndex && findIncomeIndex !== undefined) {
      updateIncomeState[findIncomeIndex] = newIncome.data;
      setIncome([...updateIncomeState]);
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
                  setIncomeInput(e.target.value);
                }}
                defaultValue={income.title}
              >
                {income.title}
              </StyledInputBase>
              <StyledInputBase
                className="edit"
                onChange={(e) => {
                  setAmountInput(e.target.value);
                }}
                defaultValue={income.amount}
              >
                {income.amount}
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
                disabled={true}
                defaultValue={income.title}
                className="view"
              ></StyledInputBase>
              <span>$</span>
              <StyledInputBase
                disabled={true}
                className="view"
                defaultValue={income.amount}
              ></StyledInputBase>
            </Grid>
            <Grid item justify="flex-end" xs={6}>
              <Button
                variant="contained"
                size="small"
                className={classes.margin}
                onClick={() => deleteIncome(income.id)}
              >
                Remove
              </Button>
              <Button
                variant="contained"
                size="small"
                className={classes.margin}
                onClick={() => editHandler(income.id)}
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

export default Income;
