import React from "react";
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
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    // height: "200px",
  },
  paper1: {
    padding: theme.spacing(1),
    textAlign: "center",
    // height: "150px",
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
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

          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper1}>
              {" "}
              <h2>Income</h2>
              <IncomeForm />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper1}>
              {" "}
              <h2>Expense</h2>
              <ExpenseForm />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper2}>
              {" "}
              <IncomeHistory />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper2}>
              {" "}
              <ExpenseHistory />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
