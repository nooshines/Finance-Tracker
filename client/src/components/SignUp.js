import React, { useState } from "react";
import { signup } from "../api";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const SignUp = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({ name: "", password: "" });
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [msg, setMsg] = useState("");

  const onChange = (e) => {
    const name = e.currentTarget.name;
    let obj = { ...formData };
    obj[name] = e.currentTarget.value;
    setFormData(obj);
  };

  const onSubmit = async (e) => {
    console.log("formDta", formData);
    e.preventDefault();
    const user = await signup({ user: formData }).catch((err) => {
      console.log("errors", err);
    });
    console.log("user", user);

    setFormData({ name: "", password: "" });
    if (user.errors) {
      setOpen(true);
      setSeverity("error");
      setMsg("User already exist!");
    } else if (user.id) {
      setOpen(true);
      setSeverity("info");
      setMsg(" User Successfully created, Please Login !");
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={formData.name}
              id="name"
              type="name"
              name="name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={formData.password}
              id="password"
              type="password"
              name="password"
              onChange={onChange}
              required
              minLength="6"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          />
          {open && <Alert severity={severity}>{msg}</Alert>}
        </form>
        <span>Have an acount?</span>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default SignUp;
