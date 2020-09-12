import React from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

const Home = ({ user, setLoggedIn }) => {
  return (
    <>
      <CssBaseline />
      {/* <SideBar user={user} setLoggedIn={setLoggedIn} /> */}
      <Navbar user={user} setLoggedIn={setLoggedIn} />
      <Container maxWidth="m">
        <Dashboard />
      </Container>
    </>
  );
};

export default Home;
