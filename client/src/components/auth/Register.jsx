import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alert/AlertContext";
const Register = () => {
  const alertContext = useContext(AlertContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const onChange = e =>
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (user.name === "" || user.password === "" || user.email === "") {
      alertContext.setAlert("Please fill out all fields", "danger");
    } else if (user.password !== user.password2) {
      alertContext.setAlert("passwords dont match", "danger");
    } else {
      console.log("register submit");
    }
  };
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={user.password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className=" btn btn-primary btn-block"
        />
      </form>
      <h5>
        {" "}
        Already an User? Please,{" "}
        <Link to="/login">
          <span className="text-primary">Login</span>
        </Link>
      </h5>
    </div>
  );
};

export default Register;
