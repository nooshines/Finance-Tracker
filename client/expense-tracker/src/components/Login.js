import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../api";

const Login = ({ setLoggedIn, setUser }) => {
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const onChangeHandler = (e) => {
    const name = e.currentTarget.name;
    let obj = { ...formData };
    obj[name] = e.currentTarget.value;
    setFormData(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    login(formData)
      .then((result) => {
        console.log("loggedin", result);
        localStorage.setItem("token", result.user.token);
        setLoggedIn(true);
        setUser(result.user);
        history.push("/home");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  return (
    <>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">UserName</label>
            <input
              id="name"
              type="name"
              name="name"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={onChangeHandler}
              required
              minLength="6"
            />
          </div>
          <input
            type="submit"
            value="submit"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
