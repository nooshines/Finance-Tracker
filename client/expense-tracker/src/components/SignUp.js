import React, { useState } from "react";
import { signup } from "../api";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  const onChange = (e) => {
    const name = e.currentTarget.name;
    let obj = { ...formData };
    obj[name] = e.currentTarget.value;
    setFormData(obj);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await signup({ user: formData });
    setFormData("");
    if (user) {
      setOpen(true);
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
          {open && <p> user successfully created, please login !</p>}
        </form>
        <span>Have an acount?</span>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default SignUp;
