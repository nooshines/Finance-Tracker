import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Home = ({ user, setLoggedIn }) => {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          style={{ background: "#22b2da" }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap>
              Finance Tracker
            </Typography>
            <Typography
              variant="h6"
              noWrap
              style={{
                marginLeft: "200px",
                paddingLeft: "300px",
              }}
            >
              Welcome
            </Typography>
            <Typography
              variant="h6"
              noWrap
              style={{
                marginLeft: "10px",
                textTransform: "uppercase",
              }}
            >
              {user.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              {["Dashboard", "Profile", "Daily Report", "Monthly Report"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <Link
                  to="/signup"
                  onClick={handleLogout}
                  className="styledanchor"
                  style={{ color: "black" }}
                >
                  Logout
                </Link>
              </ListItem>
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Dashboard />
        </main>
      </div>
    </>
  );
};

export default Home;
