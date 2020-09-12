import React from "react";
import styled from "styled-components";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import IncomeHistory from "./IncomeHistory";
import ExpenseHistory from "./ExpenseHistory";
import Balance from "./Balance";
import IncomeChart from "./IncomeChart";
import ExpenseChart from "./ExpenseChart";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    height: "300px",
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",

    height: "600px",
  },
}));

const Container = styled.div`
  padding-top: 50px;
  /* padding-left: 250px; */
`;

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <IncomeChart />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <ExpenseChart />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper}>
                <Balance />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper1}>
                {" "}
                <h2>Income</h2>
                <IncomeForm />
                <h2>Expense</h2>
                <ExpenseForm />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper1}>
                {" "}
                <IncomeHistory />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className={classes.paper1}>
                {" "}
                <ExpenseHistory />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
