import React, { useState } from "react";
import Main from "./Main";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username === "test" && password === "test123") {
      setIsLoggedIn(true);
    } else {
      alert("Please enter the (correct Username😒) or (correct Password😯)");
    }
  };

  if (isLoggedIn) {
    return <Main />;
  }

  const changeUsernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <header>
        <h2>Login 🤔</h2>
      </header>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <label htmlFor="name" className="container">
          Username
        </label>
        <input
          type="text"
          id="name"
          className="input-container"
          onChange={changeUsernameHandler}
        />
        <label htmlFor="password" className="container">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="input-container"
          onChange={changePasswordHandler}
        />
        <button className="button-container">LOGIN</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
