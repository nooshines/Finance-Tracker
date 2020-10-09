import React, { useState } from "react";
import BudgetContexProvider from "./context/BudgetContext";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

const isLoggedIn = () => {
  if (window.localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};

function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());
  const [user, setUser] = useState({});
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} setUser={setUser} />
          </Route>
          <Route path="/home">
            {loggedIn ? (
              <BudgetContexProvider>
                <Home user={user} setLoggedIn={setLoggedIn} />
              </BudgetContexProvider>
            ) : (
              <Redirect to="/signup" />
            )}
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
